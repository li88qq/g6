export const cardData = {
    nodes: [
        {
            type: 'card',
            id: '001',
            title: '提交'
        },
        {
            type:'route',
            id: '0011',
        },
        {
            type: 'card',
            id: '003',
            title: '审批',
            color: '#f80',
        },
        {
            type: 'card',
            id: '006',
            title: '审批',
            color: '#f80',
        },
        {
            type: 'card',
            id: '002',
            title: '办理',
            color: '#935af6',
        },
        {
            type: 'card',
            id: '007',
            title: '审批',
            color: '#f80',
        },
        {
            type: 'card',
            id: '004',
            color: '#3370ff',
            title: '抄送',
        },
        {
            type: 'card',
            id: '005',
            title: '结束',
        },
    ],
    edges: [

        {id: 'line-001', source: '001', target: '0011'},
        {id: 'line-003', source: '0011', target: '003',type:'condition'},
        {id: 'line-004', source: '0011', target: '006',type:'condition'},
        {id: 'line-005', source: '003', target: '002'},
        {id: 'line-006', source: '006', target: '002'},
        {id: 'line-007', source: '002', target: '007'},
        {id: 'line-008', source: '007', target: '004'},
        {id: 'line-009', source: '004', target: '005'},
    ]
}