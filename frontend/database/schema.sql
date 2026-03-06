-- Teachers Table
CREATE TABLE teachers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  title VARCHAR(255),
  bio TEXT,
  short_bio VARCHAR(500),
  photo VARCHAR(500),
  experience INT,
  students_count INT DEFAULT 0,
  rating DECIMAL(3, 1),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Courses Table
CREATE TABLE courses (
  id INT PRIMARY KEY AUTO_INCREMENT,
  teacher_id INT,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE,
  description TEXT,
  short_description TEXT,
  category VARCHAR(100),
  level VARCHAR(50),
  duration VARCHAR(100),
  schedule VARCHAR(255),
  price DECIMAL(12, 2),
  original_price DECIMAL(12, 2),
  currency VARCHAR(10),
  image VARCHAR(500),
  target_score VARCHAR(50),
  enrolled_count INT DEFAULT 0,
  max_students INT,
  is_featured BOOLEAN DEFAULT FALSE,
  is_hot BOOLEAN DEFAULT FALSE,
  start_date DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (teacher_id) REFERENCES teachers(id),
  INDEX idx_slug (slug),
  INDEX idx_category (category),
  INDEX idx_level (level)
);

-- Course Tags Table
CREATE TABLE course_tags (
  id INT PRIMARY KEY AUTO_INCREMENT,
  course_id INT NOT NULL,
  tag VARCHAR(100),
  FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE,
  INDEX idx_course_id (course_id)
);

-- Course Highlights Table
CREATE TABLE course_highlights (
  id INT PRIMARY KEY AUTO_INCREMENT,
  course_id INT NOT NULL,
  highlight TEXT,
  FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE,
  INDEX idx_course_id (course_id)
);

-- Blog Posts Table
CREATE TABLE blog_posts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE,
  excerpt TEXT,
  content LONGTEXT,
  category VARCHAR(100),
  image VARCHAR(500),
  author VARCHAR(255),
  read_time INT,
  view_count INT DEFAULT 0,
  published_at DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_slug (slug),
  INDEX idx_category (category),
  INDEX idx_published_at (published_at)
);

-- Blog Post Tags Table
CREATE TABLE blog_tags (
  id INT PRIMARY KEY AUTO_INCREMENT,
  blog_id INT NOT NULL,
  tag VARCHAR(100),
  FOREIGN KEY (blog_id) REFERENCES blog_posts(id) ON DELETE CASCADE,
  INDEX idx_blog_id (blog_id)
);

-- Testimonials Table
CREATE TABLE testimonials (
  id INT PRIMARY KEY AUTO_INCREMENT,
  student_name VARCHAR(255),
  student_photo VARCHAR(500),
  course_taken VARCHAR(255),
  score_before VARCHAR(50),
  score_after VARCHAR(50),
  target_score VARCHAR(50),
  review TEXT,
  rating INT,
  university VARCHAR(255),
  date_submitted DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_date (date_submitted)
);

-- FAQs Table
CREATE TABLE faqs (
  id INT PRIMARY KEY AUTO_INCREMENT,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_category (category)
);

-- Statistics Table
CREATE TABLE statistics (
  id INT PRIMARY KEY AUTO_INCREMENT,
  label VARCHAR(255),
  value VARCHAR(100),
  icon VARCHAR(50),
  suffix VARCHAR(10),
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Registrations Table
CREATE TABLE registrations (
  id INT PRIMARY KEY AUTO_INCREMENT,
  student_name VARCHAR(255) NOT NULL,
  student_email VARCHAR(255),
  student_phone VARCHAR(20),
  course_id INT,
  message TEXT,
  status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (course_id) REFERENCES courses(id),
  INDEX idx_course_id (course_id),
  INDEX idx_status (status),
  INDEX idx_created_at (created_at)
);

-- Contact Messages Table
CREATE TABLE contact_messages (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  phone VARCHAR(20),
  message TEXT NOT NULL,
  status ENUM('unread', 'read', 'replied') DEFAULT 'unread',
  replied_at TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_status (status),
  INDEX idx_created_at (created_at)
);

-- Teacher Certificates Table
CREATE TABLE teacher_certificates (
  id INT PRIMARY KEY AUTO_INCREMENT,
  teacher_id INT NOT NULL,
  certificate VARCHAR(255),
  FOREIGN KEY (teacher_id) REFERENCES teachers(id) ON DELETE CASCADE,
  INDEX idx_teacher_id (teacher_id)
);

-- Teacher Achievements Table
CREATE TABLE teacher_achievements (
  id INT PRIMARY KEY AUTO_INCREMENT,
  teacher_id INT NOT NULL,
  icon VARCHAR(50),
  label VARCHAR(255),
  value VARCHAR(100),
  FOREIGN KEY (teacher_id) REFERENCES teachers(id) ON DELETE CASCADE,
  INDEX idx_teacher_id (teacher_id)
);
