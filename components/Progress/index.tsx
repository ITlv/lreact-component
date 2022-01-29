import { Progress } from 'antd';
import './index.less';
export interface progressProps {
    value: number,
    type?: any,
    strokeWidth?: number,
    showInfo?: boolean, //展示进度条信息
    trailColor?: string,
    strokeColor?: string,
    title?: string, //自定义的样式 showInfo为false 原有样式关闭显示
}
const ProgressLine = (props: progressProps) => {
  const { value = 0 ,type = 'line',strokeWidth = 10,showInfo = true,trailColor,strokeColor = '#1890ff',title = ''} = props;
  return (
    <div className="progress-css">
      <Progress percent={value} type={type} strokeWidth={strokeWidth} showInfo={showInfo} trailColor={trailColor} strokeColor={strokeColor}/>
      {
        !showInfo && <div className="showTip" style={{left:`${value - 5}%`,background:strokeColor}}>
          <span>{title}</span>
          <div className="trangle-pro" style={{left:(value / 100 + 12),'borderColor':strokeColor}} />
        </div>
      }
    </div>
  );
};
export default ProgressLine;
