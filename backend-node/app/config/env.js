const environment = process.env.NODE_ENV || 'development';

console.log(environment);

const config= {"development" : {
  "database": 'user_db',
  "username": 'postgres',
  "password": 'probyto@iitg',
  "host": 'localhost',
  "dialect": 'postgres',
  "pool": {
	  "max": 5,
	  "min": 0,
	  "acquire": 30000,
	  "idle": 10000
  }
},
"test" : {
  "database": 'user_db',
  "username": 'admin',
  "password": 'postgres',
  "host": 'ailab.probyto.com',
  "dialect": 'postgres',
  "pool": {
	  "max": 5,
	  "min": 0,
	  "acquire": 30000,
	  "idle": 10000
  }
}}

const env=config[environment]
module.exports = env;
