package org.app.enrollmentsystem.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "student")
public class Student {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  @Column(nullable = false, length = 50)
  private String firstName;

  @Column(nullable = false, length = 50)
  private String lastName;

  @Column(nullable = false, unique = true, length = 20)
  private String nationalId;

  @Column(nullable = false, unique = true, length = 100)
  private String email;

  @Column(length = 20)
  private String phone;

  @Column(nullable = false)
  private LocalDate birthDate;

  @Column(length = 200)
  private String address;

  @Column(nullable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
  private LocalDateTime registrationDate = LocalDateTime.now();

  @Column(nullable = false)
  private Boolean active = true;

  @OneToMany(mappedBy = "student", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<Enrollment> enrollments;

}
