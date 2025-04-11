create table finances.usuarios (
	id_user SERIAL PRIMARY KEY,
	nombre varchar(100) not null,
	apellido varchar(100) not null,
	correo varchar(100) unique not null,
	password_user varchar(255) not null,
	id_huella varchar(255),
	fecha_nacimiento date not null,
	dinerototal_bs decimal(16,2) not null ,
	dinerototal_dol decimal(16,2)not null ,
	fecha_de_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
create table finances.presupuestos (
	id_presu SERIAL PRIMARY KEY,
	id_user INTEGER not null,
	titulo varchar(100) not null,
	icono varchar(50),
	descrip varchar(256),
	limite_mesual decimal(16,2) default 0,
	saldo_dol decimal(16,2) not null,
	saldo_bs decimal(16,2) not null,
	FOREIGN KEY (id_user) REFERENCES finances.usuarios(id_user) ON DELETE CASCADE 

);
create table finances.tasas (
	id_tasa SERIAL PRIMARY KEY,
	fecha Timestamp default current_timestamp,
	tasa_bcv decimal(4,2) not null,
	tasa_dol decimal(4,2) not null
);
create table finances.medio_fisico (
	id_medio_fisico SERIAL PRIMARY KEY,
	nombre varchar(100) not null,
	icono varchar(50),
	saldo_bs decimal(4,2),
	saldo_dol decimal(4,2)
);
create table finances.categorias (
	id_categoria SERIAL PRIMARY KEY,
	id_presu integer not null,
	icono varchar(50),
	nombre varchar(100) not null,
	saldo_bs decimal(4,2),
	saldo_dol decimal(4,2),
	tipo varchar(20) not null,
	FOREIGN KEY (id_presu) REFERENCES finances.presupuestos(id_presu) ON DELETE cascade
	
);
create table finances.transacciones (
	id_trans SERIAL PRIMARY KEY,
	id_user INTEGER not null,
	id_presu INTEGER not null,
	id_categoria integer not null,
	id_medio_fisico integer not null,
	fecha  date not null,
	monto decimal(16,2) not null,
	descrip varchar (256),
	tipo varchar(20),
	FOREIGN KEY (id_user) REFERENCES finances.usuarios(id_user) ON DELETE CASCADE,
	FOREIGN KEY (id_presu) REFERENCES finances.presupuestos(id_presu) ON DELETE SET NULL,
	FOREIGN KEY (id_categoria) REFERENCES finances.categorias(id_categoria) ON DELETE SET NULL,
	FOREIGN KEY (id_medio_fisico) REFERENCES finances.medio_fisico(id_medio_fisico) ON DELETE SET NULL
	
);






