# node.jwt

A lightweight library for encode and decode JSON Web Tokens (JWT).

## Install

```bash
$ npm install node.js-jwt
```

## Usage

### Symmetric encryption

```javascript
const jwt = require('node.js-jwt')
const payload = {
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}

// get secret, you can reload this method to create your secret
const secret = jwt.secret('I am Aidan')

// encode
var token = jwt.encode(payload, secret);

// decode
var result = jwt.decode(token, secret)
console.log(result)
//{
//	code: '000', // error code of verify, you can learn more from lib/jwt.js
//	message: 'successful', // error message of verify, , you can learn more from lib/jwt.js
//	payload: {
//	  "sub": "1234567890",
//	  "name": "John Doe",
//	  "admin": true
//	}
//}
```

### Asymmetric encryption

const jwt = require('node.js-jwt')
const payload = {
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}

const privateSecret = getYourPrivateSceret()
const publicSceret　＝　getYourPublicSecret()

// encode
var token = jwt.encode(payload, privateSecret, 'RS256')

// decode
var result = jwt.decode(token, publicSceret)
console.log(result)
//{
//	code: '000', // error code of verify, you can learn more from lib/jwt.js
//	message: 'successful', // error message of verify, , you can learn more from lib/jwt.js
//	payload: {
//	  "sub": "1234567890",
//	  "name": "John Doe",
//	  "admin": true
//	}
//}

### Interface

```javascript
/**
 * jwt encode
 * @param  {Object} payload   jwt payload
 * @param  {String} secret    sign secret
 * @param  {String} algorithm sign algorithm
 * @param  {Object} header    jwt header
 * @return {String}           jwt
 */
encode (payload, secret, algorithm = 'HS256', header = { type: 'JWT' })

/**
 * jwt decode
 * @param  {String}  token    verify token
 * @param  {String}  secret   verify secret
 * @param  {Boolean} noVerify is it verify
 * @return {Object}           decode result
 */
decode (token, secret, noVerify = false)
```

### Algorithms

By default the algorithm to encode is `HS256`.

The supported algorithms for encoding and decoding are `HS256`, `HS384`, `HS512` and `RS256`.

```javascript
// encode using HS512
jwt.encode(payload, secret, 'HS512')
```
### About JWT

- [Introduction to JSON Web Tokens](https://jwt.io/introduction/)

- [JWT(JSON Web Token)](http://self-issued.info/docs/draft-jones-json-web-token.html) 
