const db = require("../db");

exports.getSurveyById = async (req, res, next) => {
  const { id } = req.query;

  try {
    db.query("SELECT * FROM `survey` WHERE id='" + id + "'", (err, result) => {
      if (err) {
        throw err;
      } else {
        next(res.send(result));
      }
    });
  } catch (err) {
    console.log(err);
  }
};
