
module.exports = {
    cms_help: () => require('./cms_help').getInstance(),
    cms_help_category: () => require('./cms_help_category').getInstance(),
    cms_member_report: () => require('./cms_member_report').getInstance(),
    cms_prefrence_area: () => require('./cms_prefrence_area').getInstance(),
    cms_prefrence_area_product_relation: () => require('./cms_prefrence_area_product_relation').getInstance(),
    cms_subject: () => require('./cms_subject').getInstance(),
    cms_subject_category: () => require('./cms_subject_category').getInstance(),
    cms_subject_comment: () => require('./cms_subject_comment').getInstance(),
    cms_subject_product_relation: () => require('./cms_subject_product_relation').getInstance(),
    cms_topic: () => require('./cms_topic').getInstance(),
    cms_topic_category: () => require('./cms_topic_category').getInstance(),
    cms_topic_comment: () => require('./cms_topic_comment').getInstance(),
    oms_cart_item: () => require('./oms_cart_item').getInstance(),
    oms_company_address: () => require('./oms_company_address').getInstance(),
    oms_order: () => require('./oms_order').getInstance(),
    oms_order_item: () => require('./oms_order_item').getInstance(),
    oms_order_operate_history: () => require('./oms_order_operate_history').getInstance(),
    oms_order_return_apply: () => require('./oms_order_return_apply').getInstance(),
    oms_order_return_reason: () => require('./oms_order_return_reason').getInstance(),
    oms_order_setting: () => require('./oms_order_setting').getInstance(),
    pms_album: () => require('./pms_album').getInstance(),
    pms_album_pic: () => require('./pms_album_pic').getInstance(),
    pms_brand: () => require('./pms_brand').getInstance(),
    pms_comment: () => require('./pms_comment').getInstance(),
    pms_comment_replay: () => require('./pms_comment_replay').getInstance(),
    pms_feight_template: () => require('./pms_feight_template').getInstance(),
    pms_member_price: () => require('./pms_member_price').getInstance(),
    pms_product: () => require('./pms_product').getInstance(),
    pms_product_attribute: () => require('./pms_product_attribute').getInstance(),
    pms_product_attribute_category: () => require('./pms_product_attribute_category').getInstance(),
    pms_product_attribute_value: () => require('./pms_product_attribute_value').getInstance(),
    pms_product_category: () => require('./pms_product_category').getInstance(),
    pms_product_category_attribute_relation: () => require('./pms_product_category_attribute_relation').getInstance(),
    pms_product_full_reduction: () => require('./pms_product_full_reduction').getInstance(),
    pms_product_ladder: () => require('./pms_product_ladder').getInstance(),
    pms_product_operate_log: () => require('./pms_product_operate_log').getInstance(),
    pms_product_vertify_record: () => require('./pms_product_vertify_record').getInstance(),
    pms_sku_stock: () => require('./pms_sku_stock').getInstance(),
    sms_coupon: () => require('./sms_coupon').getInstance(),
    sms_coupon_history: () => require('./sms_coupon_history').getInstance(),
    sms_coupon_product_category_relation: () => require('./sms_coupon_product_category_relation').getInstance(),
    sms_coupon_product_relation: () => require('./sms_coupon_product_relation').getInstance(),
    sms_flash_promotion: () => require('./sms_flash_promotion').getInstance(),
    sms_flash_promotion_log: () => require('./sms_flash_promotion_log').getInstance(),
    sms_flash_promotion_product_relation: () => require('./sms_flash_promotion_product_relation').getInstance(),
    sms_flash_promotion_session: () => require('./sms_flash_promotion_session').getInstance(),
    sms_home_advertise: () => require('./sms_home_advertise').getInstance(),
    sms_home_brand: () => require('./sms_home_brand').getInstance(),
    sms_home_new_product: () => require('./sms_home_new_product').getInstance(),
    sms_home_recommend_product: () => require('./sms_home_recommend_product').getInstance(),
    sms_home_recommend_subject: () => require('./sms_home_recommend_subject').getInstance(),
    ums_admin: () => require('./ums_admin').getInstance(),
    ums_admin_login_log: () => require('./ums_admin_login_log').getInstance(),
    ums_admin_permission_relation: () => require('./ums_admin_permission_relation').getInstance(),
    ums_admin_role_relation: () => require('./ums_admin_role_relation').getInstance(),
    ums_growth_change_history: () => require('./ums_growth_change_history').getInstance(),
    ums_integration_change_history: () => require('./ums_integration_change_history').getInstance(),
    ums_integration_consume_setting: () => require('./ums_integration_consume_setting').getInstance(),
    ums_member: () => require('./ums_member').getInstance(),
    ums_member_level: () => require('./ums_member_level').getInstance(),
    ums_member_login_log: () => require('./ums_member_login_log').getInstance(),
    ums_member_member_tag_relation: () => require('./ums_member_member_tag_relation').getInstance(),
    ums_member_product_category_relation: () => require('./ums_member_product_category_relation').getInstance(),
    ums_member_receive_address: () => require('./ums_member_receive_address').getInstance(),
    ums_member_rule_setting: () => require('./ums_member_rule_setting').getInstance(),
    ums_member_statistics_info: () => require('./ums_member_statistics_info').getInstance(),
    ums_member_tag: () => require('./ums_member_tag').getInstance(),
    ums_member_task: () => require('./ums_member_task').getInstance(),
    ums_menu: () => require('./ums_menu').getInstance(),
    ums_permission: () => require('./ums_permission').getInstance(),
    ums_resource: () => require('./ums_resource').getInstance(),
    ums_resource_category: () => require('./ums_resource_category').getInstance(),
    ums_role: () => require('./ums_role').getInstance(),
    ums_role_menu_relation: () => require('./ums_role_menu_relation').getInstance(),
    ums_role_permission_relation: () => require('./ums_role_permission_relation').getInstance(),
    ums_role_resource_relation: () => require('./ums_role_resource_relation').getInstance(),
}