module.exports = {
    // 如果有一条数据的父节点是死数据呢？
    withChildren: function (list = [], { rootId = 0, id = 'id', pId = 'parentId', child = 'children' }) {
        for (let isAlllayer1 = false; !isAlllayer1; isAlllayer1 = !isAlllayer1) {
            list = list.filter(tempNode => {
                let isLast = true;
                // 非1级节点的叶节点（没爸爸）
                if (tempNode[pId] === rootId) return true
                // 找儿子节点
                for (let i = 0; i < list.length; i++) {
                    if (list[i][pId] == tempNode[id]) {
                        isLast = false
                        break
                    }
                }
                // 如果没有儿子而且是有爸爸的，就给他找爸爸
                if (isLast) {
                    list.forEach(item => {
                        if (tempNode[pId] === item[id]) {
                            if (!item[child]) item[child] = []
                            item[child].push(tempNode)
                        }
                    });
                }
                return !isLast;
            });
            // 如果还存在非1级的节点，则再次循环
            for (let j = 0; j < list.length; j++) {
                if (list[j][pId] !== rootId) {
                    isAlllayer1 = false;
                    break;
                }
            }
        }
        return list
    }


}