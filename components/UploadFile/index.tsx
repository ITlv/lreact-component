import { Upload, Image, Spin , message} from 'antd';
import React, { useState, useEffect } from 'react';
import Progress from '../Progress';
import './index.less';
const MyUpload = (props: any) => {
  const { operationMethos,value = [] } = props;
  const [fileList, setFileList] = useState([]);
  const [cacalB,setCaval] = useState(false); //取消提交
  // acceptImageType  可接收的图片格式array ['png','rpg']
  // 默认值
  useEffect(() => {
    if (value && typeof(value) === 'object' && value.length > 0){
      setFileList(value);
    }
  },[value]);
  const all = {
    // 上传前校验
    beforeUpload:(e: any) => {
      if (props.acceptImageType && props.acceptImageType.indexOf(e.type) < 0) {
        message.error('请上传正确文件格式');
        setTimeout(() => {
          setFileList([]);
        });
        return false;
      }
    },
    showUploadList:false,
    action: '/store-web/common/upload',
    ...props
  };
  const handleChange = (info: any) => {
    let fileLists = [...info.fileList];
    // 取消提交逻辑
    if (cacalB){
      fileLists = fileLists.filter((item: any) => !item.status || (item.status === 'done'));
      setCaval(false);
    }
    setFileList(fileLists);
    fileLists = fileLists.map(file => {
      if (file.response) {
        file.url = file.response.url;
      }
      return file;
    });
    const numbers = fileLists.filter(item => {
      return item.response;
    }).length;
    operationMethos(fileLists);
  };
    // 删除
  const deleteImg = (index: number) => {
    const lists = [...fileList];
    lists.splice(index, 1);
    setFileList(lists);
    operationMethos(lists);
  };
  return (
    <div className='upload-css'>
      <Upload {...all} onChange={handleChange} fileList={fileList}>
        <div className='load-text'>上传</div>
      </Upload>
      <div className='lists'>
        {
          fileList.map((item: any, index: number) => {
            return (
              <div className='antd-components-all-file' key={`${index}myload`}>
                <div className={`fileList-css ${item.status && item.status !== 'done' ? 'pinkC' : null}`} key={`${index}fileList`}>
                  <div className='fileList-left'>
                    <Image preview={false} src={item.status && item.status !== 'done' ? require('./images/df.png') : require('./images/file.png')} width={64} height={64} alt="" />
                    <div className='name'>{item.name}</div>
                  </div>
                  <div className='fileList-right'><Image onClick={() => {
                    deleteImg(index);
                  }} preview={false} width={24} height={24} src={item.status && item.status !== 'done' ? require('./images/d.png') : require('./images/delete.png')} alt="" /></div>

                </div>
                {item.status && item.status !== 'done' && <div className='progress'>
                  <Progress value={item.status !== 'done' ? Math.round(item.percent) - 0.1 : Math.round(item.percent / 0.9)} strokeWidth={8} trailColor={''} strokeColor={'#1890ff'} />
                </div>}
                {
                  item.status && item.status !== 'done'
                  && <div className='cacal-comit' onClick={() => {
                    setCaval(true);
                  }}>取消提交</div>
                }
              </div>

            );
          })
        }
      </div>
    </div >
  );
};

export default MyUpload;
