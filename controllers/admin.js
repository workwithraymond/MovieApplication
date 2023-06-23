const admin = require("../models/admin")




function isAdmin(req,res,next)
	{
		if(req.isAuthenticated()&&req.user.isAdmin==true)
			return next();
		req.flash("error","You Must be signed in as Admin");
		res.redirect("/admin/login");
	}