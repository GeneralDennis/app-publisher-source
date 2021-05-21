import './projects.sass'
import 'swiper/swiper-bundle.css'
import Swiper from 'swiper/swiper-bundle'

class ProjectsSlider {
  constructor($root) {
    this.slider = new Swiper('.projects-swiper-container', {
      speed: 1000,
      spaceBetween: 30,
      slidesPerView: 3.5,
      // autoplay: {
      //   delay: 3000
      // },
      // loop: true,
      // loopedSlides: $root.find('.projects-swiper-slide').length,
    })
  }
}

export default ProjectsSlider
