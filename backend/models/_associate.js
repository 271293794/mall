module.exports = function (db) {
    // 用户表
    // 主键
    db.ums_admin.hasMany(db.ums_admin_role_relation, { as: `ums_admin_role_relation`, foreignKey: 'adminId' })
    // 外键
    db.sms_flash_promotion_product_relation.belongsTo(db.pms_product, { as: 'product', foreignKey: 'productId' })

    // 新鲜好物表
    // 关联产品
    db.sms_home_new_product.belongsTo(db.pms_product, { as: 'product', foreignKey: 'productId' })


    // 人气推荐表
    // 关联产品
    db.sms_home_recommend_product.belongsTo(db.pms_product, { as: 'product', foreignKey: 'productId' })

    // 专题推荐表
    // 关联专题
    db.sms_home_recommend_subject.belongsTo(db.cms_subject, { as: 'subject', foreignKey: 'subjectId' })
    // sms_coupon_product_category_relation 关联优惠券
    db.sms_coupon_product_category_relation.belongsTo(db.sms_coupon, { as: 'coupon', foreignKey: 'couponId' })
    // sms_coupon_product_relation 关联优惠券
    db.sms_coupon_product_relation.belongsTo(db.sms_coupon, { as: 'coupon', foreignKey: 'couponId' })





    // 优惠券关联 sms_coupon_product_relation
    db.sms_coupon.hasMany(db.sms_coupon_product_relation, { as: 'productRelation', foreignKey: 'couponId' })
    // 优惠券关联 sms_coupon_product_category_relation
    db.sms_coupon.hasMany(db.sms_coupon_product_category_relation, { as: 'categoryRelation', foreignKey: 'couponId' })

    db.sms_coupon.hasMany(db.sms_coupon_history, { as: 'history', foreignKey: 'couponId' })




}