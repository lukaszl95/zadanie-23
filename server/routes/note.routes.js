import { Router } from 'express';
import * as NoteController from '../controllers/note.controller';

const router = new Router();

// Add a new Note
router.route('/notes').post(NoteController.addNote);

// Delete Note
router.route('/notes/:taskId').delete(NoteController.deleteNote);

// Rename Note
router.route('/notes/:taskId').put(NoteController.renameNote);

export default router;
