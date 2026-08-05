export async function getForecast(city) {
	const res = await fetch(`/api/forecast?city=${encodeURIComponent(city)}`);
	if (!res.ok) {
		throw new Error(`Failed to fetch forecast for ${city}`);
	}
	return res.json();
}
