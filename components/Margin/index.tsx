const Margin = (props: any) => {
  const {value = 0} = props;
  return (
    <div style={{margin:value}} />
  );
};
export default Margin;