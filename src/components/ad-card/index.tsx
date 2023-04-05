import { BackgroundBase, DescriptionWrapper, ImageWrapper, Wrapper } from "./styles";

type Props = {
  description?: string;
  onClick?: () => void
}

export const AdCard = ({ description, onClick }: Props) => {

  return (
    <Wrapper onClick={onClick}>
      <BackgroundBase />

      <ImageWrapper>
      </ImageWrapper>

      <DescriptionWrapper>
        {description}
      </DescriptionWrapper>
    </Wrapper>
  )
}
