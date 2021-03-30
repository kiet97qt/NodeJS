class NewsController {
  index(req, res) {
    console.log(req.method);
    res.render("news");
  }
  show(req, res) {
    res.send("News Details !!!");
  }
}
// hello
module.exports = new NewsController();
