import { ComponentProps } from 'react';
import styled from 'styled-components';

type ImageProps = {
  src: string;
  text: string;
  height: number;
  showPlaceholder?: boolean;
} & ComponentProps<"img">

const Img = ({ src, text, height, showPlaceholder = true, ...props }: ImageProps) => {
  return (
    <StyledImage
      {...props}
      src={(showPlaceholder) ? '/placeholder.webp' : src}
      data-img={src}
      title={text}
      alt={`${text} Alt`}
      height={height}
      loading='eager'
    />
  )
}

export default Img;

const StyledImage = styled.img``;
