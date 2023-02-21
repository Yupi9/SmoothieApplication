CREATE TABLE customer_order (
   id serial PRIMARY KEY,
   customer_name varchar(50) NOT NULL,
   customer_phone_number varchar(15) NOT NULL,
   status varchar(10) NOT NULL
);

CREATE TABLE order_item (
   order_id int NOT NULL,
   smoothie_id int NOT NULL,
   quantity smallint NOT NULL,
   FOREIGN KEY (order_id)
            REFERENCES customer_order(id),
   FOREIGN KEY (smoothie_id)
            REFERENCES smoothie(id)
);