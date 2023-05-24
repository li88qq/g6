/**
 * layout
 * @param G6
 */
export const registerLayout = (G6) => {
    G6.registerLayout('workflow', {
        execute: function () {
            const self = this;
            const nodes = buildTree(self);

            const height = 100;
            const beginNode = nodes[0];


            const point = {x: 100, y: 100};
            let x1 = point.x;
            let y1 = point.y;
            let h1 = beginNode.size[1] / 2;

            let y = 0;

            nodes.forEach(node => {
                console.log(node);
                const {size} = node;
                y = y1 + h1 / 2 + height + size[1] / 2
                node.x = x1;
                node.y = y;

                y1 = y;
                h1 = size[1];
            })
        }
    })
}

//构建树
const buildTree = ({nodes, edges}) => {
    const nodeList = [];
    const idMap = {};
    nodes.forEach((item, index) => {
        idMap[item.id] = index;
        item.inEdges = []
        item.outEdges = []
    })
    edges.forEach(item => {
        const {source, target} = item;
        
    })
    console.log(nodes)
    console.log(edges)
    return nodeList;
}