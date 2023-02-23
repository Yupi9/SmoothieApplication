CREATE TABLE smoothie (
   id serial PRIMARY KEY,
   name varchar(100) NOT NULL,
   ingredients TEXT NOT NULL,
   nutrition_id INT NOT NULL,
   is_archived boolean NOT NULL DEFAULT false,
   FOREIGN KEY (nutrition_id)
         REFERENCES nutrition(id),
   UNIQUE(name)
);