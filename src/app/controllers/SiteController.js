class SiteController{
    index(req,res){
        res.render('home');
    }
    search(req,res){
        if(req.method == 'GET'){
            res.render('search');
        } else if(req.method == 'POST'){
            res.send('Results');
        }
        //res.render('search');
    }
}
module.exports = new SiteController;