<script>
	let { description, minTemperature, maxTemperature, time, day, iconName } = $props();

	const imgBaseUrl = 'https://openweathermap.org/img/wn/';
	const titlecase = (s) => s.replace(/\w\S*/g, (t) => t[0].toUpperCase() + t.slice(1).toLowerCase());
</script>

<div class="container">
	{#if iconName}
		<img class="icon" height="44" width="44" src={`${imgBaseUrl}${iconName}@2x.png`} alt="" />
	{/if}
	<div class="desc-container">
		<div class="time">{day}, {time}</div>
		<div class="description">{titlecase(description)}</div>
	</div>
	<div class="range">
		<span class="temperature max">{(maxTemperature - 273.15).toFixed(0)}&deg;</span>
		<span class="temperature min">{(minTemperature - 273.15).toFixed(0)}&deg;</span>
	</div>
</div>

<style>
	.container {
		display: flex;
		align-items: center;
		gap: 14px;
		padding: 12px 8px;
		border-radius: 12px;
		border-bottom: 1px solid #eef0f7;
		transition: background 0.15s ease;
	}

	.container:hover {
		background: #f5f7fc;
	}

	.icon {
		flex: 0 0 auto;
	}

	.desc-container {
		flex: 1;
		min-width: 0;
	}

	.time {
		font-size: 13px;
		font-weight: 700;
		color: #1171c5;
	}

	.description {
		font-size: 13px;
		color: #6b6464;
	}

	.range {
		display: flex;
		align-items: center;
		gap: 8px;
		flex: 0 0 auto;
	}

	.temperature {
		font-size: 16px;
		font-weight: 600;
	}

	.temperature.max {
		color: #1c2440;
	}

	.temperature.min {
		color: #9a9fb0;
	}
</style>
