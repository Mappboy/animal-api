import { Router } from 'express';
const router = Router();
import { index, destroy } from '../../controllers/admin/reportController';
import { isLoggedIn } from '../../middlewares/authMiddlewares';

router.use(isLoggedIn);

router.get('/', index);
router.get('/delete/:id', destroy);

export default router;