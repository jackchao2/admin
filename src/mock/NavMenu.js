const menuList = [
    {
        title: '首页',
        key: '/main',
        name:'homeview',
        icon: 'el-icon-s-home'
    },
    {
        title: '表单',
        key: '/form',
        name:'formmuenview',
        icon: 'el-icon-film',
        children: [
            {
                title: '登录',
                key: '/form/login',
                name:'fromLogin'
                // icon:'el-icon-s-custom'
            },
            {
                title: '注册',
                name:'fromreg',
                key: '/form/reg',
                // icon:'el-icon-s-opportunity'
            }
        ]
    },
    {
        title: '表格',
        key: '/table',
        name:'tableview',
        icon: 'el-icon-receiving',
        children: [
            {
                title: '基础表格',
                name:'basicsTable',
                key: '/table/basic',
                // icon:'el-icon-date'
            },
            {
                title: '高级表格',
                name:'expertTable',
                key: '/table/high',
                // icon:'el-icon-document-copy'
            }
        ]
    },
    {
        title: '富文本',
        key: '/main/rich',
        name:'richtextview',
        icon:'el-icon-wallet'
    },
    {
        title: '城市管理',
        key: '/main/city',
        name:'cityview',
        icon: 'el-icon-office-building'
    },
    {
        title: '订单管理',
        key: '/order',
        name:'orderview',
        icon: 'el-icon-notebook-1',
        children: [
            {
                title: '订单详情',
                name:'orderdetails',
                key: 'detail',
                // icon:'el-icon-reading'
            },
            {
                title: '结束订单',
                name:'overorder',
                key: 'finish',
                // icon:'el-icon-data-line'
            }
        ]
    },
    {
        title: '车辆地图',
        key: '/main/bikeMap',
        name:'Vehiclemapview',
        icon:'el-icon-place'
    },
    {
        title: '权限设置',
        key: '/main/permission',
        name:'permissionview',
        icon:'el-icon-key'
    },
];
export default menuList;