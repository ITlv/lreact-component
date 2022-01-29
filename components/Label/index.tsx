import './index.less';
const Label = (props: any) => {
  const {value = '实例'} = props;
  return (
    <div className="label-css"><span>{value}</span></div>
  );
};
export default Label;