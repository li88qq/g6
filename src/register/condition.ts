/**
 * button
 * @param G6
 */
export const registerCondition = (G6) => {
    G6.registerEdge('condition', {
        afterDraw: (cfg, group) => {
            console.log(cfg)
            console.log(group)
            // get the first shape in the graphics group of this edge, it is the path of the edge here
            // 获取图形组中的第一个图形，在这里就是边的路径图形
            const shape = group.get('children')[0];
            // get the coordinate of the mid point on the path
            // 获取路径图形的中点坐标
            const width = 200;
            const height = 40;
            const cardPoint = shape.getPoint(0.5);

            group.addShape('rect', {
                attrs: {
                    x: cardPoint.x - width/2,
                    y: cardPoint.y + height/2,
                    width: width,
                    height: height,
                    radius: 8,
                    fill: '#fff'
                },
                // 在 G6 3.3 及之后的版本中，必须指定 name，可以是任意字符串，但需要在同一个自定义元素类型中保持唯一性
                name: 'card-shape',
                // 设置 draggable 以允许响应鼠标的图拽事件
                draggable: true,
            })
            group.addShape('rect', {
                attrs: {
                    x: cardPoint.x - width / 2 + 4,
                    y: cardPoint.y + height / 2 + 24,
                    width: width - 8,
                    height: 60,
                    radius: 6,
                },
                // 在 G6 3.3 及之后的版本中，必须指定 name，可以是任意字符串，但需要在同一个自定义元素类型中保持唯一性
                name: 'header-shape',
                // 设置 draggable 以允许响应鼠标的图拽事件
                draggable: true,
            })

            group.addShape('text', {
                attrs: {
                    x: cardPoint.x-width/2 + 12,
                    y: cardPoint.y+height/2 + 20,
                    stroke: '#2eb795',
                    text: '条件1',
                    fontSize: 12,
                    fontWeight: '100'
                },
                // 在 G6 3.3 及之后的版本中，必须指定 name，可以是任意字符串，但需要在同一个自定义元素类型中保持唯一性
                name: 'title-shape',
                // 设置 draggable 以允许响应鼠标的图拽事件
                draggable: true,
            })

            const midPoint = shape.getPoint(0.85);

            // add a rect on the mid point of the path. note that the origin of a rect shape is on its lefttop
            // 在中点增加一个矩形，注意矩形的原点在其左上角
            group.addShape('circle', {
                attrs: {
                    r: 15,
                    fill: '#fff',
                    // x and y should be minus width / 2 and height / 2 respectively to translate the center of the rect to the midPoint
                    // x 和 y 分别减去 width / 2 与 height / 2，使矩形中心在 midPoint 上
                    x: midPoint.x,
                    y: midPoint.y,
                },
            });
            group.addShape('text', {
                attrs: {
                    stroke: '#37f',
                    // x and y should be minus width / 2 and height / 2 respectively to translate the center of the rect to the midPoint
                    // x 和 y 分别减去 width / 2 与 height / 2，使矩形中心在 midPoint 上
                    x: midPoint.x - 6,
                    y: midPoint.y + 10,
                    text: '+',
                    fontSize: 16,
                },
            });
        },
        getAnchorPoints() {
            return [
                [0.5, 0], //
                [0.5, 1], //
            ];
        },
        update: undefined,
    }, 'polyline')
}