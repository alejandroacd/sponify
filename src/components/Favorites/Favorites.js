import { useEffect } from "react"
import { useFavoritesContext  } from "../../FavoriteContext/favoritesContext"
import './Favorites.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import SwiperCore, {
    EffectCoverflow,
    Pagination,
    Navigation
  } from "swiper/core";
  
  SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const Favorites = () => {
    const { favorites, addOrRemoveFromStorage } = useFavoritesContext()


    return (
        <>
        <div className="favorites">
        <h1> Saved albums </h1>


        <Swiper
        
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={2}
        loop={true}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false
        }}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
      >

          {favorites.map((x,y) => {
              return( 
                  <SwiperSlide className="swip_slide" key={y}> 
                  
                  <>
                  <img src={x.image} /> 

                  <div className="mySwiper__info">
                  <h2> {x.title} </h2>
                  <p> {x.artist} </p>
                  </div>
                  </>
                  
                  </SwiperSlide>
              )
          })}

          </Swiper>
        </div>
        </>
    )
}

export default Favorites