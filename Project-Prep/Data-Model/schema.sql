
DROP DATABASE IF EXISTS fieldstaff_hiring_tracker;
CREATE DATABASE fieldstaff_hiring_tracker;
USE fieldstaff_hiring_tracker;


CREATE TABLE users
(
    id INT(4) NOT NULL AUTO_INCREMENT,
	employee_id INT(5) NOT NULL,
    last_name VARCHAR(40) NOT NULL,
    first_name VARCHAR(40) NOT NULL,
    user_type VARCHAR(40) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE projects
(
    id INT(4) NOT NULL AUTO_INCREMENT,
    project_name VARCHAR(40) NOT NULL,
    project_number VARCHAR(40) NOT NULL,
    survey_manager VARCHAR(100) NOT NULL,
    number_spreads INT(2) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE spreads
(
    id INT(4) NOT NULL AUTO_INCREMENT,
    project_idfk VARCHAR(40) NOT NULL,
    spread_num VARCHAR(40) NOT NULL,
    spread_city VARCHAR(40) NOT NULL,
    spread_state VARCHAR(100) NOT NULL,
    supervisor_name VARCHAR(40) NOT NULL,
    supervisor_id INT(5) NOT NULL,
    per_diem int(3) NOT NULL,
    mileage int(2) NOT NULL,
    vehicle BOOLEAN DEFAULT FALSE,
    computer BOOLEAN DEFAULT FALSE,
    phone BOOLEAN DEFAULT FALSE,
    utv BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
);

CREATE TABLE prospects
(
    id INT(4) NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(40) NOT NULL,
    last_name VARCHAR(40) NOT NULL,
    nick_name VARCHAR(40) NOT NULL,
    address_st VARCHAR(40) NOT NULL,
    city VARCHAR(40) NOT NULL,
    address_state VARCHAR(2) NOT NULL,
    zip INT(5) NOT NULL,
    phone_1 VARCHAR(12) NOT NULL,
    phone_2 VARCHAR(12),
    email VARCHAR(40) NOT NULL,
    years_experience INT(2) NOT NULL,
    prev_position VARCHAR(2) NOT NULL,
    driver_comments TEXT,
    --driver_img VARCHAR(100),
    PRIMARY KEY (id)
);

CREATE TABLE prospects_history
(
    id INT(4) NOT NULL AUTO_INCREMENT,
    prospect_idfk INT(4) NOT NULL AUTO_INCREMENT,
    spread_idfk INT(4) NOT NULL AUTO_INCREMENT,
    users_idfk INT(4) NOT NULL AUTO_INCREMENT,
    added_date TIMESTAMP WITH TIME ZONE DEFAULT now() AT TIME ZONE 'CST',
    no_offer BOOLEAN DEFAULT FALSE,
    no_offer_reason VARCHAR(40) NOT NULL,
    no_offer_note VARCHAR(40) NOT NULL,
    yes_offer BOOLEAN DEFAULT FALSE,
    yes_offer_date TIMESTAMP WITH TIME ZONE DEFAULT now() AT TIME ZONE 'CST',
    spread_idfk INT(4) NOT NULL AUTO_INCREMENT,
    offer_title VARCHAR(2) NOT NULL,
    offer_pay INT(4) NOT NULL AUTO_INCREMENT,
    requested_start_date TIMESTAMP WITH TIME ZONE DEFAULT now() AT TIME ZONE 'CST',
    app_sent_by INT(5) NOT NULL,
    app_sent_date TIMESTAMP WITH TIME ZONE DEFAULT now() AT TIME ZONE 'CST',
    app_returned INT(5) NOT NULL,
    app_returned_date TIMESTAMP WITH TIME ZONE DEFAULT now() AT TIME ZONE 'CST',
    ref_checks INT(5) NOT NULL,
    ref_checks_date TIMESTAMP WITH TIME ZONE DEFAULT now() AT TIME ZONE 'CST',
    ref_checks_complete TIMESTAMP WITH TIME ZONE DEFAULT now() AT TIME ZONE 'CST',
    ref_checks_complete_date TIMESTAMP WITH TIME ZONE DEFAULT now() AT TIME ZONE 'CST',
    off_nh_pkg_sent INT(5) NOT NULL,
    off_nh_pkg_sent_date TIMESTAMP WITH TIME ZONE DEFAULT now() AT TIME ZONE 'CST',
    off_nh_pkg_returned INT(5) NOT NULL,
    off_nh_pkg_returned_date TIMESTAMP WITH TIME ZONE DEFAULT now() AT TIME ZONE 'CST',
    drug_test INT(5) NOT NULL,
    drug_test_date TIMESTAMP WITH TIME ZONE DEFAULT now() AT TIME ZONE 'CST',
    drug_test_complete INT(5) NOT NULL,
    drug_test_complete_date TIMESTAMP WITH TIME ZONE DEFAULT now() AT TIME ZONE 'CST',
    fitness_test INT(5) NOT NULL,
    fitness_test_date TIMESTAMP WITH TIME ZONE DEFAULT now() AT TIME ZONE 'CST',
    fitness_test_complete INT(5) NOT NULL,
    fitness_test_complete_date TIMESTAMP WITH TIME ZONE DEFAULT now() AT TIME ZONE 'CST',
    final_offer_letter INT(5) NOT NULL,
    ostart_date TIMESTAMP WITH TIME ZONE DEFAULT now() AT TIME ZONE 'CST',
    mob_date TIMESTAMP WITH TIME ZONE DEFAULT now() AT TIME ZONE 'CST',
    hired BOOLEAN DEFAULT FALSE,
    issue INT(5) NOT NULL,
    issue_date TIMESTAMP WITH TIME ZONE DEFAULT now() AT TIME ZONE 'CST',
    issue_notes VARCHAR(40) NOT NULL,
    PRIMARY KEY (id)
);
