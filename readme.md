# Sequelize Express Structure

A dynamic sequelize structure with express to setup database tables and associations.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install express, sequelize and mysql2.

```bash
npm install express sequelize mysql2
```

## Usage

- Create a `.env` file and populate it with your own database configuration.

```
PORT=3030

DB_HOST=
DB_PORT=

DB_NAME=
DB_USERNAME=
DB_PASSWORD=

DB_DIALECT=mysql
```

- Run the server

```
npm start
```

## Testing
- The main purpose of this configuration is to set up sequelize against a `mysql` database with two tables, `user` and `events` and create a `M2M` relationship between them through sequelize.

- Use `https://dbdiagram.io/d` to check if tables are created and relationships are configured properly.
- To export your database `dbml` have a look `dbml-guide` for instructions or use `mysqldump` through the `mysql-cli`. Mysql workbench can also be used.

## License

[MIT](https://choosealicense.com/licenses/mit/)