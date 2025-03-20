import { createMicroApp } from "@mspbots/toolbox"
import App from './App.vue'

createMicroApp(App, {
  namespace: __APP_NAME__
})

