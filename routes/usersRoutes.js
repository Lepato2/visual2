const UsersController = require('../controllers/usersController');
const passport = require('passport');

module.exports =(app, upload) =>{
    //GET SE USA PARA TRAER DATOS
    app.get('/api/users/getAll', UsersController.getAll);

    //POST SE USA PARA GUARDAR DATOS
    
    app.post('/api/users/create',UsersController.register);
    app.post('/api/users/login',UsersController.login);
    app.post('/api/users/create',upload.array('image',1),UsersController.updateWithoutImage);

    //ACTUALIZAR DATOS
    //401  UNAUTHORIZED

    app.put('/api/users/update', passport.authenticate('jwt',{session: false}), upload.array('image',1),UsersController.update);
    app.put('/api/users/updateWithoutImage',  passport.authenticate('jwt',{session: false}), UsersController.updateWithoutImage);


}