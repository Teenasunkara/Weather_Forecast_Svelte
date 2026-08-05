export function getForecastDayData(dayForecastData) {
	if (!dayForecastData) return [];

	const data = dayForecastData.map((d) => ({
		dt: d.dt_txt.slice(5, 10),
		min: d.main.temp_min,
		max: d.main.temp_max
	}));

	const groupBy = (arr) =>
		arr.reduce((acc, ele) => ((acc[ele.dt] = acc[ele.dt] || []).push(ele), acc), {});

	const max = (arr) => Math.max(...arr.map((res) => res.max));
	const min = (arr) => Math.min(...arr.map((res) => res.min));

	const forecast = Object.entries(groupBy(data)).map(([key, val]) => ({
		date: key,
		min: min(val),
		max: max(val)
	}));

	return forecast.slice(1, 11);
}

function findDayEntry(foreCastData, day) {
	return foreCastData.list.find((f) => f.dt_txt.slice(5, 10) === day);
}

export function getDayDescription(foreCastData, day) {
	return findDayEntry(foreCastData, day)?.weather[0].description ?? '';
}

export function getDay(foreCastData, day) {
	const entry = findDayEntry(foreCastData, day);
	return entry ? new Date(entry.dt_txt).toString().slice(0, 3) : '';
}

export function getDayImage(foreCastData, day) {
	return findDayEntry(foreCastData, day)?.weather[0].icon ?? '';
}
