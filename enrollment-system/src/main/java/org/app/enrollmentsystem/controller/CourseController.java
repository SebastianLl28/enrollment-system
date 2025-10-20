package org.app.enrollmentsystem.controller;

import jakarta.validation.Valid;
import org.app.enrollmentsystem.dto.course.CourseRequest;
import org.app.enrollmentsystem.dto.course.CourseResponse;
import org.app.enrollmentsystem.service.course.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/courses")
public class CourseController {

  @Autowired
  private CourseService courseService;

  @GetMapping
  public Page<CourseResponse> list(Pageable pageable) {
    return courseService.listActive(pageable);
  }

  @GetMapping("/{id}")
  public CourseResponse get(@PathVariable Integer id) {
    return courseService.getActiveById(id);
  }

  @PutMapping("/{id}")
  public CourseResponse update(@PathVariable Integer id, @Valid @RequestBody CourseRequest request) {
    return courseService.update(id, request);
  }

  @PatchMapping("/{id}/deactivate")
  public ResponseEntity<Void> deactivate(@PathVariable Integer id) {
    courseService.deactivate(id);
    return ResponseEntity.noContent().build();
  }

  @PatchMapping("/{id}/reactivate")
  public ResponseEntity<Void> reactivate(@PathVariable Integer id) {
    courseService.reactivate(id);
    return ResponseEntity.noContent().build();
  }

  @PostMapping
  public ResponseEntity<CourseResponse> create(@Valid @RequestBody CourseRequest request) {
    CourseResponse created = courseService.create(request);
    return ResponseEntity.status(HttpStatus.CREATED).body(created);
  }


//  @PostMapping
//  public CourseResponse create(@RequestBody CourseRequest request) {
//    if (request.getCode() == null || request.getCode().isBlank()) {
//      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "El código es obligatorio");
//    }
//
//    String code = request.getCode().trim().toUpperCase();
//
//    if (courseRepository.existsByCode(code)) {
//      throw new ResponseStatusException(HttpStatus.CONFLICT, "El curso ya existe");
//    }
//
//    Course course = new Course();
//    course.setCode(code);
//    course.setName(request.getName());
//    course.setCredits(request.getCredits());
//    courseRepository.save(course);
//
//    // Construcción manual de respuesta (debería hacerla un mapper)
//    CourseResponse response = new CourseResponse();
//    response.setCode(code);
//    response.setMessage("Curso creado correctamente");
//
//    return response;
//  }
}
