<script>
	import Forecast from './Forecast.svelte';
	import ForecastDetail from './ForecastDetail.svelte';
	import { getForecastDayData, getDayDescription, getDay, getDayImage } from '$lib/forecastUtils';

	let { foreCastData, dayForecastData } = $props();

	let hourly = $derived(foreCastData ? foreCastData.list.slice(0, 4) : []);
	let fiveDay = $derived(foreCastData ? getForecastDayData(dayForecastData) : []);
</script>

{#if foreCastData}
	<div>
		<div class="header">Next Hours</div>
		<ul class="hourly-row">
			{#each hourly as hour (hour.dt)}
				<li class="forecast-container">
					<Forecast
						humidity={hour.main.humidity}
						temperature={hour.main.temp}
						time={hour.dt_txt.slice(5, 16)}
						iconName={hour.weather[0].icon}
					/>
				</li>
			{/each}
		</ul>

		<div class="header">Next 5 days</div>
		{#each fiveDay as day (day.date)}
			<div class="forecast-detail-container">
				<ForecastDetail
					description={getDayDescription(foreCastData, day.date)}
					minTemperature={day.min}
					maxTemperature={day.max}
					time={day.date}
					day={getDay(foreCastData, day.date)}
					iconName={getDayImage(foreCastData, day.date)}
				/>
			</div>
		{/each}
	</div>
{/if}

<style>
	.header {
		font-size: 15px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.6px;
		color: #4a4f68;
		border-bottom: 2px solid #eef0f7;
		padding-bottom: 8px;
		margin-bottom: 12px;
		margin-top: 24px;
	}

	.hourly-row {
		display: flex;
		gap: 10px;
		overflow-x: auto;
		padding: 4px 2px 8px;
		margin: 0;
		list-style: none;
	}

	.forecast-container {
		flex: 0 0 auto;
	}

	.forecast-detail-container {
		display: block;
	}
</style>
