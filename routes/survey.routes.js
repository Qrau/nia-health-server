const router = require("express").Router();

router.get("/", async (req, res, next) => {
  console.log("anything");
});

module.exports = router;
