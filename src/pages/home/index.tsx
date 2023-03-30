import { MutableRefObject, useRef } from "react"
import { useDraggable } from "react-use-draggable-scroll"

import { AdCard } from "@/components/ad-card"
import { CarouselWrapper, Container, MainContent, NavBar } from "./styles"

const HomePage = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { events } = useDraggable(ref as MutableRefObject<HTMLElement>)

  return (
    <Container>
      <NavBar>
        <select className="select" name="estado">
          <option value=""></option>
          <option value="piaui">Piauí</option>
          <option value="maranhao">Maranhão</option>
        </select>

        <select className="select" name="cidade">
          <option value=""></option>
          <option value="piaui">Teresina</option>
          <option value="maranhao">Bom Jesus</option>
        </select>
      </NavBar>

      <CarouselWrapper ref={ref} {...events}>
        {['', '', '', '', ''].map((element, index) => (
          <AdCard key={index} />
        ))}
      </CarouselWrapper>

      <MainContent>
        {['', '', '', '', '', '', '', '', '', '', '', ''].map((element, index) => (
          <AdCard key={index} />
        ))}
      </MainContent>
    </Container>
  )
}

export default HomePage
