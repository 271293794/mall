module.exports = class Option {
    /**选择字段 */
    attributes = ['field'];
    /**条件 */
    where = {};
    /**排序 */
    order = [['field', 'ASC|DESC']];
    /**跳过X条 */
    offset = 0;
    /**取得X条 */
    limit = 0;
    /**包含 */
    include = [{
        model: '',
        as: '',
        ...this

    }];
    /**分组 */
    group = [];
}