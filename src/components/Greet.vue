<script setup lang="ts">
	import { ref } from 'vue';
	import { DataService } from '../data/dataservice';
	const greetMsg = ref('');
	const name = ref('');
	async function greet() {
		const api = new DataService();
		await api.getArtists();
	}
</script>

<template>
	<form class="row" @submit.prevent="greet">
		<input id="greet-input" v-model="name" placeholder="Enter a name..." />
		<button type="submit">Abaalen</button>
	</form>

	<p>{{ greetMsg }}</p>
</template>
