const path = require('path');
const Dotenv = require('dotenv-webpack');


module.exports = {
  // The entry point file described above
  entry: {
    index: {
      import: './src/index.js',
      filename: 'bundle.js',
    },
    levenshtein: {
      import: './src/lev.js',
      filename: 'lev_bundle.js',
      library: {
        name: 'MyLibrary',
        type: 'window',
      }
    }
  },
  // The location of the build folder described above
  output: {
    path: path.resolve(__dirname, 'src', 'public'),
    library: {
      name: 'MyLibrary',
      type: 'window',
    }
  },
  // Optional and for development only. This provides the ability to
  // map the built code back to the original source format when debugging.
  devtool: 'eval-source-map',
  plugins: [
    new Dotenv()
  ],
  resolve: {
    alias: {
      'node_modules': path.join(__dirname, 'node_modules'),
    }
  }
};