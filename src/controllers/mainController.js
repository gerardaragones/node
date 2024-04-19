const MainController = {
    showMainPage(req, res) {
        const user = req.user;
        res.render('main', { user });
    }
};

module.exports = MainController;
