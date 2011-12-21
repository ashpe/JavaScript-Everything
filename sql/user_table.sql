DROP TABLE IF EXISTS user_login;
          
CREATE TABLE user_login (
  user_id SERIAL PRIMARY KEY,
  username varchar,
  password varchar,
  email varchar,
  default_category varchar,
  default_posted_by varchar,
  user_level INTEGER
);

INSERT INTO user_login VALUES (1, 'ashleyp', 'brodie123', 'irashp@gmail.com', 'JavaScript', '', '4');
INSERT INTO user_login VALUES (2, 'estrial', 'beaney', 'estrial@gmail.com', 'Cheese', '', '2');
