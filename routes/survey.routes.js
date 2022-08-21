const router = require("express").Router();
const { getSurveyById } = require("./../controllers/survey.controllers");

router.get("/id/:id", getSurveyById);

module.exports = router;
