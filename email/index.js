const express = require('express');
var bodyParser = require('body-parser')
var nodemailer = require('nodemailer');
const app = express();
var port = 3001;
var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: 'rofigame.epitech@gmail.com',
    pass: 'zit4EiG1a'
  }
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.post('/sendEmail', function(req, res) {

  var mailOptions = {
    from: "CSULB Parking<donotreply@csulb.com>",
    to: req.body.email,
    subject: "Take our survey",
    html: "Dear student,<br><br>On behalf of the university, we would like to thank you for your patience in regards to parking. We understand that parking has become an issue in recent years and we are looking for ways to improve. We have tried valet parking this semester and would like to hear your feedback on this. If you could please fill out the survey below, we will be giving away $25 Amazon gift cards to the first 100 submissions.<br><br> Link to the survey: <br><a href=https://csulb-parking-survey.firebaseapp.com/>https://www.csulb.edu/parking-and-transportation-services/survey</a> <br><br>Parking and Transportation Services<br>California State University, Long Beach<br><a href=https://twitter.com/csulb_parking>@CSULB_Parking</a><br>562.985.4146"

  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      res.status(400).json(error)
    } else {
      res.json(info.response);
    }
  });
});

app.listen(port, () =>
  console.log(`app listening on port ${port}!`)
);
