import Pagination from '../Pagination';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import './index.less';
const FormPage = (props: any) => {
  const {PaginationParams} = props;
  return (
    <PageContainer breadcrumbRender={false} header={{ title: '' }} className='antd-component-Forms'>
      <ProTable<any, any>
        {...props}
      />
      {Pagination && <div className='antd-pagination'><Pagination onShowSizeChange={PaginationParams.onShowSizeChange} onChange={PaginationParams.onChange} total={PaginationParams.total}/></div>}
    </PageContainer>

  );
};

export default FormPage;
