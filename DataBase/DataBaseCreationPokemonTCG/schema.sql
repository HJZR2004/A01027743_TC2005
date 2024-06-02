CREATE DATABASE IF NOT EXISTS pokemonTCG;
USE pokemonTCG;

CREATE TABLE IF NOT EXISTS Partida(
    partidaID TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
    baraja TINYINT NOT NULL,
    banca TINYINT NOT NULL,
    puestoActivo TINYINT NOT NULL,
    cartasPremio TINYINT NOT NULL,
    descartes TINYINT NOT NULL,
    PRIMARY KEY (partidaID)
) ENGINE=InnoDB, CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS CartaEnergia(
    energyID TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
    tipoEnergia VARCHAR(20) NOT NULL,
    PRIMARY KEY (energyID)
) ENGINE=InnoDB, CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS CondicionPokemon(
    condicionID TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
    estado VARCHAR(20),
    PRIMARY KEY (condicionID),
    UNIQUE KEY (estado)  -- Añadiendo un índice único a la columna estado
) ENGINE=InnoDB, CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS Pokemon(
    pokemonID TINYINT UNSIGNED AUTO_INCREMENT,
    nombre VARCHAR(20) NOT NULL,
    fase TINYINT NOT NULL,
    salud TINYINT NOT NULL,
    ataque TINYINT NOT NULL,
    tipoEnergia TINYINT UNSIGNED,
    debilidad VARCHAR(20) NOT NULL,
    resistencia VARCHAR(20) NOT NULL,
    habilidad VARCHAR(50) NOT NULL,
    retirada TINYINT NOT NULL,
    regla VARCHAR(50) NOT NULL,
    partidaID TINYINT UNSIGNED NOT NULL,
    condicionID TINYINT UNSIGNED,
    PRIMARY KEY (pokemonID),
    FOREIGN KEY (tipoEnergia) REFERENCES CartaEnergia(energyID),
    FOREIGN KEY (partidaID) REFERENCES Partida(partidaID),
    FOREIGN KEY (condicionID) REFERENCES CondicionPokemon(condicionID)
) ENGINE=InnoDB, CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS CartaEntrenador(
    cartaID TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
    partidario VARCHAR(20) NOT NULL,
    objeto VARCHAR(20) NOT NULL,
    estadio VARCHAR(20) NOT NULL,
    descripcion VARCHAR(50) NOT NULL,
    partidaID TINYINT UNSIGNED NOT NULL,
    PRIMARY KEY (cartaID),
    FOREIGN KEY (partidaID) REFERENCES Partida(partidaID)
) ENGINE=InnoDB, CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS estadoPokemon(
    estadoID TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
    pokemonID TINYINT UNSIGNED,
    estado VARCHAR(20),
    PRIMARY KEY (estadoID),
    FOREIGN KEY (pokemonID) REFERENCES Pokemon(pokemonID),
    FOREIGN KEY (estado) REFERENCES CondicionPokemon(estado)
) ENGINE=InnoDB, CHARSET=utf8mb4;