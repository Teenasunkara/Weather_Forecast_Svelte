import { json, error } from '@sveltejs/kit';
import { OPENWEATHER_API_KEY } from '$env/static/private';

export const GET = async ({ url, fetch }) => {
	const city = url.searchParams.get('city');
	if (!city) {
		error(400, 'Missing city query parameter');
	}

	const res = await fetch(
		`https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${OPENWEATHER_API_KEY}`
	);
	if (!res.ok) {
		error(res.status, `Failed to fetch forecast for ${city}`);
	}

	return json(await res.json());
};
