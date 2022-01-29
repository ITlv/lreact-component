import { Popconfirm } from 'antd';
export interface popConfrimProps {
    children: object,
    text: string,
    confirm: any
}
const PopconfirmF = (props: popConfrimProps) => {
  const { children,text,confirm} = props;
  return (
    <Popconfirm placement="topLeft" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
      {children}
    </Popconfirm>
  );
};
export default PopconfirmF;