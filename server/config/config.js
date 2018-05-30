const credentials = require("./creditials.secret");

let config = {
    username: credentials.username,
    password: credentials.password,
    host: credentials.host,
    port: credentials.port,
    database: credentials.database,
    secret: credentials.secret,
};

let uri = 'mongodb://';
if (config.host && config.database) {
    if (config.username && config.password) {
      uri += config.username + ':' + config.password + '@';
    }
    uri += config.host;
  
    if (config.port) {
      uri += ':' + config.port;
    }
    uri += '/' + config.database;
}
 
module.exports = {
    //MongoDB configuration
    development: {
        db: uri
    },
    production: {
        db: uri
    }
};