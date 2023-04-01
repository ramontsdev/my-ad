import '@splidejs/react-splide/css'

import { Splide } from '@splidejs/react-splide'
import { useEffect, useState } from "react"

import { AdCard } from "@/components/ad-card"
import { UserAvatar } from '@/components/user-avatar'
import { CarouselWrapper, Container, Footer, MainContent, NavBar, SplideSlide } from "./styles"

const allAds = [
  {
    id: 'yugh478',
    title: 'Anúncio 1',
    description: 'Descrição 1'
  },
  {
    id: 'uyb128',
    title: 'Anúncio 2',
    description: 'Descrição 3'
  },
  {
    id: 'poḱrjoip3',
    title: 'Anúncio 3',
    description: 'Descrição 3'
  },
  {
    id: 'opijdcsmkl9',
    title: 'Anúncio 4',
    description: 'Descrição 4'
  },
  {
    id: 'oikaerv98',
    title: 'Anúncio 5',
    description: 'Descrição 5'
  },
  {
    id: 'knjuiho349',
    title: 'Anúncio 6',
    description: 'Descrição 6'
  },
  {
    id: 'jnkbhjyug',
    title: 'Anúncio 7',
    description: 'Descrição 7'
  },
  {
    id: '90kopkc',
    title: 'Anúncio 8',
    description: 'Descrição 8'
  },
  {
    id: 'iuhnjkf',
    title: 'Anúncio 9',
    description: 'Descrição 9'
  },
  {
    id: 'mn,xcuia',
    title: 'Anúncio 10',
    description: 'Descrição 10'
  },
  {
    id: 'cxm,noiq8',
    title: 'Anúncio 11',
    description: 'Descrição 11'
  },
  {
    id: 'lkcopṕ43',
    title: 'Anúncio 12',
    description: 'Descrição 12'
  }
]

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
          {allAds.slice(0, 7).map((element, index) => (
            <SplideSlide key={index}>
              <AdCard description={element.description} />
            </SplideSlide>
          ))}
        </Splide>
      </CarouselWrapper>

      <MainContent>
        {allAds.map((element, index) => (
          <AdCard key={index} description={element.description} />
        ))}
      </MainContent>
      <Footer />
    </Container>
  )
}

export default HomePage
