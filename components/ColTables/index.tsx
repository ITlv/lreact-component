import './index.less';
import { useEffect,useState } from 'react';
import Row from '../Row';
import Col from '../Col';
import Tooltip from '../Tooltip';
const ColTables = (props: any) => {
  const {list = []} = props;
  const [showList,setShowList] = useState(list);
  useEffect(() => {
    let tem = [];
    for (let i = 0;i < 3 - list.length % 3;i++){
      tem.push({
        label:'',
        value:''
      });
    }
    const listO = list.concat(tem);
    setShowList(listO);
  }, [list]);
  return (
    <>
      <Row className='ant-component-colTables'>
        {
          showList.length && showList.map((item: any,index: number) => {
            return <Col span={8} key={`${index}showListItem`}>
              <Row>
                <Col span={6} className='label'><Tooltip title={item.label}>{item.label}</Tooltip></Col>
                <Col span={18} className='value'><Tooltip title={item.value}>{item.value}</Tooltip></Col>
              </Row>
            </Col>;
          })
        }

      </Row>
    </>
  );
};
export default ColTables;