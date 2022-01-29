import Button from '../Button';
import './index.less';
import Img from '../Img';
import React,{useEffect,useState} from 'react';
const erro403 = () => {
  const [width,setWidth] = useState(0);
  const [height,setHeight] = useState(0);
  useEffect(() => {
    setWidth(document.getElementsByClassName('ant-layout-content')[0].clientWidth);
    setHeight(document.getElementsByClassName('ant-layout-content')[0].clientHeight);
  },[]);
  return <div className='antd-component403' style={{width:width + 'px',height:height + 'px'}}>
    <Img image={require('./image/403.png')} width={438} height={268} />
    <div className='right-content'>
      <div className='number'>403</div>
      <div className='msg'>抱歉，你无权访问该页面</div>
      <Button type="primary">返回首页</Button>
    </div>
  </div>;
};
export default erro403;