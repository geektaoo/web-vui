import Slides from './src/slides'
import SlidesItem from './src/slides-item'

Slides.install = Vue => {
  Vue.component(Slides.name, Slides)
  Vue.component(SlidesItem.name, SlidesItem)
}

export default Slides