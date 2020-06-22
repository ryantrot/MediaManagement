create table request(
	request_id int auto_increment primary key,
	fullname varchar(50),
    email varchar(50),
    phone_number varchar(50),
    name_preacher varchar(50),
    event_name varchar(50),
    event_date DATE,
    disk_type varchar(8),
    orderStatus bool
);
select * FROM request;
insert into request () values (0, "Testname1", "Testemail@email.com", "800-555-5554", "Testspeaker", "Test Event", "2010-10-10", "DVD", false );
insert into request () values (0, "Testname2", "Testemail2@email.com", "800-555-5551", "Testspeaker2", "Test Event2", "2009-5-12", "CD", true );
insert into request () values (0, "Testname3", "Testemail3@email.com", "800-555-5552", "Testspeaker3", "Test Event3", "2013-1-14", "DVD", false );
insert into request () values (0, "Testname4", "Testemail4@email.com", "800-555-5564", "Testspeaker4", "Test Event4", "2016-8-23", "CD", true );



create table inventory(
	inv_id int auto_increment not null primary key,
    inv_preacher varchar(50),
    inv_event_name varchar(50),
    inv_disk_cd varchar(10),
    inv_disk_dvd varchar(10),
    quantity_cd int,
    quantity_dvd int
);
select * FROM inventory;
insert into inventory() values (0, "testspeaker1", "testevent1", "DVD", "CD", 10, 10 );
insert into inventory() values (0, "testspeaker2", "testevent2", "DVD", "CD", 15, 12 );
insert into inventory() values (0, "testspeaker3", "testevent3", "DVD", "CD", 14, 9 );