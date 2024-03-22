
insert into plant(id,name,description,watering_frequency) values
(default,'String of Hearts', 'Indirect light', 15),
(default, 'Begonia Maculata', 'Indirect light, High humidity', 10),
(default,'Fiddle Leaf Fig', 'Bright indirect light, high humidity', 8),
(default,'Spirder Plant', 'Part-shade/Full shade, ', 8);

insert into watering(id,plant_id, watered_on) values
(default, 1, '2024-01-12'),
(default, 1, '2024-01-08'),
(default, 2, '2024-02-08'),
(default, 2, '2024-02-08'),
(default, 3, '2023-11-12'),
(default, 3, '2024-01-08'),
(default, 3, '2024-01-01'),
(default, 4, '2024-02-10'),
(default, 4, '2024-01-12');
