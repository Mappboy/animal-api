import { Router } from 'express';
import multer from 'multer';
const upload = multer({dest:'./public/images/rescues'});
const router = Router();
import { store, destroy } from '../../controllers/api/RescueController';
import apiAuth from '../../config/passportApi';

router.get('/', reportController.index);
router.get('/:id', reportController.show);
router.post('/:id', [ apiAuth().authenticate(), upload.single('image') ] , store);
router.delete('/:id', apiAuth().authenticate(), destroy);

export default router;
