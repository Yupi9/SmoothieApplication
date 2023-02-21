CREATE TABLE nutrition (
   id serial PRIMARY KEY,
   energy NUMERIC(5,2) NOT NULL,
   protein NUMERIC(5,2) NOT NULL,
   fat NUMERIC(5,2) NOT NULL,
   carbohydrate NUMERIC(5,2) NOT NULL
);