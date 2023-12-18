-- Insert seed data

INSERT INTO users (first_name, last_name, email, phone, is_owner)
VALUES
    ('John', 'Doe', 'john.doe@example.com', '555-1234', true),
    ('Jane', 'Smith', 'jane.smith@example.com', '555-5678', false),
    ('Michael', 'Johnson', 'michael.johnson@example.com', '555-9876', true),
    ('Emily', 'Brown', 'emily.brown@example.com', '555-4321', false),
    ('William', 'Davis', 'william.davis@example.com', '555-8765', false);