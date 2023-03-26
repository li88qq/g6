/**
 * card
 * @param G6
 */
export const registerCard = (G6) => {
    G6.registerNode('card', {
        draw: (cfg, group) => {
            const width = 200;
            const height = 88;
            const color = cfg.color || '#a9b4cd'
            const title = cfg.title || '节点'
            const keyShape = group.addShape('rect', {
                attrs: {
                    x: 0,
                    y: 0,
                    width: width,
                    height: height,
                    radius: 8,
                    fill: color
                },
                // 在 G6 3.3 及之后的版本中，必须指定 name，可以是任意字符串，但需要在同一个自定义元素类型中保持唯一性
                name: 'card-shape',
                // 设置 draggable 以允许响应鼠标的图拽事件
                draggable: true,
            })
            group.addShape('rect',{
                attrs: {
                    x: 4,
                    y: 24,
                    width: width-8,
                    height: 60,
                    radius: 6,
                    fill: '#fff'
                },
                // 在 G6 3.3 及之后的版本中，必须指定 name，可以是任意字符串，但需要在同一个自定义元素类型中保持唯一性
                name: 'header-shape',
                // 设置 draggable 以允许响应鼠标的图拽事件
                draggable: true,
            })

            group.addShape('text',{
                attrs: {
                    x: 12,
                    y: 20,
                    stroke: '#fff',
                    text:title,
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
            ];
        },

    })

}