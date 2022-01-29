import { DatePicker} from 'antd';
const { RangePicker } = DatePicker;
import './index.less';
const DatePickers = (props: any) => {
  const {type = 'single'} = props;
  return (
    type === 'single' ? <DatePicker {...props} className="antd-components-dataPicker"/> : <RangePicker {...props} className="antd-components-dataPicker"/>
  );
};
export default DatePickers;