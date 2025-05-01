mkdir -p database
cat > database/init.sql << 'EOF'
-- Inicialización de la base de datos notas_app
CREATE DATABASE IF NOT EXISTS notas_app
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;
USE notas_app;

CREATE TABLE IF NOT EXISTS Clasificacion (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS Nota (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100) NOT NULL,
  autor VARCHAR(100) NOT NULL,
  fecha_hora DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  cuerpo TEXT NOT NULL,
  clasificacion_id INT NOT NULL,
  FOREIGN KEY (clasificacion_id)
    REFERENCES Clasificacion(id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);

INSERT INTO Clasificacion (nombre)
  VALUES ('personal'), ('laboral'), ('escolar'), ('otra');
EOF
