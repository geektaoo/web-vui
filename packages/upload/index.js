import upload from './src/upload'

upload.install = Vue =>{
  Vue.component(upload.name,upload)
}

export default upload