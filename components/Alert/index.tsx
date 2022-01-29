import { Alert } from 'antd';
import './index.less';
const Alerts = (props: any) => {
  return (
    <Alert {...props} className='antd-component-alert'/>
  );
};
export default Alerts;