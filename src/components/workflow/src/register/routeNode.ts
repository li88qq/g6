/**
 * route
 * @param G6
 */
export const registerRoute = (G6) => {
    G6.registerNode('Route', {
        draw: (cfg, group) => {
            const width = 92;
            const height = 30;
            const keyShape = group.addShape('rect', {
                attrs: {
                    x: 0,
                    y: 0,
                    width: width,
                    height: height,
                    radius: 12,
                    fill: '#fff',
                    stroke: '#37f',
                },
                // 在 G6 3.3 及之后的版本中，必须指定 name，可以是任意字符串，但需要在同一个自定义元素类型中保持唯一性
                name: 'route-shape',
                // 设置 draggable 以允许响应鼠标的图拽事件
                draggable: true,
            })

            group.addShape('text',{
                attrs: {
                    x: 12,
                    y: 22,
                    stroke: '#37f',
                    text:'+ 添加条件',
                    fontSize:12,
                    fontWeight:'100'
                },
                // 在 G6 3.3 及之后的版本中，必须指定 name，可以是任意字符串，但需要在同一个自定义元素类型中保持唯一性
                name: 'title-shape',
                // 设置 draggable 以允许响应鼠标的图拽事件
                draggable: true,
            })

            return keyShape;
        },
        getAnchorPoints() {
            return [
                [0.5, 0], //
                [0.5, 1], //
                // [0, 0.5], //
                // [1, 0.5], //
            ];
        },
    })
}