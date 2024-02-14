
insert into plant(id,name,description,watering_frequency) values
(default,'Vikus', 'good boi', 15),
(default, 'spotify', 'has spots', 10),
(default,'Fiddle Leaf Ficus', 'is problematic', 8),
(default,'spider plant', 'is growing lots of babies', 8);

insert into watering(id,plant_id, watered_on) values
(default, 1, '2024-01-12'),
(default, 1, '2024-01-08'),
(default, 2, '2024-01-10'),
(default, 2, '2024-01-01'),
(default, 3, '2023-11-12'),
(default, 3, '2024-01-08'),
(default, 3, '2024-01-01'),
(default, 4, '2024-01-12');
