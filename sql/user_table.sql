DROP TABLE IF EXISTS user_login;
          
CREATE TABLE user_login (
  user_id SERIAL PRIMARY KEY,
  username varchar,
  password varchar,
  email varchar,
  user_level INTEGER
);

