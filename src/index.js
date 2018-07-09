const constants = require('./config/constants').default;
const Counter = require('./card-counter/card-counter-service').Build({ constants: constants });

Counter.count();