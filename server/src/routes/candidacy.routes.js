import { Router } from "express";
import { deleteCandidacy, getAllCandidacies, getCandidacyById, getCandidacyByUserId, updateCandidacy, uploadCandidacy, vote } from "../controllers/candidacy.controller";
import AuthMiddleware from "../middlewares/auth.middleware";

const router = Router();

router.post('/upload', AuthMiddleware ,uploadCandidacy);
router.get('/', getAllCandidacies);
router.get('/:id', getCandidacyById);
router.get('/user/:id', getCandidacyByUserId);
router.put('/:id', updateCandidacy);
router.delete('/:id', deleteCandidacy);
router.put('/vote/:id', AuthMiddleware, vote);

export default router;