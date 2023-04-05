'use client'

import { Autoplay, Navigation, Pagination } from 'swiper';

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  Container, DescriptionWrapper,
  PhotosWrapper, Swiper, SwiperSlide
} from "./styles";

const imagesPath = [
  "https://plus.unsplash.com/premium_photo-1676977395918-7300b6375e99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
  "https://media.istockphoto.com/id/1353392429/pt/foto/woman-taking-banana-from-fridge-drawer-full-of-fruits.jpg?s=1024x1024&w=is&k=20&c=X3QGvCEyOhgEWgdHaD49OseV20JaebUzIJUCk2C9rN8=",
  "https://images.unsplash.com/photo-1680399524821-d4e6b225b0ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1570654621852-9dd25b76b38d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1680159035588-64efc5d8456d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=712&q=80",
]

const Ad = () => {

  return (
    <Container>
      <PhotosWrapper>
        <Swiper
          autoplay
          spaceBetween={20}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          {imagesPath.map((imagePath) => {
            return (
              <SwiperSlide key={imagePath}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imagePath}
                  style={{ width: '100%' }}
                  alt="logo"
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </PhotosWrapper>
      <DescriptionWrapper>
        <h2 style={{ marginBottom: 8 }}> Lorem ipsum </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum maiores nam voluptas? Blanditiis nisi enim tempore aut, nobis itaque, dolore quidem aliquid est, quis ea ad ipsa voluptates. Quas, quos?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta reiciendis tempora doloribus alias quis incidunt dolorum voluptates odio, necessitatibus ea vel! Earum illo, eaque ratione laborum temporibus reiciendis nobis! Repellat.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nihil illum assumenda, repudiandae vel voluptatibus. Quia atque unde hic eius deserunt aut voluptate? Eaque quos magni ab eos illum quisquam.1
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repudiandae esse incidunt. Quod qui veritatis eum. Ipsam exercitationem obcaecati qui! Id perspiciatis voluptates dignissimos sit asperiores blanditiis dolorum possimus voluptatem!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione est quisquam laboriosam cum necessitatibus, repellendus sed illum dolorum iste. Alias libero ratione voluptatibus ex nihil deserunt soluta iure quo tempora.
        </p>
      </DescriptionWrapper>
    </Container>
  )
}

export default Ad
