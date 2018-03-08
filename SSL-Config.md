# SSL Configuration
## Dev Cert Configuration
For dev, I generated a dev SSL using openssl. The SSL certificates are not included in the source repo. They should be generated as part of the configuration.

openssl req -x509 -newkey rsa:2048 -keyout keytmp.pem -out cert.pem -days 365

openssl rsa -in keytmp.pem -out key.pem

