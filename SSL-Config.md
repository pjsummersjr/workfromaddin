# SSL Configuration
## Dev Cert Configuration
For dev, I generated a dev SSL using openssl. The SSL certificates are not included in the source repo. They should be generated as part of the configuration.

openssl req -x509 -newkey rsa:2048 -keyout keytmp.pem -out cert.pem -days 365

openssl rsa -in keytmp.pem -out key.pem

app/index.js also had to be modified

When calling the service from the browser, you'll get a cert error. In Chrome and Firefox, you should be able to add an exception.

## Reference
https://stackoverflow.com/questions/21397809/create-a-trusted-self-signed-ssl-cert-for-localhost-for-use-with-express-node

