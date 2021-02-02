
module.exports = function (db) {
    db.pms_product.beforeValidate('活动时间为空字符时赋NULL', (model, options) => {
        if (!model.promotionStartTime) model.promotionStartTime = null;
        if (!model.promotionEndTime) model.promotionEndTime = null;
        

    });



}
