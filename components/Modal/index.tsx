import Button from '../Button';
import { Modal } from 'antd';
import { useState } from 'react';
import { divide } from 'lodash';
import './index.less';
const Modals = (props: any) => {
  console.log(334,props);
  const {visible,title = '提示',width = 680,children = null,close,onOk,footer = []} = props;
  const [loading,setLoading] = useState(false);
  const handleOk = () => {
    setLoading(true);
    onOk();
    setLoading(false);
  };
  const handleCancel = () => {
    setLoading(true);
    close();
    setLoading(false);
  };
  return (
    <Modal
      className='antd-component-modal'
      visible={visible}
      width={width}
      title={
        <div className='title'>{title}</div>
      }
      onOk={handleOk}
      onCancel={handleCancel}
      footer={footer}
    >
      {
        children
      }
    </Modal>
  );
};
export default Modals;