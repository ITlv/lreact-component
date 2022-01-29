import './index.less';
import { Select } from 'antd';
// const { Option } = Select;
const Selects = (props: any) => {
  return (
    <Select className='antdComponent-select'
      {...props}
    >
      {props.children}
    </Select>
  );
};
export default Selects;