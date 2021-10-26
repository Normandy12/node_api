# node_api
API Backend Node.js Diagnostic

### Install dependencies
***Note:*** _Make sure your current working direcotry is project's root directory_

```
$ npm install
```

### Environment variable

Set neccessary environment variables for database connection
```
# For development
DEV_USER=<user>
DEV_PASS=<pass>

# For testing
TEST_USER=<user>
TEST_PASS=<pass>
```

### Migration

Run migration to update the database structure

```
$ npx sequelize-cli db:migrate
```

Run the server

The server will run on localhost:3000 by default

```
$ node server.js
```

### API end points/routes:

```
/users        - GET - List all users
              - POST - Create new user
              - DELETE - Bulk delete all users in the given list of IDs
           
/users/<id>    - GET - Fetch a specific user
              - PUT - Update a user
              - DELETE - Delete a user
/authenticate - POST - Authenticate given username and password
```

###### Example
```
http://localhost:3000/users
http://localhost:3000/users/3
```


## For Developer 

### Seeding and Testing
This will automatically create database, apply migration and run the seeders in test environment. It will also run basic testing

```
$ npm test
```


