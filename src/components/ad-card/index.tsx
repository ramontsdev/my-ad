import { BackgroundBase, DescriptionWrapper, ImageWrapper, Wrapper } from "./styles";

type Props = {
  description?: string;
}

export const AdCard = ({ description }: Props) => {
  return (
    <Wrapper className="card-item">
      <BackgroundBase />

      <ImageWrapper>
      </ImageWrapper>

      <DescriptionWrapper>
        {description}
      </DescriptionWrapper>
    </Wrapper>
  )
}
