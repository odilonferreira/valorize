# valorize
Welcome to Valorize, an application for you recognize someone (a user registered) through compliments. 

## Stack and libraries used
In this application was developed with node.js. It was used some interesting libraries, like:
- [Express](https://expressjs.com/): a node.js framework facilitator that provides a robust set of features for web applications;
- [Typescript](https://www.typescriptlang.org/): a typed programming language that allow on JavaScript optional static typing;
- [TypeORM](https://typeorm.io/#/): definitely the most mature [ORM](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping);
- [SQLite](https://www.sqlite.org/index.html): a library that implements a SQL database engine;
- And [more](https://github.com/odilonferreira/valorize/blob/main/package.json)...

## Rules
There are some rules for differents types o registrations:

- User registration

  - It's not allowed register more than one user for the same e-mail;
  - It's not allowed register users without e-mail;

- TAG register

  - It's not allowed register more than one tag with the same name;
  - It's not allowed the registry for users that isn't administrators

- Compliment register

  - It's not allowed an user register one compliment for yourself;
  - It's not allowed register one compliment for invalid users;
  - The user must be authenticated in the application;
