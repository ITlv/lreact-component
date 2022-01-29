import './index.less';
import { Table } from 'antd';
const Tables = (props: any) => {
  const { columns = [], dataSource = [] } = props;
  return <Table {...props} columns={columns} dataSource={dataSource} className='antd-component-table'/>;
};
export default Tables;