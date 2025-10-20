package org.app.enrollmentsystem.mapper.course;

import org.app.enrollmentsystem.dto.course.CourseRequest;
import org.app.enrollmentsystem.dto.course.CourseResponse;
import org.app.enrollmentsystem.model.Course;

public class CourseMapper {
  public static Course toEntity(CourseRequest req) {
    Course c = new Course();
    c.setCode(req.code().trim());
    c.setName(req.name().trim());
    c.setDescription(req.description());
    c.setCredits(req.credits());
    c.setSemesterLevel(req.semesterLevel());
    return c;
  }

  public static void updateEntity(Course entity, CourseRequest req) {
    entity.setCode(req.code().trim());
    entity.setName(req.name().trim());
    entity.setDescription(req.description());
    entity.setCredits(req.credits());
    entity.setSemesterLevel(req.semesterLevel());
  }

  public static CourseResponse toResponse(Course c) {
    return new CourseResponse(
        c.getId(),
        c.getCode(),
        c.getName(),
        c.getDescription(),
        c.getCredits(),
        c.getSemesterLevel(),
        c.getActive(),
        c.getRegistrationDate()
    );
  }
}
