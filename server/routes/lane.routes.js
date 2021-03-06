import { Router } from 'express';
import * as LaneController from '../controllers/lane.controller';

const router = new Router();

// Get all Lanes
router.route('/lanes').get(LaneController.getLanes);

// Add a new Lane
router.route('/lanes').post(LaneController.addLane);

// Delete a lane
router.route('/lanes/:laneId').delete(LaneController.deleteLane);

// Rename Lane
router.route('/lanes/:laneId').put(LaneController.renameLane);
export default router;
