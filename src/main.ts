import { createApp } from 'vue';
import './styles.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import { DataService } from './data/dataservice';
import 'pinia';

// declare module 'pinia' {
// 	export interface PiniaCustomProperties {
// 		api: DataService;
// 	}
// }

const app = createApp(App);
const api = new DataService();
await api.getArtists();
const pinia = createPinia();
pinia.use(({ store }) => {
	store.api = api;
});
app.use(pinia);
app.mount('#app');
