const agendaRoutes = require('./disciplina_routes');

module.exports = function(app, pool) {
  agendaRoutes(app, pool);
}
