USE company;

INSERT INTO department 
(name)
VALUES
('Management'), ('Delivery'), ('Accounting'), ('Medical'), ('Engineering'), ('Janitorial');

INSERT INTO role
(title, salary, department_id)
VALUES
('CEO/Manager', 150000, 1), ('Delivery Boy', 40000, 2), ('Delivery Captain', 45000, 2), ('Assistant Delivery Unit', 40000, 2), ('Accountant', 65000, 3), ('Staff Doctor', 10000, 4), ('Intern', 40000, 5), ('Janitor', 35000, 6);

INSERT INTO employees
(first_name, last_name, role_id, manager_id)
VALUES
('Peter', 'Griffin', 1, NULL), ('Chris', 'Griffin', 2, 1), ('Meg', 'Griffin', 3, 1), ('Stewie', 'Griffin', 4, 1), ('Lois', 'Griffin', 7, 1), ('Adam', 'Wee', 5, 1), ('James', 'Wood', 6, 1), ('Brian', 'Griffin', 8, 1);