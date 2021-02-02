var DataTypes = require("sequelize").DataTypes;
var _cms_help = require("./cms_help");
var _cms_help_category = require("./cms_help_category");
var _cms_member_report = require("./cms_member_report");
var _cms_prefrence_area = require("./cms_prefrence_area");
var _cms_prefrence_area_product_relation = require("./cms_prefrence_area_product_relation");
var _cms_subject = require("./cms_subject");
var _cms_subject_category = require("./cms_subject_category");
var _cms_subject_comment = require("./cms_subject_comment");
var _cms_subject_product_relation = require("./cms_subject_product_relation");
var _cms_topic = require("./cms_topic");
var _cms_topic_category = require("./cms_topic_category");
var _cms_topic_comment = require("./cms_topic_comment");
var _oms_cart_item = require("./oms_cart_item");
var _oms_company_address = require("./oms_company_address");
var _oms_order = require("./oms_order");
var _oms_order_item = require("./oms_order_item");
var _oms_order_operate_history = require("./oms_order_operate_history");
var _oms_order_return_apply = require("./oms_order_return_apply");
var _oms_order_return_reason = require("./oms_order_return_reason");
var _oms_order_setting = require("./oms_order_setting");
var _pms_album = require("./pms_album");
var _pms_album_pic = require("./pms_album_pic");
var _pms_brand = require("./pms_brand");
var _pms_comment = require("./pms_comment");
var _pms_comment_replay = require("./pms_comment_replay");
var _pms_feight_template = require("./pms_feight_template");
var _pms_member_price = require("./pms_member_price");
var _pms_product = require("./pms_product");
var _pms_product_attribute = require("./pms_product_attribute");
var _pms_product_attribute_category = require("./pms_product_attribute_category");
var _pms_product_attribute_value = require("./pms_product_attribute_value");
var _pms_product_category = require("./pms_product_category");
var _pms_product_category_attribute_relation = require("./pms_product_category_attribute_relation");
var _pms_product_full_reduction = require("./pms_product_full_reduction");
var _pms_product_ladder = require("./pms_product_ladder");
var _pms_product_operate_log = require("./pms_product_operate_log");
var _pms_product_vertify_record = require("./pms_product_vertify_record");
var _pms_sku_stock = require("./pms_sku_stock");
var _sms_coupon = require("./sms_coupon");
var _sms_coupon_history = require("./sms_coupon_history");
var _sms_coupon_product_category_relation = require("./sms_coupon_product_category_relation");
var _sms_coupon_product_relation = require("./sms_coupon_product_relation");
var _sms_flash_promotion = require("./sms_flash_promotion");
var _sms_flash_promotion_log = require("./sms_flash_promotion_log");
var _sms_flash_promotion_product_relation = require("./sms_flash_promotion_product_relation");
var _sms_flash_promotion_session = require("./sms_flash_promotion_session");
var _sms_home_advertise = require("./sms_home_advertise");
var _sms_home_brand = require("./sms_home_brand");
var _sms_home_new_product = require("./sms_home_new_product");
var _sms_home_recommend_product = require("./sms_home_recommend_product");
var _sms_home_recommend_subject = require("./sms_home_recommend_subject");
var _ums_admin = require("./ums_admin");
var _ums_admin_login_log = require("./ums_admin_login_log");
var _ums_admin_permission_relation = require("./ums_admin_permission_relation");
var _ums_admin_role_relation = require("./ums_admin_role_relation");
var _ums_growth_change_history = require("./ums_growth_change_history");
var _ums_integration_change_history = require("./ums_integration_change_history");
var _ums_integration_consume_setting = require("./ums_integration_consume_setting");
var _ums_member = require("./ums_member");
var _ums_member_level = require("./ums_member_level");
var _ums_member_login_log = require("./ums_member_login_log");
var _ums_member_member_tag_relation = require("./ums_member_member_tag_relation");
var _ums_member_product_category_relation = require("./ums_member_product_category_relation");
var _ums_member_receive_address = require("./ums_member_receive_address");
var _ums_member_rule_setting = require("./ums_member_rule_setting");
var _ums_member_statistics_info = require("./ums_member_statistics_info");
var _ums_member_tag = require("./ums_member_tag");
var _ums_member_task = require("./ums_member_task");
var _ums_menu = require("./ums_menu");
var _ums_permission = require("./ums_permission");
var _ums_resource = require("./ums_resource");
var _ums_resource_category = require("./ums_resource_category");
var _ums_role = require("./ums_role");
var _ums_role_menu_relation = require("./ums_role_menu_relation");
var _ums_role_permission_relation = require("./ums_role_permission_relation");
var _ums_role_resource_relation = require("./ums_role_resource_relation");

function initModels(sequelize) {
  var cms_help = _cms_help(sequelize, DataTypes);
  var cms_help_category = _cms_help_category(sequelize, DataTypes);
  var cms_member_report = _cms_member_report(sequelize, DataTypes);
  var cms_prefrence_area = _cms_prefrence_area(sequelize, DataTypes);
  var cms_prefrence_area_product_relation = _cms_prefrence_area_product_relation(sequelize, DataTypes);
  var cms_subject = _cms_subject(sequelize, DataTypes);
  var cms_subject_category = _cms_subject_category(sequelize, DataTypes);
  var cms_subject_comment = _cms_subject_comment(sequelize, DataTypes);
  var cms_subject_product_relation = _cms_subject_product_relation(sequelize, DataTypes);
  var cms_topic = _cms_topic(sequelize, DataTypes);
  var cms_topic_category = _cms_topic_category(sequelize, DataTypes);
  var cms_topic_comment = _cms_topic_comment(sequelize, DataTypes);
  var oms_cart_item = _oms_cart_item(sequelize, DataTypes);
  var oms_company_address = _oms_company_address(sequelize, DataTypes);
  var oms_order = _oms_order(sequelize, DataTypes);
  var oms_order_item = _oms_order_item(sequelize, DataTypes);
  var oms_order_operate_history = _oms_order_operate_history(sequelize, DataTypes);
  var oms_order_return_apply = _oms_order_return_apply(sequelize, DataTypes);
  var oms_order_return_reason = _oms_order_return_reason(sequelize, DataTypes);
  var oms_order_setting = _oms_order_setting(sequelize, DataTypes);
  var pms_album = _pms_album(sequelize, DataTypes);
  var pms_album_pic = _pms_album_pic(sequelize, DataTypes);
  var pms_brand = _pms_brand(sequelize, DataTypes);
  var pms_comment = _pms_comment(sequelize, DataTypes);
  var pms_comment_replay = _pms_comment_replay(sequelize, DataTypes);
  var pms_feight_template = _pms_feight_template(sequelize, DataTypes);
  var pms_member_price = _pms_member_price(sequelize, DataTypes);
  var pms_product = _pms_product(sequelize, DataTypes);
  var pms_product_attribute = _pms_product_attribute(sequelize, DataTypes);
  var pms_product_attribute_category = _pms_product_attribute_category(sequelize, DataTypes);
  var pms_product_attribute_value = _pms_product_attribute_value(sequelize, DataTypes);
  var pms_product_category = _pms_product_category(sequelize, DataTypes);
  var pms_product_category_attribute_relation = _pms_product_category_attribute_relation(sequelize, DataTypes);
  var pms_product_full_reduction = _pms_product_full_reduction(sequelize, DataTypes);
  var pms_product_ladder = _pms_product_ladder(sequelize, DataTypes);
  var pms_product_operate_log = _pms_product_operate_log(sequelize, DataTypes);
  var pms_product_vertify_record = _pms_product_vertify_record(sequelize, DataTypes);
  var pms_sku_stock = _pms_sku_stock(sequelize, DataTypes);
  var sms_coupon = _sms_coupon(sequelize, DataTypes);
  var sms_coupon_history = _sms_coupon_history(sequelize, DataTypes);
  var sms_coupon_product_category_relation = _sms_coupon_product_category_relation(sequelize, DataTypes);
  var sms_coupon_product_relation = _sms_coupon_product_relation(sequelize, DataTypes);
  var sms_flash_promotion = _sms_flash_promotion(sequelize, DataTypes);
  var sms_flash_promotion_log = _sms_flash_promotion_log(sequelize, DataTypes);
  var sms_flash_promotion_product_relation = _sms_flash_promotion_product_relation(sequelize, DataTypes);
  var sms_flash_promotion_session = _sms_flash_promotion_session(sequelize, DataTypes);
  var sms_home_advertise = _sms_home_advertise(sequelize, DataTypes);
  var sms_home_brand = _sms_home_brand(sequelize, DataTypes);
  var sms_home_new_product = _sms_home_new_product(sequelize, DataTypes);
  var sms_home_recommend_product = _sms_home_recommend_product(sequelize, DataTypes);
  var sms_home_recommend_subject = _sms_home_recommend_subject(sequelize, DataTypes);
  var ums_admin = _ums_admin(sequelize, DataTypes);
  var ums_admin_login_log = _ums_admin_login_log(sequelize, DataTypes);
  var ums_admin_permission_relation = _ums_admin_permission_relation(sequelize, DataTypes);
  var ums_admin_role_relation = _ums_admin_role_relation(sequelize, DataTypes);
  var ums_growth_change_history = _ums_growth_change_history(sequelize, DataTypes);
  var ums_integration_change_history = _ums_integration_change_history(sequelize, DataTypes);
  var ums_integration_consume_setting = _ums_integration_consume_setting(sequelize, DataTypes);
  var ums_member = _ums_member(sequelize, DataTypes);
  var ums_member_level = _ums_member_level(sequelize, DataTypes);
  var ums_member_login_log = _ums_member_login_log(sequelize, DataTypes);
  var ums_member_member_tag_relation = _ums_member_member_tag_relation(sequelize, DataTypes);
  var ums_member_product_category_relation = _ums_member_product_category_relation(sequelize, DataTypes);
  var ums_member_receive_address = _ums_member_receive_address(sequelize, DataTypes);
  var ums_member_rule_setting = _ums_member_rule_setting(sequelize, DataTypes);
  var ums_member_statistics_info = _ums_member_statistics_info(sequelize, DataTypes);
  var ums_member_tag = _ums_member_tag(sequelize, DataTypes);
  var ums_member_task = _ums_member_task(sequelize, DataTypes);
  var ums_menu = _ums_menu(sequelize, DataTypes);
  var ums_permission = _ums_permission(sequelize, DataTypes);
  var ums_resource = _ums_resource(sequelize, DataTypes);
  var ums_resource_category = _ums_resource_category(sequelize, DataTypes);
  var ums_role = _ums_role(sequelize, DataTypes);
  var ums_role_menu_relation = _ums_role_menu_relation(sequelize, DataTypes);
  var ums_role_permission_relation = _ums_role_permission_relation(sequelize, DataTypes);
  var ums_role_resource_relation = _ums_role_resource_relation(sequelize, DataTypes);


  return {
    cms_help,
    cms_help_category,
    cms_member_report,
    cms_prefrence_area,
    cms_prefrence_area_product_relation,
    cms_subject,
    cms_subject_category,
    cms_subject_comment,
    cms_subject_product_relation,
    cms_topic,
    cms_topic_category,
    cms_topic_comment,
    oms_cart_item,
    oms_company_address,
    oms_order,
    oms_order_item,
    oms_order_operate_history,
    oms_order_return_apply,
    oms_order_return_reason,
    oms_order_setting,
    pms_album,
    pms_album_pic,
    pms_brand,
    pms_comment,
    pms_comment_replay,
    pms_feight_template,
    pms_member_price,
    pms_product,
    pms_product_attribute,
    pms_product_attribute_category,
    pms_product_attribute_value,
    pms_product_category,
    pms_product_category_attribute_relation,
    pms_product_full_reduction,
    pms_product_ladder,
    pms_product_operate_log,
    pms_product_vertify_record,
    pms_sku_stock,
    sms_coupon,
    sms_coupon_history,
    sms_coupon_product_category_relation,
    sms_coupon_product_relation,
    sms_flash_promotion,
    sms_flash_promotion_log,
    sms_flash_promotion_product_relation,
    sms_flash_promotion_session,
    sms_home_advertise,
    sms_home_brand,
    sms_home_new_product,
    sms_home_recommend_product,
    sms_home_recommend_subject,
    ums_admin,
    ums_admin_login_log,
    ums_admin_permission_relation,
    ums_admin_role_relation,
    ums_growth_change_history,
    ums_integration_change_history,
    ums_integration_consume_setting,
    ums_member,
    ums_member_level,
    ums_member_login_log,
    ums_member_member_tag_relation,
    ums_member_product_category_relation,
    ums_member_receive_address,
    ums_member_rule_setting,
    ums_member_statistics_info,
    ums_member_tag,
    ums_member_task,
    ums_menu,
    ums_permission,
    ums_resource,
    ums_resource_category,
    ums_role,
    ums_role_menu_relation,
    ums_role_permission_relation,
    ums_role_resource_relation,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
