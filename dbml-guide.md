# db2dbml & Using DBML

## 1. Install `@dbml/cli`

Run the following command to install the DBML CLI globally:

```sh
npm install -g @dbml/cli
```

To verify the installation:

```sh
npm list -g --depth=0
```

You should see `@dbml/cli` in the output.

---

## 2. Running `db2dbml`

Use the following command to generate a `.dbml` file from your MySQL database:

```sh
db2dbml mysql 'mysql://user:password@host:port/dbname' -o database.dbml
```

Example:

```sh
db2dbml mysql 'mysql://....:......' -o database.dbml
```

---

## 3. Fixing `command not found: db2dbml`

If running `db2dbml` gives you an error, try these fixes:

### Option 1: Use `npx`

Instead of installing globally, run:

```sh
npx @dbml/cli db2dbml mysql 'mysql://user:password@host:port/dbname' -o database.dbml
```

# Show relationsships

https://dbdiagram.io/d

# What dbml files are

The .dbml extension stands for Database Markup Language. It is a human-readable format used to describe database schemas, including tables, columns, relationships, and constraints. It is used primarily for generating database diagrams or schema representations in a simple text-based format.

DBML is often used with tools like dbdiagram.io to visualize database structures and facilitate collaboration on database design. You can easily convert database structures from DBML into diagrams, which can be a helpful tool for developers and database designers.

```
Table users {
  id integer [pk]
  name varchar
  email varchar [unique]
}

Table posts {
  id integer [pk]
  title varchar
  user_id integer [ref: > users.id]
}
```
