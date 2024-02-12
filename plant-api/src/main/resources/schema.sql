DROP TABLE IF EXISTS plant;

CREATE TABLE plant(
    id int not null auto_increment,
    name varchar not null,
    description varchar not null,
    watering_frequency int not null,
    primary key (id)
);



