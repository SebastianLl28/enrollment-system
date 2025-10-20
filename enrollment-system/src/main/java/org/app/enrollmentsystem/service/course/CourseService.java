package org.app.enrollmentsystem.service.course;

import org.app.enrollmentsystem.dto.course.CourseRequest;
import org.app.enrollmentsystem.dto.course.CourseResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CourseService {
  Page<CourseResponse> listActive(Pageable pageable);

  CourseResponse getActiveById(Integer id);

  CourseResponse create(CourseRequest request);

  CourseResponse update(Integer id, CourseRequest request);

  void deactivate(Integer id);

  void reactivate(Integer id);
}
