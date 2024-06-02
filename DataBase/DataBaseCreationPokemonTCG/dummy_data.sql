USE pokemonTCG;

-- Inserción de datos en la tabla Partida
INSERT INTO Partida (baraja, banca, puestoActivo, cartasPremio, descartes) VALUES
(5, 3, 1, 6, 0),
(4, 2, 1, 5, 1),
(6, 4, 1, 7, 2),
(3, 2, 1, 4, 1),
(7, 5, 1, 8, 3);

-- Inserción de datos en la tabla CartaEnergia
INSERT INTO CartaEnergia (tipoEnergia) VALUES
('Fuego'),
('Agua'),
('Planta'),
('Eléctrico'),
('Psíquico');

-- Inserción de datos en la tabla CondicionPokemon
INSERT INTO CondicionPokemon (estado) VALUES
('Envenenado'),
('Dormido'),
('Paralizado'),
('Confundido'),
('Quemado');

-- Inserción de datos en la tabla Pokemon
INSERT INTO Pokemon (nombre, fase, salud, ataque, tipoEnergia, debilidad, resistencia, habilidad, retirada, regla, partidaID, condicionID) VALUES
('Pikachu', 1, 60, 30, 4, 'Tierra', 'Eléctrico', 'Electricidad estática', 1, 'Ataca dos veces', 1, 1),
('Charmander', 1, 50, 40, 1, 'Agua', 'Fuego', 'Llamarada', 1, 'Puede quemar', 1, 2),
('Squirtle', 1, 50, 30, 2, 'Eléctrico', 'Agua', 'Burbuja', 1, 'Puede paralizar', 2, 3),
('Bulbasaur', 1, 60, 20, 3, 'Fuego', 'Planta', 'Hoja afilada', 1, 'Puede envenenar', 2, 4),
('Jigglypuff', 1, 70, 10, 5, 'Psíquico', 'Normal', 'Canto', 1, 'Puede dormir', 3, 5),
('Meowth', 1, 60, 30, 4, 'Psíquico', 'Lucha', 'Rasguño', 1, 'Puede confundir', 3, 1),
('Eevee', 1, 50, 20, 3, 'Eléctrico', 'Agua', 'Anticipación', 1, 'Puede prever ataques', 4, 2),
('Pidgey', 1, 40, 10, 5, 'Planta', 'Roca', 'Viento rápido', 1, 'Puede huir', 4, 3),
('Rattata', 1, 30, 20, 1, 'Eléctrico', 'Lucha', 'Colmillo', 1, 'Puede morder', 5, 4),
('Zubat', 1, 40, 20, 5, 'Psíquico', 'Roca', 'Supersónico', 1, 'Puede confundir', 5, 5);

-- Inserción de datos en la tabla CartaEntrenador
INSERT INTO CartaEntrenador (partidario, objeto, estadio, descripcion, partidaID) VALUES
('Profesor Oak', 'Poción', 'Ciudad Verde', 'Recupera salud', 1),
('Misty', 'Superpoción', 'Ciudad Celeste', 'Recupera más salud', 1),
('Brock', 'Roca dura', 'Ciudad Plateada', 'Aumenta defensa', 2),
('Lt. Surge', 'Cargador', 'Ciudad Carmín', 'Aumenta ataque', 2),
('Erika', 'Hierba curativa', 'Ciudad Azulona', 'Cura estados', 3),
('Koga', 'Veneno', 'Ciudad Fucsia', 'Envenena al rival', 3),
('Sabrina', 'Teletransporte', 'Ciudad Azafrán', 'Cambia Pokémon', 4),
('Blaine', 'Fuego fatuo', 'Isla Canela', 'Causa quemaduras', 4),
('Giovanni', 'Puño roca', 'Ciudad Verde', 'Aumenta ataque y defensa', 5),
('Lorelei', 'Hielo eterno', 'Liga Pokémon', 'Congela al rival', 5);

-- Inserción de datos en la tabla estadoPokemon
INSERT INTO estadoPokemon (pokemonID, estado) VALUES
(1, 'Envenenado'),
(2, 'Dormido'),
(3, 'Paralizado'),
(4, 'Confundido'),
(5, 'Quemado'),
(6, 'Envenenado'),
(7, 'Dormido'),
(8, 'Paralizado'),
(9, 'Confundido'),
(10, 'Quemado');