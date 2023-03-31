import G6, {Graph} from '@antv/g6'
import {registerAddEdge} from './../register/addEdge'

export const useG6 = (containerId: string, emit) => {
    let graphInstance = null;//graph引用
    let idIndex = 0;//全局id变量

    //获取graph
    const getGraph = () => {
        if (graphInstance) {
            return graphInstance;
        }

        //插件
        const grid = new G6.Grid();//网格
        const toolbar = new G6.ToolBar({ //工具栏
            position: {
                x: 24,
                y: 10,
            }
        });

        //注册节点和边
        register();

        graphInstance = new Graph({
            container: containerId,
            defaultNode: { //默认节点
                type: 'rect',
                size: [200, 64],
                anchorPoints: [[0.5, 0], [0.5, 1]]
            },
            defaultEdge: { //默认边
                type: 'Button',
                style: {
                    endArrow: true,
                    stroke: 'red'
                }
            },
            modes: {
                default: ['scroll-canvas', 'drag-canvas', 'drag-node']
            },
            plugins: [grid, toolbar],
            layout: {
                type: 'dagre',
                rankdir: 'TB',
                nodesep: 40,
                ranksep: 31,
            }
        })
        graphInstance.on('node:click', e => {
            emit('nodeClick', e)
        })
        graphInstance.on('edge:click', e => {
            emit('edgeClick', e)
        })
        return graphInstance;
    }

    //注册
    const register = () => {
        registerAddEdge(G6)
    }

    //获取id
    const getId = (type) => {
        return `${type}-${idIndex++}`
    }

    //初始化节点
    const initNode = () => {
        return {
            id: getId('node'),
            type: 'rect'
        }
    }

    //初始化边
    const initEdge = (sourceId, targetId) => {
        return {id: getId('edge'), source: sourceId, target: targetId, type: 'Button'}
    }

    //初始化
    const initView = () => {
        const nodes = []

        const beginNode = initNode();
        const endNode = initNode();
        nodes.push(beginNode)
        nodes.push(endNode)

        const edge = initEdge(beginNode.id, endNode.id);
        const data = {
            nodes: nodes,
            edges: [edge],
        }
        const graph = getGraph();
        graph.data(data)
        graph.render()
        graph.layout();
    }

    const addNode = (type, node) => {
        if (type === 'route') {
            return addRoute(node)
        }
    }

    const addRoute = (node) => {

    }

    return {getGraph, initView, addNode}
}