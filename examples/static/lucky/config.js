
seajs.config({
  // Enable plugins
  plugins: ['shim'],

  // Configure alias
  alias: {
    'jquery': {
      src: 'lib/jquery-1.9.1.min.js',
      exports: 'jQuery'
    },

    'easing': {
      src: 'lib/jquery.easing.1.3.js',
      deps: ['jquery']
    }
  }
});

