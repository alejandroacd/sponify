import { useFavoritesContext } from "../../FavoriteContext/favoritesContext"
import './Favorites.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { BiBlock } from 'react-icons/bi'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import SwiperCore, {
    EffectCoverflow,
    Pagination,
    Navigation,
    Autoplay
  } from "swiper/core";
  
  SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);

const Favorites = () => {
    const { addOrRemoveFromFavorites, favorites } = useFavoritesContext()

    return (
        <>
        
      {favorites.length === 0 && 
      <div className="title_search">
        
         <h1>
          You don't have any favorite music at the moment :(
         </h1>
        </div>


        }


        {favorites.length !== 0 && 
        <div className="favorites">
        <h1> Saved albums </h1>


        <Swiper
        
        grabCursor={true}
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={2}
        loop={true}
        spaceBetween={50}
        coverflowEffect={{
          rotate: 100,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows:false
        }}
        autoplay={{delay: 3000, disableOnInteraction: false}}
        pagination={{
            clickable: true
        }}
        
        className="mySwiper"
      >

          {favorites.map((x,y) => {
              return(   
                <>
                  <SwiperSlide className="swip_slide" key={y + 1}>
                  <img src={x.image} /> 

                  <div className="mySwiper__info">
                  <h2> {x.title.substring(0,20)}... </h2>
                  <p> {x.artist.substring(0,50)}...</p>
                  <p> {x.releaseDate } </p>
                  <BiBlock onClick={() =>addOrRemoveFromFavorites(x)} size={30} />
                  </div>
                  

                  
                  </SwiperSlide>
                  <div className="swipper-pagination" ></div>
                  </>
              )
             
          })}

          </Swiper>
        </div>
        
        }



        
        </>
    )
}

export default Favorites