//注册添加按钮边
export const registerAddEdge = (G6)=>{
    G6.registerEdge('Button',{
        afterDraw(cfg, group) {
            // 获取图形组中的第一个图形，在这里就是边的路径图形
            const shape = group.get('children')[0];
            // 获取路径图形的中点坐标
            const midPoint = shape.getPoint(0.5);
            // 在中点增加一个矩形，注意矩形的原点在其左上角
            group.addShape('circle', {
                attrs: {
                    r: 15,
                    stroke: 'blue',
                    fill:'#fff',
                    // x 和 y 分别减去 width / 2 与 height / 2，使矩形中心在 midPoint 上
                    x: midPoint.x,
                    y: midPoint.y,
                },
                name: 'circle-sharp', // 在 G6 3.3 及之后的版本中，必须指定 name，可以是任意字符串，但需要在同一个自定义元素类型中保持唯一性
            });
            group.addShape('text', {
                attrs: {
                    stroke: 'blue',
                    text:'+',
                    // x 和 y 分别减去 width / 2 与 height / 2，使矩形中心在 midPoint 上
                    x: midPoint.x-5,
                    y: midPoint.y+7,
                },
                name: 'text-sharp', // 在 G6 3.3 及之后的版本中，必须指定 name，可以是任意字符串，但需要在同一个自定义元素类型中保持唯一性
            });
        },
        update: undefined,
    },'polyline')
}