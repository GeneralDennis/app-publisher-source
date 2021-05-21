import './expertise.sass'
import 'swiper/swiper-bundle.css'
import Swiper from 'swiper/swiper-bundle'



class ExpertiseSlider {
  constructor($root) {
    this.slider = new Swiper('.expertise-swiper-container', {
      speed: 1000,
      spaceBetween: 30,
      slidesPerView: 2.5,
      // autoplay: {
      //   delay: 3000
      // },
      // loop: true,
      // loopedSlides: $root.find('.projects-swiper-slide').length,
    })
  }
}

export default ExpertiseSlider
