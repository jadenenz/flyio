var express = require("express")
var router = express.Router()

const messages = [
  {
    text: "Heyyy bestie",
    user: "Botwes",
    added: new Date(),
  },
  {
    text: "Let's Maple!",
    user: "Kyori",
    added: new Date(),
  },
]

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages })
})

// GET new form page
router.get("/new", function (req, res, next) {
  res.render("form", { title: "New Form" })
})

//POST for submitting the form
router.post("/new", function (req, res, next) {
  const messageText = req.body.messageText
  const authorName = req.body.authorName
  messages.push({ text: messageText, user: authorName, added: new Date() })
  res.redirect("/")
})

module.exports = router
