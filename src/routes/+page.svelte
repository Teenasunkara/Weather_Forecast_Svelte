<script>
	import { onMount } from 'svelte';
	import TabHeader from '$lib/components/TabHeader.svelte';
	import TabContent from '$lib/components/TabContent.svelte';
	import { getForecast } from '$lib/weatherForecast';

	let cities = $state(['dallas', 'atlanta', 'virginia']);
	let selectedCity = $state('');
	let foreCastData = $state(undefined);
	let dayForecastData = $state([]);

	async function onHeaderSelected(city) {
		selectedCity = city;
		const res = await getForecast(city);
		foreCastData = res;
		dayForecastData = res.list;
	}

	function setCity(event) {
		const value = event.target.value;
		if (!value) return;
		cities.push(value);
		onHeaderSelected(value);
	}

	onMount(() => {
		onHeaderSelected(cities[0]);
	});
</script>

<div class="page">
	<header class="header">
		<div class="brand">
			<span class="material-icons brand-icon">wb_sunny</span>
			<span>Weather Forecast</span>
		</div>
		<div class="search-wrap">
			<span class="material-icons search-icon">search</span>
			<input
				class="search"
				type="text"
				placeholder="Enter city name and press Enter"
				onkeyup={(e) => e.key === 'Enter' && setCity(e)}
			/>
		</div>
	</header>

	<ul class="cities">
		{#each cities as city (city)}
			<li class="city">
				<TabHeader displayName={city} selected={city === selectedCity} onSelect={onHeaderSelected} />
			</li>
		{/each}
	</ul>

	<main class="content">
		<TabContent {foreCastData} {dayForecastData} />
	</main>
</div>

<style>
	.page {
		max-width: 900px;
		margin: 0 auto;
		padding: 24px 16px 60px;
	}

	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 12px;
		padding: 18px 24px;
		border-radius: 18px;
		background: rgba(255, 255, 255, 0.12);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border: 1px solid rgba(255, 255, 255, 0.25);
		box-shadow: 0 8px 24px rgba(15, 23, 62, 0.25);
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 8px;
		color: #ffffff;
		font-size: 20px;
		font-weight: 600;
		letter-spacing: 0.2px;
	}

	.brand-icon {
		color: #ffd166;
	}

	.search-wrap {
		position: relative;
		display: flex;
		align-items: center;
		flex: 1;
		min-width: 220px;
		max-width: 340px;
	}

	.search-icon {
		position: absolute;
		left: 12px;
		color: #6b6464;
		font-size: 20px;
	}

	.search {
		width: 100%;
		padding: 10px 14px 10px 40px;
		border-radius: 999px;
		border: none;
		outline: none;
		font-size: 14px;
		background: rgba(255, 255, 255, 0.92);
		color: #1c2440;
		transition:
			box-shadow 0.2s ease,
			background 0.2s ease;
	}

	.search::placeholder {
		color: #8b90a3;
	}

	.search:focus {
		background: #ffffff;
		box-shadow: 0 0 0 3px rgba(255, 209, 102, 0.5);
	}

	.cities {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		padding: 0;
		margin: 20px 0 0;
		list-style: none;
	}

	.city {
		display: inline-block;
	}

	.content {
		margin-top: 16px;
		padding: 20px;
		border-radius: 18px;
		background: rgba(255, 255, 255, 0.94);
		box-shadow: 0 12px 32px rgba(15, 23, 62, 0.25);
	}
</style>
