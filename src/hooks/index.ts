import G6 from '@antv/g6'
import type {Graph} from '@antv/g6'
import {registerCard} from './../register/card'
import {registerButton} from './../register/button'
import {registerRoute} from './../register/route'
import {registerCondition} from './../register/condition'

export const useG6 = (containerId: string) => {
    let graphEl = null;

    const getGraph = (): Graph => {
        if (graphEl) {
            return graphEl;
        }
        graphEl = new G6.Graph({
            container: containerId,
            modes: {
                default: [
                    'drag-node',
                    'drag-canvas'
                ],
            },
            layout: {
                // Object，可选，布局的方法及其配置项，默认为 random 布局。
                type: 'dagre',
                preventOverlap: true,
                nodesep:70,
                ranksep:50,
            },
            defaultEdge: {
                type: 'button',
                // ...                 // 边的其他配置
                // 边样式配置
                style: {
                    opacity: 0.6, // 边透明度
                    stroke: 'grey', // 边描边颜色
                    endArrow: true,
                },
                // 边上的标签文本配置
                labelCfg: {
                    autoRotate: true, // 边上的标签文本根据边的方向旋转
                },
            }
        })
        if (typeof window !== 'undefined')
            window.onresize = () => {
                if (!graphEl || graphEl.get('destroyed')) return;
                const container = document.getElementById(containerId);
                if (!container) return;
                graphEl.changeSize(container.scrollWidth, container.scrollHeight - 30);
            };
        return graphEl;
    }

    const register = () => {
        registerCard(G6)
        registerButton(G6)
        registerRoute(G6)
        registerCondition(G6)
    }

    return {
        register,
        getGraph,
    }
}