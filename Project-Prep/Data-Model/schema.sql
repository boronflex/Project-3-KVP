
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
    prospect_idfk,
    spread_idfk,
    users_idfk,
    added_date,
    no_offer,
    no_offer_reason,
    no_offer_note,
    yes_offer,
    yes_offer_date,
    spread_idfk,
    offer_title,
    offer_pay,
    requested_start_date,
    app_sent_by,
    app_sent_date,
    app_returned,
    app_returned_date,
    ref_checks,
    ref_checks_date,
    ref_checks_complete,
    ref_checks_complete_date,
    off_nh_pkg_sent,
    off_nh_pkg_sent_date,
    off_nh_pkg_returned,
    off_nh_pkg_returned_date,
    drug_test,
    drug_test_date,
    drug_test_complete,
    drug_test_complete_date,
    fitness_test,
    fitness_test_date,
    fitness_test_complete,
    fitness_test_complete_date,
    final_offer_letter,
    ostart_date,
    mob_date,
    hired BOOLEAN DEFAULT FALSE,
    issue,
    issue_date,
    issue_notes,
    PRIMARY KEY (id)
);
