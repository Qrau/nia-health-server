const router = require("express").Router();
const { getSurveyById } = require("./../controllers/survey.controllers");

router.get("/", getSurveyById);

module.exports = router;
