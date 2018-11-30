import { Router } from 'express';
import { isLoggedIn } from '../../middlewares/authMiddlewares';
const router = Router();

/* GET home page. */
router.get('/', isLoggedIn,function(req, res, next) {
  res.render('index');
});

export default router;
