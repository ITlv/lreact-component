import { Checkbox } from 'antd';
import {useState} from 'react';
import Margin from '../Margin';
const Checkboxs = (props: any) => {

  /**
changeValue外部取值方法 option为包含label value对象的数组
 */
  const {indeterminate = false ,defaultCheckedList = [] ,options = [],changeValue } = props;
  const plainOptions = options.map((item: any) => item.value);
  const CheckboxGroup = Checkbox.Group;
  const [checkAll, setCheckAll] = useState(false);
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  //   修改
  const onChange = (e: any) => {
    setCheckedList(e);
    setCheckAll(e.length === plainOptions.length);
    changeValue(e);
  };
  // 全选
  const onCheckAllChange = (e: any) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setCheckAll(e.target.checked);
    changeValue(e.target.checked ? plainOptions : []);
  };
  return (
    <>
      <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
            全选
      </Checkbox>
      <Margin value={'0 0 10px 0'} />
      <CheckboxGroup {...props} value={checkedList} onChange={onChange}/>
    </>
  );
};
export default Checkboxs;