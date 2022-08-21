const db = require("../db");

exports.getSurveyById = async (req, res, next) => {
  const { id } = req.params;

  try {
    db.query(
      "SELECT DISTINCT survey.label as survey_label, question_type.label as question_type, question.question_content as question_content, question.id as question_id, possible_answer.content as possible_answer FROM survey JOIN question_type JOIN question JOIN possible_answer WHERE survey.id='" +
        id +
        "'",
      (err, result) => {
        if (err) {
          throw err;
        } else {
          next(
            res.send([
              ...new Map(
                result.map((item) => [item["question_id"], item])
              ).values(),
            ])
          );
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
};
