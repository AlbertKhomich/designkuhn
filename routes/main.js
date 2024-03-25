const express = require("express");
const { body, validationResult } = require("express-validator");

const {
  getIndex,
  getHoreca,
  getKleideranfertigung,
  getHeimtextilien,
  getKontakte,
  getMyself,
  postSendEmail,
} = require("../controllers/main");

const router = express.Router();

router.get("/", getIndex);
router.get("/horeca", getHoreca);
router.get("/kleideranfertigung", getKleideranfertigung);
router.get("/heimtextilien", getHeimtextilien);
router.get("/kontakte", getKontakte);
router.get("/myself", getMyself);

router.post(
  "/send-email",
  [
    body("inputName")
      .trim()
      .escape()
      .notEmpty()
      .withMessage("Name is required")
      .customSanitizer((value) => {
        return value
          .toLowerCase()
          .replace(/\b\w/g, (char) => char.toUpperCase());
      }),
    body("inputEmail")
      .isEmail()
      .withMessage("Invalid email address")
      .normalizeEmail(),
    body("inputTel").isNumeric().withMessage("Invalid number"),
    body("inputKomm").trim().escape(),
  ],
  postSendEmail
);

module.exports = router;
