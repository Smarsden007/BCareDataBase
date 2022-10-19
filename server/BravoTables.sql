CREATE DATABASE Bravo;

CREATE TABLE clinician_work_history (
work_history_id INTEGER PRIMARY KEY,
facility_id INTEGER,
nurse_id INTEGER,
worked_shift BOOLEAN,
call_out BOOLEAN,
no_call_no_show BOOLEAN
);

CREATE TABLE facilities (
    facility_id INTEGER PRIMARY KEY,
    facility_name CHARACTER VARYING(255)
);

CREATE TABLE jobs (
    job_id integer PRIMARY KEY,
    facility_id INTEGER,
    nurse_type_needed CHARACTER VARYING(255),
    total_number_nurses_needed INTEGER
);

CREATE TABLE nurses (
    nurse_id INTEGER PRIMARY KEY,
    nurse_name CHARACTER VARYING(255),
    nurse_type CHARACTER VARYING(255)
);

CREATE TABLE nurse_hired_jobs (
    job_id INTEGER ,
    nurse_id INTEGER,
    PRIMARY KEY (job_id, nurse_id)
);
