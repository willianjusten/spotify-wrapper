/* to run: babel-node albums.js */

global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

const spotify = new SpotifyWrapper({
  token: 'BQAvnfpiNS3Jw8NA8VT56xtmHmIwyLVd9S1qLu6-zDN-hARckKKcqbsFc8U2BmDM05sjC9uulBKPLNG7mZpnDdtVw4YO13UB6R5TfOEaUbh-NteOruBzJVBRH-whR0aPTTaQvMjsM7AAuqgYRAs'
});

const albums = spotify.search.albums('Incubus');

albums.then(data => data.albums.items.map(item => console.log(item.name)));
