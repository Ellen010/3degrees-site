var express = require("express");
var router = express.Router();
const nodemailer = require("nodemailer");

const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");
const { checkBody } = require("../modules/checkBody");

const templatePath = path.join(__dirname, "../templates/emails/emailSent.hbs");
const source = fs.readFileSync(templatePath, "utf8");
const template = handlebars.compile(source);


const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false, 
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
    },
});

router.post("/contact", (req, res) => {
    if (!checkBody(req.body, ["firstname", "lastname", "email", "title", "message"])) {
        res.json({ result: false, error: "Missing or empty fields" });
        return;
    }
    const { firstname, lastname, email, title, message } = req.body;

    const mailOptions = {
        from: email,
        to: "us@us.com",
        subject: "New email from the client",
        html: template({
            firstname: firstname,
            lastname: lastname,
            email: email,
            title: title,
            message: message,
        }),
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log("Error:", error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });

    /*
        #swagger.responses[200] = {
            description: 'Your email has been sent to 3Degrees Team.',
            schema: {
                result: true,
                message: "Email sent",
            },
        }
    */
    res.json({ result: true, message: "Email sent" });
});

module.exports = router;