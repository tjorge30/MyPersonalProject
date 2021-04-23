UPDATE moon_signs
SET sign_reading = $2
WHERE sign_name LIKE $1
RETURNING *;