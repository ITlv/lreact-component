import { Steps } from 'antd';
const { Step } = Steps;
const Stepss = (props: any) => {
  const {list,current = 1} = props;
  return (
    <>
      <Steps current={current}>
        {
          list.map((item: any,index: number) => {
            return <Step {...item} key={`${index}Step`}/>;
          })
        }
      </Steps>
    </>
  );
};
export default Stepss;