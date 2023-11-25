DROP TABLE IF EXISTS  roles CASCADE;
/*Creando tabla para roles*/
CREATE TABLE roles(
	id BIGSERIAL PRIMARY KEY,
	name VARCHAR(180) NOT NULL UNIQUE,
	image VARCHAR(255) NULL,
	route VARCHAR(255) NULL,
	created_at TIMESTAMP(0) NOT NULL,
	updated_at TIMESTAMP(0) NOT NULL
);




DROP TABLE IF EXISTS  users CASCADE;
CREATE TABLE users(
	id BIGSERIAL PRIMARY KEY,
	email VARCHAR(255) NOT NULL UNIQUE,
	name VARCHAR(255) NOT NULL, 
	lastname VARCHAR(255) NOT NULL,
	phone VARCHAR(80) NOT NULL UNIQUE,
	image VARCHAR(255) NULL,
	password VARCHAR(255) NOT NULL,
	is_available BOOLEAN NULL,
	session_token VARCHAR(255) NULL,
	created_at TIMESTAMP(0) NOT NULL,
	updated_at TIMESTAMP(0) NOT NULL
);

DROP TABLE IF EXISTS user_has_roles CASCADE;
CREATE TABLE user_has_roles(
	id_user BIGSERIAL NOT NULL ,
	id_rol BIGSERIAL NOT NULL,
	created_at TIMESTAMP(0) NOT NULL,
	updated_at TIMESTAMP(0) NOT NULL,
	FOREIGN KEY(id_user) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY(id_rol) REFERENCES roles(id) ON UPDATE CASCADE ON DELETE CASCADE,
	PRIMARY KEY(id_user, id_rol)

);

INSERT INTO roles(
name,
route,
image,
created_at,
updated_at
)
VALUES(
	'CLIENTE',
	'client/home',
	'https://www.awicons.com/free-icons/download/application-icons/dragon-soft-icons-by-artua.com/png/512/User.png',
	'2023-09-21',
	'2023-09-21'
);
INSERT INTO roles(
name,
route,
image,
created_at,
updated_at
)
VALUES(
	'EMPRESA VORS',
	'empresa/home',
	'https://cdn-icons-png.flaticon.com/512/2761/2761008.png',
	'2023-09-21',
	'2023-09-21'
);

INSERT INTO roles(
name,
route,
image,
created_at,
updated_at
)
VALUES(
	'EMPLEADO VORS',
	'empleado/home',
	'https://cdn-icons-png.flaticon.com/512/432/432693.png',
	'2023-09-21',
	'2023-09-21'
);

DROP TABLE IF EXISTS products CASCADE;
CREATE TABLE products(
	id BIGSERIAL PRIMARY KEY,
	name VARCHAR(180) NOT NULL UNIQUE,
	description VARCHAR(255) NOT NULL,
	price DECIMAL DEFAULT 0 ,
	image1 VARCHAR(255) NOT NULL,
	image2 VARCHAR(255) NULL,
	image3 VARCHAR(255) NULL,
	id_category BIGINT NOT NULL,
	created_at TIMESTAMP (0) NOT NULL,
	updated_at TIMESTAMP (0) NOT NULL,
	FOREIGN KEY(id_category) REFERENCES categories(id) ON UPDATE CASCADE ON DELETE CASCADE
);

/*ESTA ES MI BASE DE DATOS QUE REALIZE EN EL pgAdmin 4*/