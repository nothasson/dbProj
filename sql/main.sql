use teacher;
drop table if exists tbSchoolCour;
drop table if exists tbSchoolTea;
drop table if exists tbTeaCour;
drop table if exists tbCourse;
drop table if exists tbTeacher;
create table tbTeacher(
	tNo varchar(16) primary key,
    tName varchar(16),
    tEducation varchar(16),
    tTitle varchar(16),
    tTime Date)
    default charset = utf8mb4;

create table tbCourse(
	cNO varchar(16) primary key,
    cName varchar(16))
    default charset = utf8mb4;
    

create table tbTeaCour(
	tNo varchar(16), 
    foreign key(tNo) references tbTeacher(tNo),
    cNo varchar(16),
    foreign key(cNo) references tbCourse(cNo),
    tcMoney int,
    tcTimes int)
    default charset = utf8mb4;

create table tbSchoolTea(
	stName varchar(16),
    tNo varchar(16),
    foreign key(tNo) references tbTeacher(tNo))
    default charset = utf8mb4;
    
create table tbSchoolCour(
	stName varchar(16),
    cNo varchar(16),
    foreign key(cNo) references tbCourse(cNo))
    default charset = utf8mb4;
    
create table tbUser(
	username varchar(16) primary key,
    password varchar(32),
    type boolean)
    default charset = utf8mb4;
    
create table tbPower(
	username varchar(16),
    powerT boolean,
    powerC boolean,
    powerTC boolean,
    powerST boolean,
    powerSC boolean,
    foreign key(username) references tbUser(username))
    default	charset = utf8mb4;
    

    
   
   
   
   