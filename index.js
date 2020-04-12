const path        = require('path');
const express     = require('express');
const helmet      = require('helmet');
const compression = require('compression');
const vhost = require('vhost');
 
// Déclaration du port HTTP à utiliser (généralement 80)
const PORT = process.env.PORT || 8080;
 
// Création d'un serveur web Express
const app = express();
 
// Configuration du serveur Express
app.disable('x-powered-by');
app.use(helmet()); // Headers HTTP de protection standard
app.use(compression()); // Headers HTTP pour la compression GZIP
app.use(vhost('cv.florian-magalhaes.fr', require('/cv').app))
// app.use(vhost('sync.mysite.com', require('/path/to/sync').app))
 
// Démarrage du serveur Express
app.listen(PORT, () => console.log(`✅  Le serveur est lancé et écoute sur le port :${PORT}`));