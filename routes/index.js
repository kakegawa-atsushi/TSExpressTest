
function index(req, res) {
    res.render("index", {
        title: "Express with TypeScript"
    });
}
exports.index = index;

