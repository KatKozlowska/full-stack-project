
insert into plant(id,name,description,watering_frequency) values
(default,'String of Hearts', 'Indirect light', 14),
(default, 'Begonia Maculata', 'Indirect light, High humidity', 10),
(default,'Fiddle Leaf Fig', 'Bright indirect light, high humidity', 8),
(default,'Spirder Plant', 'Part-shade/Full shade, ', 8);

insert into watering(id,plant_id, watered_on) values
(default, 1, '2024-03-14'),
(default, 1, '2024-02-20'),
(default, 2, '2024-03-12'),
(default, 2, '2024-03-02'),
(default, 3, '2023-02-12'),
(default, 3, '2024-02-28'),
(default, 3, '2024-03-12'),
(default, 4, '2024-03-20'),
(default, 4, '2024-02-12');
