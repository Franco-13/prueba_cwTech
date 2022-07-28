const { Router } = require("express");
const textTransform = require("../services/text.services.js");

const router = Router();

router.get("/", textTransform);

module.exports = router;
