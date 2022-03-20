import { createApp } from 'vue';
import Dev from './serve.vue';
import { include } from '../src/main';

const app = createApp(Dev);
include(app)

app.mount('#app');
