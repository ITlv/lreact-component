import { Upload } from 'antd';
import React, { useState, useEffect } from 'react';
import Image from '../Img';
import './index.less';
import Modal from '../Modal';
const UploadImg = (props: any) => {
  const { operationMethos,listType = 'picture-card',defaultList = []} = props;
  const [fileList, setFileList] = useState([]);
  const [previewImage,setPreviewImage] = useState('');
  const [previewVisible,setPreviewVisible] = useState(false);
  useEffect(() => {
    setFileList(defaultList);
  },[defaultList]);
  const handleChange = (info: any) => {
    console.log(232,info);
    let fileList = [...info.fileList];
    setFileList(fileList);
    fileList = fileList.map(file => {
      if (file.response) {
        file.url = file.response.url;
      }
      return file;
    });
    const numbers = fileList.filter(item => {
      return item.response;
    }).length;
    operationMethos(fileList);
  };
  // base64
  const getBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };
  // 预览
  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewVisible(true);
    setPreviewImage(file.url || file.preview);
  };
  return (
    <>
      <Upload {...props} onPreview={handlePreview} fileList={fileList} onChange={handleChange} listType={listType} className='antd-component-uploadImg'>
        <div className='uploads'>
          <Image image={require('../public/trangle.png')} width={18} height={18} />
          <div className='texts'>上传图片</div>
        </div>
      </Upload>
      <Modal
        visible={previewVisible}
        footer={null}
        title="查看图片"
        close={() => {
          setPreviewVisible(false);
        }}
      >
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  );
};
export default UploadImg;