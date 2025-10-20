CREATE TABLE student
(
    id                INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    first_name        VARCHAR(50)         NOT NULL,
    last_name         VARCHAR(50)         NOT NULL,
    national_id       VARCHAR(20) UNIQUE  NOT NULL,
    email             VARCHAR(100) UNIQUE NOT NULL,
    phone             VARCHAR(20),
    birth_date        DATE                NOT NULL,
    address           VARCHAR(200),
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    active            BOOLEAN   DEFAULT TRUE
);


CREATE TABLE course
(
    id                INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    code              VARCHAR(20) UNIQUE NOT NULL,
    name              VARCHAR(100)       NOT NULL,
    description       TEXT,
    credits           INTEGER            NOT NULL CHECK (credits > 0),
    semester_level    INTEGER            NOT NULL CHECK (semester_level > 0),
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    active            BOOLEAN   DEFAULT TRUE
);

CREATE TABLE enrollment
(
    id                INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    student_id        INTEGER        NOT NULL,
    course_id         INTEGER        NOT NULL,
    enrollment_date   DATE        DEFAULT CURRENT_DATE,
    status            VARCHAR(20) DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'PAID', 'CANCELLED', 'COMPLETED')),
    cost              NUMERIC(10, 2) NOT NULL CHECK (cost >= 0),
    payment_method    VARCHAR(50),
    registration_date TIMESTAMP   DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_student FOREIGN KEY (student_id) REFERENCES student (id) ON DELETE RESTRICT,
    CONSTRAINT fk_course FOREIGN KEY (course_id) REFERENCES course (id) ON DELETE RESTRICT,
    CONSTRAINT uk_enrollment UNIQUE (student_id, course_id)
);
