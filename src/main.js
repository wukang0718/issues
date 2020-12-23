import { createApp, h } from 'vue'
import App from './App.vue'

import { ElButton } from 'element-plus'

const app = createApp(App)
app.component(ElButton.name, ElButton);

console.log(h(ElButton))

app.mount('#app')
