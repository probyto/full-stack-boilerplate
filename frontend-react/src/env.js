const environment = process.env.REACT_APP_ENV || 'development';
 
console.log(environment);
 
const config= {"development" : {
  "API": "http://localhost:8080"
},
"production" : {
  "API": "https://prototypeapi.ailab.probyto.com"
}}
 
const env=config[environment]
export default env