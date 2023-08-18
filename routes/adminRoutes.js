const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDonarListController,
  getHospitalListController,
  getOrgListController,
  deleteDonarController,
} = require("../controllers/adminController");
const adminMiddleware = require("../middlewares/adminMiddleware");

//router object
const router = express.Router();

//  Routes

//get ||Donar list
router.get(
  "/donar-list",
  authMiddleware,
  adminMiddleware,
  getDonarListController
);

//get ||Hospital list
router.get(
  "/hospital-list",
  authMiddleware,
  adminMiddleware,
  getHospitalListController
);
//get || Organisation list
router.get(
  "/organisation-list",
  authMiddleware,
  adminMiddleware,
  getOrgListController
);
// =========================
//  DELETE DONAR  ||  GET
router.delete(
  "/delete-donar/:id",
  authMiddleware,
  adminMiddleware,
  deleteDonarController
);

//Export
module.exports = router;
