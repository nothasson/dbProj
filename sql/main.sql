use teacher;
drop table if exists tbSchoolCour;
drop table if exists tbSchoolTea;
drop table if exists tbTeaCour;
drop table if exists tbCourse;
drop table if exists tbTeacher;
drop table if exists tbPower;
drop table if exists tbUser;
create table tbTeacher(
	tNo varchar(16) primary key,
    tName varchar(16),
    tEducation varchar(16),
    tTitle varchar(16),
    tSchool varchar(16),
    tTime varchar(16))
    default charset = utf8mb4;

create table tbCourse(
	cNO varchar(16) primary key,
    cName varchar(16),
    cSchool varchar(16))
    default charset = utf8mb4;
    

create table tbTeaCour(
	tNo varchar(16), 
    cNo varchar(16),
    tcMoney int,
    tcTimes int,
    tcSalary int,
    primary key(tNo,cNo))
    default charset = utf8mb4;
create table tbUser(
	username varchar(16) primary key,
    password varchar(32),
    type boolean)
    default charset = utf8mb4;
    
create table tbPower(
	username varchar(16),
    powert boolean,
    powerc boolean,
    powertc boolean,
    foreign key(username) references tbUser(username))
    default	charset = utf8mb4;


    

    
   
   
   
   
