# How to connect

1. run `docker-compose up -d `
2. connect to localhost:4200

# Flows

## User Tab

1. Click on the "User" button
2. The application loads all smoothies into a table
3. Click "Add Smoothie to card" button
4. Click "Take a order" button
5. Fill "Name" and "Phone Number"
6. Click Save
8. Application redirect to the order information page

## Businees ower page

1. Click on "Business owner" button
2. The application loads all smoothies into a table
3. You can edit, delete or add new Smoothie

# What can be improved

1. Server side
    - change Basic In-memory Auth to OAuth2(Ex: keycloak)
    - improve beans validation
    - divide entities on entity(for database) and DTO(for client).
      Optional, but will be easier to maintain this code.
    - add unit tests
2. Client side
    - improve layout
    - improve validation
    - improve error handling(error interceptor)
    - add unit test