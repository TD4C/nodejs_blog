const newrouter = require('./news');
const siterouter = require('./site');
function route(app) {
    app.use('/', newrouter);
    app.use('/', siterouter);
}

module.exports = route;
