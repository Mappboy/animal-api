import { Router } from 'express';
const router = Router();
import multer from 'multer';
const upload = multer({dest:'./public/images/user_profile_images'});
import apiAuth from '../../config/passportApi';
import { myProfile, settings, show, update } from '../../controllers/api/ProfileController';

router.get('/myprofile', apiAuth().authenticate(), myProfile);
router.get('/settings', apiAuth().authenticate(), settings);
router.get('/:id', show);
router.patch('/', [ apiAuth().authenticate(), upload.single('image') ], update);

export default router;
