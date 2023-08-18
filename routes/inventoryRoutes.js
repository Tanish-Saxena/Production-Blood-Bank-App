const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalController,
  getOrganisationController,
  getOrganisationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} = require("../controllers/inventoryController");

const router = express.Router();

//Routes
//  ADD INVENTORY|| POST
router.post("/create-inventory", authMiddleware, createInventoryController);

//  GET ALL BLOOD RECORDS
router.get("/get-inventory", authMiddleware, getInventoryController);

//  GET Recents BLOOD RECORDS
router.get(
  "/get-recent-inventory",
  authMiddleware,
  getRecentInventoryController
);

//  GET Hospital BLOOD RECORDS
router.post(
  "/get-inventory-hospital",
  authMiddleware,
  getInventoryHospitalController
);

//  GET Donar RECORDS
router.get("/get-donars", authMiddleware, getDonarsController);

//  GET Hospital RECORDS
router.get("/get-hospitals", authMiddleware, getHospitalController);

//  GET Organisation RECORDS
router.get("/get-organisation", authMiddleware, getOrganisationController);

//  GET Organisation RECORDS for hospital
router.get(
  "/get-organisation-for-hospital",
  authMiddleware,
  getOrganisationForHospitalController
);

module.exports = router;
