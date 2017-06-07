/* to run: babel-node albums.js */

global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

const spotify = new SpotifyWrapper({
  token: 'BQBj6j6a-tldvgjI4JQ2xSLt6a2Vcn_35ioDSDBrP_nYS-FCVj_bTVrsex4t3cJn0LWtq96Ue3RenqXM6PhQhmo3kZhxrsar1m2nmS6KfwZsY6lDFQ1hiq_tC0x7jjuvetNOYjCsoDdizucyv7s'
});

const albums = spotify.search.albums('Incubus');

albums.then(data => data.albums.items.map(item => console.log(item.name)));
