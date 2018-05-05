const crypto = require('crypto').randomBytes(256).toString('hex'); // Provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)

// Export config object
module.exports = {
  secret: crypto, // Cryto-created secret
  db: 'meandb',// Database name
  getUri : function(){
      return 'mongodb://mean_user:123@localhost:27017/' + this.db; // Databse URI and database name
    }
};
