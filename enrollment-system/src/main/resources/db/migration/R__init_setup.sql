-- ======================================
--  INSERT STUDENTS
-- ======================================
INSERT INTO student (first_name, last_name, national_id, email, phone, birth_date, address)
VALUES ('Carlos', 'Ramírez', '12345678', 'carlos.ramirez@example.com', '987654321', '2000-05-10', 'Av. Los Olivos 123'),
       ('María', 'Fernández', '87654321', 'maria.fernandez@example.com', '912345678', '1999-11-25', 'Jr. Lima 456'),
       ('Jorge', 'Pérez', '45678912', 'jorge.perez@example.com', '999111222', '2001-03-15', 'Av. Grau 890'),
       ('Lucía', 'Torres', '65432198', 'lucia.torres@example.com', '998877665', '2002-07-02', 'Calle San Martín 222'),
       ('Andrés', 'Gonzales', '78912345', 'andres.gonzales@example.com', '955444333', '1998-09-09',
        'Av. Universitaria 900');

-- ======================================
--  INSERT COURSES
-- ======================================
INSERT INTO course (code, name, description, credits, semester_level)
VALUES ('A001', 'Cálculo I', 'Conceptos básicos de límites, derivadas e integrales.', 4, 1),
       ('B002', 'Álgebra Lineal', 'Espacios vectoriales, matrices y transformaciones lineales.', 3, 2),
       ('C003', 'Estructura de Datos', 'Listas, pilas, colas, árboles y grafos.', 4, 3),
       ('D004', 'Bases de Datos', 'Modelo relacional, SQL y normalización.', 3, 3),
       ('E005', 'Programación Orientada a Objetos', 'Principios de POO en Java.', 4, 2),
       ('F006', 'Sistemas Operativos', 'Procesos, memoria y concurrencia.', 3, 4);

-- ======================================
--  INSERT ENROLLMENTS
-- ======================================
-- Cada estudiante inscrito en 2 o 3 cursos
INSERT INTO enrollment (student_id, course_id, enrollment_date, status, cost, payment_method)
VALUES (1, 1, '2025-03-01', 'PAID', 250.00, 'CREDIT CARD'),
       (1, 2, '2025-03-02', 'PAID', 200.00, 'CASH'),
       (2, 1, '2025-03-05', 'PENDING', 250.00, 'CASH'),
       (2, 3, '2025-03-05', 'PAID', 300.00, 'CREDIT CARD'),
       (3, 4, '2025-03-06', 'COMPLETED', 220.00, 'CASH'),
       (3, 5, '2025-03-07', 'PAID', 260.00, 'TRANSFER'),
       (4, 3, '2025-03-10', 'PENDING', 300.00, 'CASH'),
       (4, 6, '2025-03-11', 'PAID', 270.00, 'YAPE'),
       (5, 2, '2025-03-12', 'CANCELLED', 200.00, 'CREDIT CARD'),
       (5, 5, '2025-03-12', 'PAID', 260.00, 'TRANSFER');
