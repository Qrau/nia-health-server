const surveyRouter = require("./survey.routes");
const router = require("express").Router();

router.use("/survey", surveyRouter);

module.exports = router;
