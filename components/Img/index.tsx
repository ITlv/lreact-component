import { Image } from 'antd';
export interface ImgProps {
    image: string;
    width: number,
    height: number,
    previewImg?: boolean;
    onClick?: Function;
    defaultImg?: any;
    className?: any;
    type?: 'others';
    noDefaultImg?: boolean;
    galleryImage?: [];
}

const Img = (props: ImgProps) => {
  const { image, width = 20, height = 20, previewImg = false } = props;
  return (
    <div>
      < Image src={image} width={width} height={height} preview={previewImg} />
    </div>
  );
};
export default Img;
