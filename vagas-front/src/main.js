import { createApp } from 'vue'
import App from './App.vue'

//importar o pacote mitt
import mitt from 'mitt'


//criar a instância do pacote mitt
const emitter = mitt()

//iniciar a instância do vue com base no componente app
//createApp(App).mount('#app')

const app = createApp(App)

//configurar a instância do pacote mitt como sendo uma propriedade global
//essa propriedade global estará disponivel para todas as instâncias de componentes dentro do app
app.config.globalProperties.emitter = emitter

//associar a instância do Vue com o elemento HTML de id app
app.mount('#app')