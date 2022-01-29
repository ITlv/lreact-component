# 制作的基于antd组件库
## 关于使用
在react项目中 安装依赖
cnpm i lreact-component
<!-- npm install lreact-component -->
<!-- npm install -->
<!-- yarn -->

## 组件中引用
import { Space, Button} from lreact-component';


<Space>
    <Button type="primary">新增</Button>
    <Button type="primary" disabled>新增</Button>
    <Button type="link" >新增</Button>
    <Button type="link" style={{fontSize:'20px'}}>新增</Button>
</Space>

## 组件介绍
基于antd的组件库  配置和antd一致
Alert
...
DatePicker   ---日期参数single 单个   其余多个选框 
Img   图片


基于antdPro 的组件库  配置和antdPro一致
FormPage


Error403   403页面
Label     标题组件 参数value为标题值
Margin   为偏移组件设置偏移值 margin



export { default as Row } from './Row';
export { default as Col } from './Col';
export { default as Img } from './Img';
export {default as Tabs} from './Tabs';
export {default as UploadFile} from './UploadFile'; //上传文件
export {default as UploadImg } from './UploadImg'; //UploadImg   上传图片
export {default as Label} from './Label'; //标签文本
export {default as Radio} from './Radio'; //radio
export {default as Margin} from './Margin'; //Margin
export {default as Select} from './Select'; //Select
export {default as Checkbox} from './Checkbox'; //Checkbox
export {default as Input} from './Input'; //Input
export {default as Space} from './Space'; //Space
export {default as Cascader} from './Cascader'; //Cascader   级联
export {default as TimePicker } from './TimePicker'; //TimePicker  时间选择
export {default as DatePicker } from './DatePicker'; //DatePicker   日历选择
export {default as Button } from './Button'; //Button   按钮
export {default as Divider } from './Divider'; //Divider   分割线
export {default as Table } from './Table'; //Table   表格
export {default as Pagination } from './Pagination'; //Table   分页
export {default as ColTables } from './ColTables'; //ColTables   另类表格
export {default as Tooltip } from './Tooltip'; //Tooltip   提示
export {default as Modal } from './Modal'; //Modal   弹窗
export {default as Error403 } from './Error/403'; //403   报错
export {default as BackTop } from './BackTop'; //BackTop    回到顶部
export {default as Alert } from './Alert'; //Alert    提示
export {default as Steps } from './Steps'; //Steps    步骤条
export {default as FormPage } from './FormPage'; //FormPage    表单页
export {default as Progress } from './Progress'; //FormPage    进度条

