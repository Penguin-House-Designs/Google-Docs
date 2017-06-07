-- It may be helpful to drop and reinstantilize the table when doing
-- the tests in case you delete users/cars the tests are expecting to see
-- DROP TABLE IF EXISTS Users

create table Users (
  id serial primary key,
  firstname varchar(40),
  lastname varchar(40),
  email varchar(100)
);

insert into Users (firstname, lastname, email)
  values
( 'John', 'Smith', 'John@Smith.com'),
( 'Dave', 'Davis', 'Dave@Davis.com'),
( 'Jane', 'Janis', 'Jane@Janis.com');
