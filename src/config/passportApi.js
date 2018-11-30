import { use, initialize as _initialize, authenticate as _authenticate } from "passport";
import { ExtractJwt as _ExtractJwt, Strategy as _Strategy } from "passport-jwt";
import user from "../models/user";
import { jwtSecret, jwtSession } from "./main.js";
const ExtractJwt = _ExtractJwt;
const Strategy = _Strategy;
const params = {
    secretOrKey: jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeader()
};

export default function() {
    const strategy = new Strategy(params, function(payload, done) {
        user.fineOne({where:{id: payload.id}})
            .then(user => {
                if(!user) {
                    return done(new Error("User not found"), null);
                }

                return done(null, {
                    id: user.id
                });

            })
            .catch(err => {
                return done(new Error("Query error"), null);
            });
    });
    use(strategy);
    return {
        initialize: function() {
            return _initialize();
        },
        authenticate: function() {
            return _authenticate("jwt", jwtSession);
        }
    };
};