package org.app.enrollmentsystem.dto.course;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;

public record CourseRequest(@NotBlank @Size(max = 20) String code, @NotBlank @Size(max = 100) String name,
                            @Size(max = 2000) String description, @NotNull @Positive Integer credits,
                            @NotNull @Positive Integer semesterLevel) {
}
