const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  host: 'send.one.com',
  port: 465,
  secure: true,
  auth: {
    user: "post@texas-burger.no",
    pass: "Sarpsborg2021",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/", (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone
  const email = req.body.email;
  const mail = {
    from: name,
    to: "post@texas-burger.no",
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${phone}</p>
           <p>Email: ${email}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});