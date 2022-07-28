const textTransformController = require("../controllers/text.controllers.js");

const textTransform = (req, res) => {
  const { text } = req.query;

  const result = textTransformController(text);
  if (result.error) {
    res.status(400).json({
      message:
        "La palabra debe contener solo letras del abecedario sin epacios.",
    });
  } else {
    res.status(200).json(result);
  }
};

module.exports = textTransform;
