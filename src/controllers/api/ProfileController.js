import User from "../../models/user"
import Rescue from "../../models/report"
import lang from "../../config/lang/profile"

module.exports = {
    show(req, res, next){
        req.checkParams('id', lang.user_id_required).notEmpty();
        var errors = req.validationErrors();

        if(errors) {
            return res.status(400).send({errors});
        }

        User.findByPk(req.params.id)
            .then(user => {
                const rescues = user.getRescues()
            res.send({ user, rescues});
                            })
                            .catch(err => { return res.status(500).send({ error: lang.error }) });
                    
    },

    myProfile(req, res, next){
        User.findByPk(req.user.id)
            .then(user => {
                const rescues = user.getRescues().then(
                    rescues=>res.send({ user, rescues}))
                    .catch(err => { return res.status(500).send({ error: lang.error }) });
            })
            .catch(err => { return res.status(500).send({ error: lang.error }) });
    },

    settings(req, res, next){
        User.findByPk(req.user.id)
            .then(user => {
                res.send({ user });
            })
            .catch(err => { return res.status(500).send({ error: lang.error }) });
    },

    update(req, res, next) {

        req.checkBody('name', lang.name_required).notEmpty();
        if(req.body.password)
            req.checkBody('password', lang.invalid_password_4_min).notEmpty().isLength({min: 4});

        var errors = req.validationErrors();
        if(errors) {
            return res.status(400).send({errors});
        }

        User.findByPk(req.user.id)
            .then(user => {
                user.name = req.body.name ? req.body.name : user.name;
                user.password = req.body.password ? user.encryptPassword(req.body.password) : user.password;
                user.image = req.file ? req.file.filename : user.image;
                user.save()
                    .then(res.send({msg: lang.user_updated_successfully, user}))
                    .catch(err => { return res.status(500).send({ error: lang.error }) })
            })
            .catch(err => { return res.status(500).send({ error: lang.error }) });
    }
};