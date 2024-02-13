DROP TABLE IF EXISTS plant;
DROP TABLE IF EXISTS watering;

CREATE TABLE plant(
    id int not null auto_increment,
    name varchar not null,
    description varchar not null,
    watering_frequency int not null,
    primary key (id)
);

CREATE TABLE watering (
id int not null auto_increment,
plant_id int not null,
watered_on date not null,
primary key (id)
);



