//USO EL passport.js es un middleware de autenticación flexible para Node. js. Se puede usar para autenticar a los usuarios mediante una variedad de estrategias, incluido el nombre de usuario y la contraseña, Facebook, Twitter y más
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy =require('passport-local').Strategy
const User = require ('../models/user')
const keys = require('./keys')

module.exports = function(passport){
    //Uso el "let" este me permite declarar variables limitando su alcance 
    let opts = {};
    //El jwtFromRequest es un estándar para transmitir información de forma segura en internet, por medio de archivos en formato JSON
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey = keys.secretOrkey

    passport.use(new JwtStrategy(opts, (jwt_payload, done)=>{

        User.findById(jwt_payload.id,(err, user) => {
            if (err){
                return done(err, false);
            }
            if(user){
                return done(null, user);
            }
            else{
                return done(null, false);
            }

        })
    }))
}
//Esta es la configuracion basica del passport 