import React from 'react'
import {render} from 'react-dom'
import ReactDemo from '../src/index.jsx'    //引入组件

const App = () => {
    return <ReactDemo/>
    // return <div>1111111111111</div>
};
render(<App/>, document.getElementById('root'));   //获取虚拟dom的挂载节点