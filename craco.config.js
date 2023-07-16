const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@presentation': path.resolve(__dirname, 'src/presentation'),
      '@data': path.resolve(__dirname, 'src/data'),
      '@domain': path.resolve(__dirname, 'src/domain'),
      '@usecases': path.resolve(__dirname, 'src/domain/usecases'),
      '@pages': path.resolve(__dirname, 'src/presentation/pages'),
      '@styles': path.resolve(__dirname, 'src/presentation/styles'),
      '@context': path.resolve(__dirname, 'src/presentation/context')
    },
  },
};