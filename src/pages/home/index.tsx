import '@splidejs/react-splide/css'

import { Splide } from '@splidejs/react-splide'
import { useEffect, useState } from "react"

import { AdCard } from "@/components/ad-card"
import { UserAvatar } from '@/components/user-avatar'
import { CarouselWrapper, Container, MainContent, NavBar, SplideSlide } from "./styles"

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (screen.width < 640 || screen.height < 480) {
      setIsMobile(true)
    }
  }, [])

  return (
    <Container>
      <NavBar>
        <UserAvatar />

        <div>
          <select className="select" name="estado">
            <option value="">Estado</option>
            <option value="piaui">Piauí</option>
            <option value="maranhao">Maranhão</option>
          </select>

          <select className="select" name="cidade">
            <option value="">Cidade</option>
            <option value="teresina">Teresina</option>
            <option value="bom_jesus">Bom Jesus</option>
          </select>
        </div>
      </NavBar>

      <CarouselWrapper>
        <Splide
          options={{
            perPage: isMobile ? 1 : 3,
            width: '100%',
            pagination: true,
            autoplay: true,
            rewind: true
          }}
        >
          {['1', '2', '3', '4', '5', '6', '7'].map((element, index) => (
            <SplideSlide key={index}>
              <AdCard description={element} />
            </SplideSlide>
          ))}
        </Splide>
      </CarouselWrapper>

      <MainContent>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'].map((element, index) => (
          <AdCard key={index} description={element} />
        ))}
      </MainContent>
    </Container>
  )
}

export default HomePage
