const path = require('path');

module.exports = {
  entry: {
    app: './src/app.js',
    frases: './src/frases.js',
  },
  output: {
    filename: '[name].bundle.js', // Utiliza [name] para generar un nombre de archivo basado en el nombre de la entrada
    path: path.resolve(__dirname, 'dist'),
  },
};
