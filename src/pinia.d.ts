import 'pinia';
import { DataService } from './data/dataservice';
declare module 'pinia' {
	export interface PiniaCustomProperties {
		api: DataService;
	}
}
