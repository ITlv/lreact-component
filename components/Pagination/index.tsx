import { Pagination } from 'antd';
import './index.less';
const Paginations = (props: any) => {
  const {total = 0} = props;
  return (
    <Pagination className='antd-component-pagination'
      {...props}
      total={total}
      showSizeChanger
      showQuickJumper
      showTotal={total => `共 ${total} 条`}
    />
  );
};
export default Paginations;