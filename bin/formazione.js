const shuffle = require('shuffle-array');
const rosa = require('../rosa.json');
const reparti = [rosa.portieri,rosa.difensori,rosa.centrocampisti,rosa.attaccanti];

reparti.forEach(reparto => {
    shuffle(reparto);
    console.log(reparto.join(', '));
});
