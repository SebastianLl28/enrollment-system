package org.app.enrollmentsystem.service.course;

import org.app.enrollmentsystem.dto.course.CourseRequest;
import org.app.enrollmentsystem.dto.course.CourseResponse;
import org.app.enrollmentsystem.mapper.course.CourseMapper;
import org.app.enrollmentsystem.model.Course;
import org.app.enrollmentsystem.repository.CourseRepository;
import org.app.enrollmentsystem.shared.exception.ConflictException;
import org.app.enrollmentsystem.shared.exception.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CourseServiceImpl implements CourseService{

  @Autowired
  private CourseRepository courseRepository;

  @Override
  public Page<CourseResponse> listActive(Pageable pageable) {
    return courseRepository.findAllByActiveTrue(pageable).map(CourseMapper::toResponse);
  }

  @Override
  public CourseResponse getActiveById(Integer id) {
    return courseRepository.findByIdAndActiveTrue(id)
            .map(CourseMapper::toResponse)
            .orElseThrow(() -> new RuntimeException("Course not found"));
  }

  @Override
  public CourseResponse create(CourseRequest request) {
    if (courseRepository.existsByCodeIgnoreCase(request.code())) {
      throw new ConflictException("Ya existe un Course con code=" + request.code());
    }
    Course c = CourseMapper.toEntity(request);
    c.setActive(true);
    Course saved = courseRepository.save(c);
    return CourseMapper.toResponse(saved);
  }

  @Override
  public CourseResponse update(Integer id, CourseRequest request) {
    Course c = courseRepository.findById(id)
        .orElseThrow(() -> new NotFoundException("Course no encontrado"));
    if (courseRepository.existsByCodeIgnoreCaseAndIdNot(request.code(), id)) {
      throw new ConflictException("Ya existe otro Course con code=" + request.code());
    }
    CourseMapper.updateEntity(c, request);
    Course updated = courseRepository.save(c);
    return CourseMapper.toResponse(updated);
  }

  @Override
  public void deactivate(Integer id) {
    Course c = courseRepository.findById(id)
        .orElseThrow(() -> new NotFoundException("Course no encontrado"));
    if (Boolean.FALSE.equals(c.getActive())) return;
    c.setActive(false);
    courseRepository.save(c);
  }

  @Override
  public void reactivate(Integer id) {
    Course c = courseRepository.findById(id)
        .orElseThrow(() -> new NotFoundException("Course no encontrado"));
    if (Boolean.TRUE.equals(c.getActive())) return;
    c.setActive(true);
    courseRepository.save(c);
  }
}
