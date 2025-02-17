import express from 'express';
import { handleHome,handleAbout, handleHomePost } from "../controllers/homeControllers.js";

const router = express.Router();

router.get('/',handleHome)
router.post('/',handleHomePost);
router.get('/about',handleAbout);

export default router;