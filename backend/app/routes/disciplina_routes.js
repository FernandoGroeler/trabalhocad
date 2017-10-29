module.exports = function(app, pool) {
  app.post('/api/cad/novo', (req, res) => {
    pool.connect((err, client, release) => {
      let nome = req.body.nome;
      let professor = req.body.professor;

      connectionError(err, res);

      client.query('insert into disciplina(nome,      ' +
                   '                       professor) ' +
                   '     values($1, $2)               ',
                   [nome, professor],
                   (err, item) => {
                     release();
                     execute(err, res);
                   });
    });
  });

  app.get('/api/cad', (req, res) => {
    pool.connect((err, client, release) => {
      connectionError(err, res);

      client.query('select * from disciplina', [], (err, item) => {
        release();

        if (err) {
          res.status(500).json(err);
          return console.error('Erro executanto a consulta', err.stack);
        } else {
          res.status(200).json(item.rows);
          return console.log(item.rowCount + ' registros retornados.');
        }
      });
    });
  });

  app.get('/api/cad/:id', (req, res) => {
    let id = req.params.id;

    pool.connect((err, client, release) => {
      connectionError(err, res);

      client.query('select * from disciplina where id = $1', [id], (err, item) => {
        release();

        if (err) {
          res.status(500).json(err);
          return console.error('Erro executanto a consulta', err.stack);
        } else {
          res.status(200).json(item.rows);
          return console.log(item.rowCount + ' registros retornados.');
        }
      });
    });
  });

  app.delete('/api/cad/delete/:id', (req, res) => {
    let id = req.params.id;

    pool.connect((err, client, release) => {
      connectionError(err, res);

      client.query('delete from disciplina where id = $1', [id], (err, item) => {
        release();
        execute(err, res);
      });
    });
  });

  app.put('/api/cad/edit/:id', (req, res) => {
    let id = req.params.id;

    let nome = req.body.nome;
    let professor = req.body.professor;

    pool.connect((err, client, release) => {
      connectionError(err, res);

      client.query('update disciplina     ' +
                   '   set nome = $1,     ' +
                   '       professor = $2 ' +
                   ' where id = $3        ',
                   [nome, professor, id],
                   (err, item) => {
        release();
        execute(err, res);
      });
    });
  });

  function connectionError(err, res) {
    if (err) {
      res.status(500);
      return console.error('Erro na conexão.', err.stack);
    }
  }

  function execute(err, res) {
    if (err) {
      res.status(500).json(err);
      return console.log('Erro.', err.stack);
    } else {
      res.status(200).json("Sucesso.");
      return console.log('Sucesso.');
    }
  }
}
