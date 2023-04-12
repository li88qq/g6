import G6, {Graph,Edge} from '@antv/g6'
import {registerAddEdge} from './../register/addEdge'
import {registerRoute} from './../register/routeNode'

export const useG6 = (containerId: string, emit) => {
    let graphInstance = null;//graph引用
    let idIndex = 0;//全局id变量

    //获取graph
    const getGraph = ():Graph => {
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
        registerRoute(G6);
    }

    //获取id
    const getId = (type) => {
        return `${type}-${idIndex++}`
    }

    //初始化节点
    const initNode = () => {
        const id = getId('node');
        return {
            id: id,
            type: 'rect',
            label: id,
        }
    }

    //初始化节点
    const initRoute = () => {
        const id = getId('route');
        return {
            id: id,
            type: 'Route',
            label: id,
        }
    }

    //初始化边
    const initEdge = (sourceId, targetId) => {
        const id = `edge-${sourceId}-${targetId}`
        return {id: id, source: sourceId, target: targetId, type: 'Button'}
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

    const addNode = (edge:Edge,type:string) => {
        if (type === 'route') {
            return addRoute(edge)
        }
        //新增节点
        const node = initNode();

        const graph = getGraph();
        graph.addItem('node',node);

        //添加边
        const source = edge.getSource();
        const target = edge.getTarget();
        const edge_source_node = initEdge(source.getID(),node.id);
        const edge_node_target = initEdge(node.id,target.getID());
        graph.addItem('edge',edge_source_node);
        graph.addItem('edge',edge_node_target);
        graph.remove(edge);
        graph.layout();
    }

    //添加路由
    const addRoute = (edge:Edge) => {
        //路由节点
        const route = initRoute();
        //2个节点
        const node = initNode();
        const defaultNode = initNode();

        const graph = getGraph();
        graph.addItem('node',route);
        graph.addItem('node',node);
        graph.addItem('node',defaultNode);


        //添加边
        const source = edge.getSource();
        const target = edge.getTarget();

        const edge_source_route = initEdge(source.getID(),route.id);
        const edge_route_node = initEdge(route.id,node.id);
        const edge_route_defaultNode = initEdge(route.id,defaultNode.id);
        const edge_node_target = initEdge(node.id,target.getID());
        const edge_defaultNode_target = initEdge(defaultNode.id,target.getID());
        graph.addItem('edge',edge_source_route);
        graph.addItem('edge',edge_route_node);
        graph.addItem('edge',edge_route_defaultNode);
        graph.addItem('edge',edge_node_target);
        graph.addItem('edge',edge_defaultNode_target);
        graph.remove(edge);
        graph.layout();
    }

    return {getGraph, initView, addNode}
}