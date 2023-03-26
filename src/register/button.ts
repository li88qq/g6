/**
 * button
 * @param G6
 */
export const registerButton = (G6) => {
    G6.registerEdge('button', {
        afterDraw: (cfg, group) => {
            // get the first shape in the graphics group of this edge, it is the path of the edge here
            // 获取图形组中的第一个图形，在这里就是边的路径图形
            const shape = group.get('children')[0];
            // get the coordinate of the mid point on the path
            // 获取路径图形的中点坐标
            const midPoint = shape.getPoint(0.5);

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
        update: undefined,
    }, 'polyline')
}