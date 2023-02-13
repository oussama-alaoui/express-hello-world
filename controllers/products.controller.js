const AuctionProduct = require("../models/auctionProducts");
const BuyProduct = require("../models/buyProducts");
const RequestProduct = require("../models/requestProducts");
const GenProduct = require("../models/genproduct");
const User = require("../models/users.model");
exports.newAuction = (req, res) => {
    res.render("new_ads/newauction");
};

exports.createBuy = (req, res) => {
    const {name, weight, price, desc, weight_type, product_situation, section, category, sub_category, product_cleaning} = req.body;
    const { _id } = req.user;
    // check if all fields are filled
    if (!name || !weight || !price || !desc || !weight_type || !product_situation || !section || !category || !sub_category || !product_cleaning) {
        console.log("Please fill all fields");
        res.redirect("/newbuy");
    } else {
        // check if user can create new ad
        if (req.user.productsCount > 0) {
            // update user products count
            User.findByIdAndUpdate(_id, {$set: {productsCount: req.user.productsCount - 1}}, {new: true}, (err, doc) => {
                if (!err) {
                    console.log("User products count updated : " + doc);
                } else {
                    console.log("Error during user products count update: " + err);
                }
            });
            // create new ad
            const newBuyProduct = new BuyProduct({
                title: name,
                description: desc,
                price: price,
                seller: req.user._id,
                weight: weight,
                weight_type: weight_type,
                product_situation: product_situation,
                section: section,
                category: category,
                subcategory: sub_category,
                product_cleaning: product_cleaning,
                images: req.files.img.map(file => file.filename),
                documents: req.files.doc.map(file => file.filename),
            });
            newBuyProduct.save()
                .then((product) => {
                    req.flash("success", "New ad created successfully");
                    res.redirect("/");
                })
                .catch((err) => {
                    console.log(err);
                });
        }else{
            req.flash("error", "You can't create new ad");
            res.redirect("/subscription");
        }
    }
};

exports.createAuction = (req, res) => {
    const {name, weight, price, desc, weight_type, product_situation, section, category, sub_category, product_cleaning, price_start} = req.body;
    const { _id } = req.user;
    // check if all fields are filled
    if (!name || !weight || !price || !desc || !weight_type || !product_situation || !section || !category || !sub_category || !product_cleaning || !price_start) {
        console.log("name: " + name + " weight: " + weight + " price: " + price + " desc: " + desc + " weight_type: " + weight_type + " product_situation: " + product_situation + " section: " + section + " category: " + category + " sub_category: " + sub_category + " product_cleaning: " + product_cleaning + " price_start: " + price_start);
        res.redirect("/newauction");
    } else {
        // check role and if already have auction
        if (req.user.role === "seller") {
            // redirect to subscription page
            res.redirect("/subscription");
        } else if (req.user.role === "smart seller" && req.user.auctionCount == 0){
            res.redirect("/subscription");
        } else if (req.user.role === "user"){
            res.redirect("/subscription");
        } else {
            // create new auction
            const newAuctionProduct = new AuctionProduct({
                title: name,
                description: desc,
                price: price,
                seller: req.user._id,
                weight: weight,
                weight_type: weight_type,
                product_situation: product_situation,
                section: section,
                category: category,
                subcategory: sub_category,
                product_cleaning: product_cleaning,
                images: req.files.img.map(file => file.filename),
                documents: req.files.doc.map(file => file.filename),
                startingPrice: price_start,
            });
            newAuctionProduct.save()
                .then((product) => {
                    // update user auction count
                    User.findByIdAndUpdate(_id, {$set: {auctionCount: req.user.auctionCount + 1}}, {new: true}, (err, doc) => {
                        if (!err) {
                            console.log("User auction count updated : " + doc);
                        } else {
                            console.log("Error during user auction count update: " + err);
                        }
                    });
                    req.flash("success", "New auction created successfully");
                    res.redirect("/");
                }
                )
                .catch((err) => {
                    console.log(err);
                }
                );
        }
    }
            
}

exports.createRequest = (req, res) => {
    const {name, weight, req_price, desc, weight_type, product_situation, section, category, sub_category, product_cleaning, start_time, end_time} = req.body;
    const { _id } = req.user;
    // check if all fields are filled
    if (!name || !weight || !req_price || !desc || !weight_type || !product_situation || !section || !category || !sub_category || !product_cleaning || !start_time || !end_time) {
        console.log("Please fill all fields");
        res.redirect("/newrequest");
    } else {
        // check if start time is before end time
        if (start_time < end_time) {
            // create new request
            const newBuyProduct = new RequestProduct({
                title: name,
                description: desc,
                price: req_price,
                seller: req.user._id,
                weight: weight,
                weight_type: weight_type,
                product_situation: product_situation,
                section: section,
                category: category,
                subcategory: sub_category,
                product_cleaning: product_cleaning,
                images: req.files.img.map(file => file.filename),
                documents: req.files.doc.map(file => file.filename),
                start_time: start_time,
                end_time: end_time,
            });
            newBuyProduct.save()
                .then((product) => {
                    req.flash("success", "New request created successfully");
                    res.redirect("/");
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            console.log("Start time is after end time");
            res.redirect("newrequest");
        }
    }
}

exports.createAdGen = (req, res) => {
    const {name, price, desc, section, category} = req.body;
    const { _id } = req.user;
    // check if all fields are filled
    if (!name || !price || !desc || !section || !category) {
        console.log("Please fill all fields");
        res.redirect("/newad");
    }
    else {
        // check user if he can create new ad
        if (req.user.ser_machCount > 0){
            // create new ad
            const newAd = new GenProduct({
                title: name,
                description: desc,
                price: price,
                seller: req.user._id,
                section: section,
                category: category,
                images: req.files.img.map(file => file.filename),
                documents: req.files.doc.map(file => file.filename),
            });
            newAd.save()
                .then((product) => {
                    // update user ad count
                    User.findByIdAndUpdate(_id, {$set: {ser_machCount: req.user.ser_machCount - 1}}, {new: true}, (err, doc) => {
                        if (!err) {
                            console.log("User ad count updated : " + doc);
                        } else {
                            console.log("Error during user ad count update: " + err);
                        }
                    });
                    req.flash("success", "New ad created successfully");
                    res.redirect("/");
                }
                )
                .catch((err) => {
                    console.log(err);
                }
                );
        } else {
            res.redirect("/subscription");
        }
    }
}

exports.get_myads = async (req, res) => {
    const { _id } = req.user;

    // get all ads of user from auction request buy and gen and render them in myads page
    const myads = [];

    // get all auction ads
    try {
        // get all auction ads
        const auction = await AuctionProduct.find({seller: _id});

        auction.forEach((ad) => {
            // add ty to each ad to know which type of ad it is
        
            console.log(ad);
            myads.push(ad);
        });

    } catch (err) {
        console.log(err);
    }

    // get all request ads
    try {
        const req = await RequestProduct.find({seller: _id});

        req.forEach((ad) => {
            myads.push(ad);
        });
    } catch (err) {
        console.log(err);
    }
    // get all buy ads
    try {
        const buy = await BuyProduct.find({seller: _id});

        buy.forEach((ad) => {
            myads.push(ad);
        });
    } catch (err) {
        console.log(err);
    }
    // get all gen ads
    try {
        const gen = await GenProduct.find({seller: _id});
        gen.forEach((ad) => {
            myads.push(ad);
        });
    } catch (err) {
        console.log(err);
    }
    // console.log(myads);
    res.render("myads", {myads: myads});
}

exports.index = async (req, res) => {
    // get all ads from auction request buy and gen and render them in index page
    const ads = [];

    // get all auction ads
    try {
        // get all auction ads
        const auction = await AuctionProduct.find({});

        auction.forEach((ad) => {
            // add ty to each ad to know which type of ad it is
            ad.ty = "auction";
            ads.push(ad);
        });

    }
    catch (err) {
        console.log(err);
    }

    // get all request ads
    try {
        const req = await RequestProduct.find({});

        req.forEach((ad) => {
            ad.ty = "request";
            ads.push(ad);
        });
    }
    catch (err) {
        console.log(err);
    }
    // get all buy ads
    try {
        const buy = await BuyProduct.find({});

        buy.forEach((ad) => {
            ad.ty = "buy";
            ads.push(ad);
        });
    }
    catch (err) {
        console.log(err);
    }
    // get all gen ads
    try {
        const gen = await GenProduct.find({});

        gen.forEach((ad) => {
            ad.ty = "gen";
            ads.push(ad);
        });
    }
    catch (err) {
        console.log(err);
    }
    console.log(ads);
    res.render("index", {ads: ads});
}