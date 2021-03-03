const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);
app.set('views', path.join(__dirname, 'views'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/api/hoteles',require('./routes/hoteles'));

app.use(require('./routes/index'));

app.use(express.static(path.join(__dirname, 'public')));


//iniciando servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor en puerto ${app.get('port')}`);
});