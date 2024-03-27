const express = require("express");
const { body, check } = require("express-validator");

const {
  getIndex,
  getHoreca,
  getKleideranfertigung,
  getHeimtextilien,
  getKontakte,
  getMyself,
  postSendEmail,
  postSendFeedback,
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
      .withMessage("Name ist erforderlich")
      .customSanitizer((value) => {
        return value
          .toLowerCase()
          .replace(/\b\w/g, (char) => char.toUpperCase());
      }),
    body("inputEmail")
      .isEmail()
      .withMessage("Ungültige E-Mail-Adresse")
      .normalizeEmail(),
    body("inputTel").isNumeric().withMessage("Ungültige Nummer"),
    body("inputKomm").trim().escape(),
  ],
  postSendEmail
);

router.post(
  "/send-feedback",
  [
    body("inputNameFeedback")
      .trim()
      .escape()
      .notEmpty()
      .withMessage("Name ist erforderlich")
      .customSanitizer((value) => {
        return value
          .toLowerCase()
          .replace(/\b\w/g, (char) => char.toUpperCase());
      }),
    body("inputLinkFeedback")
      .if((value, { req }) => req.body.inputLinkFeedback !== "")
      .isURL()
      .withMessage("Ungültige URL-Adresse"),
    body("inputFeedback")
      .trim()
      .escape()
      .notEmpty()
      .withMessage("Feedback ist erforderlich"),
  ],
  postSendFeedback
);

module.exports = router;
