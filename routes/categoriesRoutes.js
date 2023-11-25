const CategoriesController = require('../controllers/categoriesController');
const passport = require('passport');

module.exports =(app, upload) =>{
    //GET SE USA PARA TRAER DATOS
    app.get('/api/categories/getAll',passport.authenticate('jwt',{session: false}), CategoriesController.getAll);

    //POST SE USA PARA GUARDAR DATOS
    app.post('/api/categories/create',passport.authenticate('jwt',{session: false}),upload.array('image',1) ,CategoriesController.create);

    //ACTUALIZAR DATOS
    //401  UNAUTHORIZED

   
}