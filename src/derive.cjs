const { generateKeyPairSync } = require('crypto');

// PassPhrase to be found in the oauth return data
const PassPhrase = "Hello Lorimer";
const Bits = 2048;

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: Bits,
  publicKeyEncoding: {
      type: 'pkcs1',
      format: 'jwk'
  },
  privateKeyEncoding: {
      type: 'pkcs8',
      format: 'jwk',
      cipher: 'aes-256-cbc',
      passphrase: PassPhrase
  }
});

module.exports = { privateKey, publicKey };