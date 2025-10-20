package org.app.enrollmentsystem.model;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "enrollment", uniqueConstraints = {@UniqueConstraint(columnNames = {"student_id", "course_id"})})
public class Enrollment {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  @ManyToOne(optional = false)
  @JoinColumn(name = "student_id", nullable = false)
  private Student student;

  @ManyToOne(optional = false)
  @JoinColumn(name = "course_id", nullable = false)
  private Course course;

  @Column(nullable = false)
  private LocalDate enrollmentDate = LocalDate.now();

  @Enumerated(EnumType.STRING)
  @Column(nullable = false, length = 20)
  private EnrollmentStatus status = EnrollmentStatus.PENDING;

  @Column(nullable = false, precision = 10, scale = 2)
  private BigDecimal cost;

  @Column(length = 50)
  private String paymentMethod;

  @Column(nullable = false)
  private LocalDateTime registrationDate = LocalDateTime.now();
}
