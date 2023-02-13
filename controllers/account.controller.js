var userModule = require('../models/users.model');

exports.get_subscription = (req, res) => {
    res.render('settings/subscriptions');
}

exports.post_subscription = (req, res) => {
    const { subscription, price } = req.body;
    const { _id } = req.user;
    if (req.user.sold < price) {
        res.render('sub_success', {messages: 'لا تتوفر على سعر الباقة، يجب شحن الحساب', status: 'Failed'});
        return;
    }
    if(req.user.role == "professional seller") {
        res.render('sub_success', {messages: 'أنت بالفعل لديك باقة تاجر ذكي', status: 'Failed'});
        return;
    }
    else {
        // get type of subscription
        if (subscription == "seller") {
            userModule.findByIdAndUpdate(_id, { $set: { role: subscription, sold: req.user.sold - price, productsCount: 10, ser_machCount: 10 } }, { new: true }, (err, doc) => {
                if (!err) {
                    res.render('sub_success', {messages: 'مبروك لقد تم شراء الباقة بنجاح' , status: 'Success'});
                    console.log('Subscription updated : ' + doc);
                }
                else {
                    console.log('Error during subscription update: ' + err);
                }
            });
        }
        else if (subscription == "smart seller") {
            userModule.findByIdAndUpdate(_id, { $set: { role: subscription, sold: req.user.sold - price, productsCount: 20, ser_machCount: 10 } }, { new: true }, (err, doc) => {
                if (!err) {
                    res.render('sub_success', {messages: 'مبروك لقد تم شراء الباقة بنجاح' , status: 'Success'});
                    console.log('Subscription updated : ' + doc);
                }
                else {
                    console.log('Error during subscription update: ' + err);
                }
            });
        }
        else if (subscription == "professional seller") {
            userModule.findByIdAndUpdate(_id, { $set: { role: subscription, sold: req.user.sold - price, productsCount: 300000, ser_machCount: 100000 } }, { new: true }, (err, doc) => {
                if (!err) {
                    res.render('sub_success', {messages: 'مبروك لقد تم شراء الباقة بنجاح' , status: 'Success'});
                    console.log('Subscription updated : ' + doc);
                }
                else {
                    console.log('Error during subscription update: ' + err);
                }
            });
        }
        else {
            res.render('sub_success', {messages: 'حدث خطأ ما، يرجى المحاولة مرة أخرى', status: 'Failed'});
        }

    }
}

exports.get_payment = (req, res) => {
    res.render('settings/payment', {user : req.user});
}

exports.get_identification = (req, res) => {
    res.render('settings/identification', {user : req.user});
}

exports.put_identification = (req, res) => {
    const { _id } = req.user;
    const {cin, birthday, email, phone_number, } = req.body;

    userModule.findByIdAndUpdate(_id, { $set: { cin: cin, birthday: birthday, email: email, phone: phone_number } }, { new: true }, (err, doc) => {
        if (!err) {
            res.redirect('/account');
            console.log('Identification updated : ' + doc);
        }
        else {
            console.log('Error during identification update: ' + err);
        }
    });
}

exports.get_address = (req, res) => {
    res.render('settings/address', {user : req.user});
}

exports.put_address = (req, res) => {
    const { _id } = req.user;
    const {city, state, region, home_number} = req.body;

    userModule.findByIdAndUpdate(_id, { $set: { city: city, state: state, region: region, home_number: home_number } }, { new: true }, (err, doc) => {
        if (!err) {
            res.redirect('/account');
            console.log('Address updated : ' + doc);
        }
        else {
            console.log('Error during address update: ' + err);
        }
    });
}