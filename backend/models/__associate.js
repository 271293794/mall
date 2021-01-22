module.exports = function (db) {
    // 用户表
    db.ums_admin.associate = function (models) {
        // 主键
        this.hasMany(models.ums_admin_role_relation, { as: `ums_admin_role_relation`, foreignKey: 'adminId' })

    }
    db.sms_flash_promotion_product_relation.associate = function (models) {
        // 外键
        this.belongsTo(models.pms_product, { as: 'product', foreignKey: 'productId' })

    }
    // 新鲜好物表
    db.sms_home_new_product.associate = function (models) {
        // 关联产品
        this.belongsTo(models.pms_product, { as: 'product', foreignKey: 'productId' })
    }

    // 人气推荐表
    db.sms_home_recommend_product.associate = function (models) {
        // 关联产品
        this.belongsTo(models.pms_product, { as: 'product', foreignKey: 'productId' })
    }

    // 专题推荐表
    db.sms_home_recommend_subject.associate = function (models) {
        // 关联专题
        this.belongsTo(models.cms_subject, { as: 'subject', foreignKey: 'subjectId' })
    }
    db.sms_coupon_product_category_relation.associate = function (models) {
        // sms_coupon_product_category_relation 关联优惠券
        this.belongsTo(models.sms_coupon, { as: 'coupon', foreignKey: 'couponId' })
    }
    db.sms_coupon_product_relation.associate = function (models) {
        // sms_coupon_product_relation 关联优惠券
        this.belongsTo(models.sms_coupon, { as: 'coupon', foreignKey: 'couponId' })
    }





    db.sms_coupon.associate = function (models) {
        // 优惠券关联 sms_coupon_product_relation
        this.hasMany(models.sms_coupon_product_relation, { as: 'productRelation', foreignKey: 'couponId' })
        // 优惠券关联 sms_coupon_product_category_relation
        this.hasMany(models.sms_coupon_product_category_relation, { as: 'categoryRelation', foreignKey: 'couponId' })

        this.hasMany(models.sms_coupon_history, { as: 'history', foreignKey: 'couponId' })
        // this.belongsToMany(models.pms_product, {
        //     through: models.sms_coupon_product_relation,
        //     as: 'productRelation',
        //     foreignKey: 'couponId',
        //     otherKey: 'productId',
        // });
        // this.belongsToMany(models.pms_product_category, {
        //     through: models.sms_coupon_product_category_relation,
        //     as: 'categoryRelation',
        //     foreignKey: 'couponId',
        //     otherKey: 'productCategoryId',
        // });

    }


}