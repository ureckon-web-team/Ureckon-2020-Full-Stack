module.exports = {
    ensureAuthenticated: function (req, res, next) {
        if (req.isAuthenticated()) {
            next();
        } else {
            res.redirect("/auth");
        }
    }
};