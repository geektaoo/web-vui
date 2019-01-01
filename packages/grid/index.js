import Col from './src/col'
import Row from './src/row'

const Grid = {}

Grid.install = Vue =>{
  Vue.component(Col.name,Col)
  Vue.component(Row.name,Row)
}

export default Grid