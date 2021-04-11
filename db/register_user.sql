INSERT INTO users(first_name, hash, email, phone, admin)
VALUES ($1, $2, $3, $4, $5)
returning user_id, first_name, email, phone, admin;