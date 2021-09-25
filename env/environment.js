const environment = {
    port: process.env.PORT || 3003,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || './../redbicicletas-fe/angular-project/dist/',
    filesRoute: process.env.FILES_ROUTE || 'files',
    angularIndex: './../redbicicletas-fe/angular-project/dist/redbicicletas-fe/index.html'
};

module.exports = environment;