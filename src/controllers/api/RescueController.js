import Rescue from "../../models/report"
import lang from "../../config/lang/rescue"

module.exports = {
        index(req, res, next) {
            const pagination = req.query.pagination ? parseInt(req.query.pagination) : 10;
            const page = req.query.page ? parseInt(req.query.page) : 1;

            Rescue.findAll({
                    where: {
                        deleted: false
                    },
                    offset: ((page - 1) * pagination),
                    limit: pagination,
                    order: ['createdAt', 'DESC']
                })
                .then(rescues => {
                    return res.send({
                        rescues,
                        page,
                        pagination
                    });
                })
                .catch(err => {
                    console.log(err);
                    return res.status(500).send({
                        error: lang.error
                    })
                });
        },
        indexRescued(req, res, next) {
            const pagination = req.query.pagination ? parseInt(req.query.pagination) : 10;
            const page = req.query.page ? parseInt(req.query.page) : 1;

            Rescue.findAll({
                    where: {
                        deleted: false
                    },
                    offset: ((page - 1) * pagination),
                    limit: pagination,
                    order: ['createdAt', 'DESC']
                })
                .then(rescues => {
                    return res.send({
                        rescues,
                        page,
                        pagination
                    });
                })
                .catch(err => {
                    return res.status(500).send({
                        error: lang.error
                    })
                });
        },
        store(req, res, next) {
            req.checkBody('description', lang.description_required).notEmpty();
            req.checkParams('id', lang.report_id_required).notEmpty();

            var errors = req.validationErrors();
            if (!req.file) {
                if (!errors)
                    errors = [];
                errors.push({
                    param: "image",
                    msg: lang.image_required
                });
            }
            if (errors) {
                return res.status(400).send({
                    errors
                });
            }

            // Rescue.findOne({where:}
            //     { id: req.params.id, $or:[ { rescue: null }, { "rescue.deleted": true }] },
            //     { "rescue": {
            //         user: req.user.id,
            //         image: req.file.filename,
            //         description: req.body.description,
            //         deleted: false,
            //         deletedAt: null,
            //         createdAt: new Date()
            //     }})
            //     .then(report => {return res.send({ _id: report._id })})
            //     .catch(err => { console.log(err); return res.status(500).send({ error: lang.error }) });
        },
        destroy(req, res, next) {
            Rescue.findByPk(req.params.id)
                .then(rescue => {
                        rescue.destroy()
                            .then(() => {
                                return res.send({
                                    msg: lang.rescue_deleted_successfully
                                })
                            })
                            .catch(err => {
                                return res.status(500).send({
                                    error: lang.error
                                })
                            })
                    })
                }
        };