import { TimePicker } from 'antd';
import './index.less';
const TimePickers = (props: any) => {
  return (
    <TimePicker {...props} className='antdComponent-timePicker'/>
  );
};
export default TimePickers;