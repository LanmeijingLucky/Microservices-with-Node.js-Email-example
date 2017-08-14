# Microservices-with-Node.js-Email-example
Sending Email with Node.js Microservices

This is a example of Node.js's Microservices, the feature is `sending email`;

How to use it
============


### install


```
git clone https://github.com/LanmeijingLucky/Microservices-with-Node.js-Email-example.git
```

#### install the dependencies

```
$ npm install
```

How to run it
===========

```
node services/email.js
```

So, your others Microservices can use this by:

```
var EmailService = Seneca().client({
  host: "192.168.1.155",
  port: 7700,
})

```

- [seneca](https://github.com/senecajs/seneca) A Node.js toolkit for Microservice architectures
- [emailjs](https://github.com/eleith/emailjs) send emails, html and attachments (files, streams and strings) from node.js to any smtp server

My English is poor; so, this document might have some syntax error.
