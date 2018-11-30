import { serializeUser, deserializeUser, use } from 'passport';
import admin from '../models/admin';
import { Strategy as LocalStrategy } from 'passport-local';

// tell passport how to store user in session
serializeUser(function(user, done){
    done(null, user.id); //serialize user by id
});

// tell passport how to take the user from the session
deserializeUser(function(id, done){
    
    admin.fineOne({where:{id:id}}).then((err, user)=> {
        done(err, user);
    })
});

use('local.signin', new LocalStrategy({
    usernameField: 'email',
    papsswordField: 'password',
    passReqToCallback: true
}, function(req, email, password, done){
    //validator
    req.checkBody('email', 'Invalid email').notEmpty().isEmail();
    req.checkBody('password', 'Invalid password').notEmpty();
    var errors = req.validationErrors();
    if(errors){
        var messages = [];
        errors.forEach(function(error) {
            messages.push(error.msg);
        });
        return done(null, false, req.flash('error', messages));
    }

    admin.findOne({where:{ email: email }}).then((err, user)=>{
        if(err){
            return done(err);
        }
        if(!user){
            return done(null, false, {message: 'No user found.'});
        }
        if(!user.validPassword(password)){
            return done(null, false, {message: 'Wrong password.'});
        }

        req.flash('messages', ['Admin logged in successfully']);
        return done(null, user);

    });
}));
