import Rescue from '../../models/report'

module.exports = {
    async index(req, res, next){
        const pagination = req.query.pagination ? parseInt(req.query.pagination) : 10;
        const page = req.query.page ? parseInt(req.query.page) : 1;
        const total = await Report.find({}).count();
        Rescue.findAll({
            offset: ((page - 1) * pagination),
            limit: pagination,
            order: ['createdAt', 'DESC']
        })
            .then(reports => {
                return res.render('admin/report/index', { reports, page, pagination, total });
            })
            .catch(err => next(err));
    },
    destroy(req, res, next) {
        Rescue.findByPk(req.params.id)
            .then(report => {
                    report.delete()
                        .then( () => {
                            req.flash('messages', ['Report deleted successfully']);
                            res.redirect("back");
                        })
                        .catch(err => next(err));
            })
            .catch(err => next(err));
    },
};