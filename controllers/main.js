require("dotenv").config();

const { validationResult } = require("express-validator");
const { createTransporterSMTP } = require("../middleware/utils");

exports.getIndex = (req, res, next) => {
  res.render("index", {
    pageTitle:
      "Designstudio und Atelier von Oksana Kuhn | Kleideranfertigung | Atelier | Design",
    coverTitle: "Designstudio und Atelier von Oksana Kuhn",
    leftBlock: true,
    leftText:
      "Ich designe Kleiderstücke und Textilien für das Haus. Dekoriere Ihr Zuhause.",
    rightText:
      "Erarbeite einzigartiges Style, das Ihre Individualität unterstreicht.",
    rightBlock: true,
    buttonCover: true,
    buttonText: "Anmeldung für<br>die Beratung",
    discount: true,
    coverImage: "img/cover.jpg",
    sectionTitleContact: true,
    portfolio: true,
  });
};

exports.getHoreca = (req, res, next) => {
  res.render("horeca", {
    pageTitle: "Uniformdesign. Uniform, Tischdecken, Sets-, Vorhängenäherei",
    coverTitle: "HoReCa",
    leftBlock: false,
    leftText: "",
    rightBlock: false,
    rightText: "",
    buttonCover: true,
    buttonText: "Anfrage stellen",
    discount: false,
    coverImage: "img/horeca.png",
    jobServ: "Was mache ich",
    firstServ: "TISCHDECKEN-, SETS-,<br>VORHÄNGENÄHEREI",
    secondServ: "UNIFORMDESIGN",
    thirdServ: "ERARBEITUNG <br>UND NÄHEREI VON <br>STUHLÜBERWÜRFEN",
    isMehr: false,
    sectionTitleContact: true,
    portfolio: true,
  });
};

exports.getKleideranfertigung = (req, res, next) => {
  res.render("kleideranfertigung", {
    pageTitle:
      "Maßschneiderei in Bad Driburg [Vorhandene Stoffe ] [RABATT auf erste Bestellung]",
    coverTitle: "Kleideranfertigung",
    leftBlock: true,
    leftText: "Ich designe individuelle Kleiderstücke, die Ihre Figur betonnen",
    rightBlock: true,
    rightText: "Ich erarbeite Schnittschablonen nach Ihren Maßen",
    buttonCover: true,
    buttonText: "Anmeldung für<br>die Beratung",
    discount: true,
    coverImage: "img/kleideranfertigung.png",
    jobServ: "Was mache ich",
    firstServ: "KLEIDERANFERTIGUNG<br> NACH MAS",
    secondServ: "KLEIDERAUSBESSERUNG",
    thirdServ: "KLEIDERERNEUERUNG",
    isMehr: true,
    mehrText:
      "Ich begleite und berate die Braut rund um das Hochzeitskleid, nähe auch Brautkleider, Brautschleier und vieles mehr.",
    sectionTitleContact: true,
    portfolio: true,
  });
};

exports.getHeimtextilien = (req, res, next) => {
  res.render("heimtextilien", {
    pageTitle:
      "Design und Nähen von Vorhänge, das Interieur Dekoration auf Bestellung",
    coverTitle: "Textilien für Ihr Haus und Dekoration",
    leftBlock: true,
    leftText: "Ich style Vorhänge, die perfekt zur Zimmerausstattung passen",
    rightBlock: true,
    rightText: "Ich erarbeite Tagesdecken, Dekokissen und Bettwäsche",
    buttonCover: true,
    buttonText: "Anmeldung für<br>die Beratung",
    discount: true,
    coverImage: "img/heimtextilien.png",
    jobServ: "Ich designe und style für Sie",
    firstServ: "BETTWÄSCHE",
    secondServ: "VORHÄNGE",
    thirdServ: "KOPFKISSEN <br>UND TAGESDECKEN",
    isMehr: true,
    mehrText: "Außerdem nähe ich Tischdecken, Kopfrollen und vieles mehr",
    sectionTitleContact: true,
    portfolio: true,
  });
};

exports.getMyself = (req, res, next) => {
  res.render("myself", {
    pageTitle:
      "Über mich | Oksana Kuhn — professioneller Modedesignerin mit 10 Jahren Erfahrung",
    coverTitle: "Über mich",
    leftBlock: false,
    rightBlock: false,
    buttonCover: false,
    discount: false,
    coverImage: "img/me.png",
    sectionTitleContact: true,
    portfolio: true,
  });
};

exports.getKontakte = (req, res, next) => {
  res.render("kontakte", {
    pageTitle:
      "Kontaktinformationen | Designstudio und Atelier von Oksana Kuhn",
    sectionTitleContact: false,
    portfolio: false,
  });
};

exports.postSendEmail = (req, res, next) => {
  const { inputName, inputEmail, inputTel, inputKomm } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  let transporter = createTransporterSMTP();

  let mailOptions = {
    from: "from@example.com",
    to: "to@example.com",
    subject: "Msg from website",
    text: `
    Name: ${inputName}
    Email: ${inputEmail}
    Tel: ${inputTel}
    Komm: ${inputKomm}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Feedback sent: %s", info.messageId);
    res.json({ success: true });
  });
};

exports.postSendFeedback = async (req, res, next) => {
  const { inputNameFeedback, inputLinkFeedback, inputFeedback } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errorsFeedback: errors.array() });
  }

  let transporter = createTransporterSMTP();

  let mailOptions = {
    from: "from@example.com",
    to: "to@example.com",
    subject: "Feedback from website",
    text: `
    Name: ${inputNameFeedback}
    Link: ${inputLinkFeedback}
    Feedback: ${inputFeedback}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Feedback sent: %s", info.messageId);
    res.json({ success: true });
  });
};
