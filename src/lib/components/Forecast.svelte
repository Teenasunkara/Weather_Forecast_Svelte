<script>
	let { temperature, time, humidity, iconName } = $props();

	const imgBaseUrl = 'https://openweathermap.org/img/wn/';
</script>

<div class="container">
	<div class="time">{time}</div>
	{#if iconName}
		<img class="icon" height="50" width="50" src={`${imgBaseUrl}${iconName}@2x.png`} alt="" />
	{/if}
	<div class="temperature">{(temperature - 273.15).toFixed(0)}&deg;</div>
	<div class="humidity">
		<span class="material-icons">water_drop</span>
		{humidity}%
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4px;
		width: 96px;
		padding: 14px 10px;
		border-radius: 14px;
		background: #f5f7fc;
		border: 1px solid #eef0f7;
		transition:
			transform 0.15s ease,
			box-shadow 0.15s ease;
	}

	.container:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 18px rgba(15, 23, 62, 0.12);
	}

	.time {
		font-size: 12px;
		font-weight: 600;
		color: #6b6b7d;
		text-transform: uppercase;
	}

	.icon {
		margin: -4px 0;
	}

	.temperature {
		font-size: 20px;
		font-weight: 700;
		color: #1c2440;
	}

	.humidity {
		display: flex;
		align-items: center;
		gap: 2px;
		font-size: 12px;
		color: #1171c5;
	}

	.humidity .material-icons {
		font-size: 14px;
	}
</style>
