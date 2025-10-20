package org.app.enrollmentsystem.dto.course;

import java.time.LocalDateTime;

public record CourseResponse(Integer id, String code, String name, String description, Integer credits,
                             Integer semesterLevel, Boolean active, LocalDateTime registrationDate) {
}
