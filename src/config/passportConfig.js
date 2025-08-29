import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcryptjs';
import User from '../models/user.js';

passport.use(
    new LocalStrategy(async function(username, password, done) {
    try{
        const user = await user.findOne({ username});
        if(!user){
            return done(null,false,{message:"Incorrect username "});
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return done(null,user);
        }
        else return done(null,false,{message:"Incorrect password"});
    }
    catch(error){
        return done(error);
    }
  }
));