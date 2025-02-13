const dbManager = require ('../public/javascripts/dbManager');

exports.getMenu = async (req, res, next) => {

    console.log("can /menu/getmenu database call here controllers/menu.js********************");
    try {
    let menuItems = await dbManager.getMenu();
    return res.json(menuItems);
    }
    catch(error) {
    console.log(error);
    };
};

exports.getOrderDetails = async (req, res, next) => {
    try {
        let data = Object.keys(req.body);
        data = JSON.parse(data);
        let orderDetails = await dbManager.getOrderDetails(data.stripePiId, data.email);
        res.status(200).json(orderDetails);
    }
    catch(error) {
        console.log(error);
    };
};
