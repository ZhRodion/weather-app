'use client'

import { useSearch } from '@/store/search'
import { FiCloud, FiCloudRain, FiSun } from 'react-icons/fi'

export default function WeatherVisual() {
	const { weather } = useSearch()
	console.log(weather)

	const weatherMain = weather.weather?.[0]?.main || ''
	const weatherTemp =
		weather.main?.temp != null ? Math.round(weather.main.temp) : '--'
	const weatherCity = weather.name || '--'

	const getWeatherIcon = (main: any) => {
		switch (main) {
			case 'Clear':
				return <FiSun color='white' size={60} />
			case 'Clouds':
				return <FiCloud color='white' size={60} />
			case 'Rain':
				return <FiCloudRain color='white' size={60} />
			default:
				return <FiCloud color='white' size={60} />
		}
	}

	return (
		<div className='z-[11] absolute top-1/4 left-1/2 -translate-x-1/2'>
			<div className='flex flex-col items-center gap-6'>
				<div className=''>
					<b className='text-[50px] text-white tracking-wider'>{weatherCity}</b>
				</div>
				<div className='flex gap-6 items-center'>
					{getWeatherIcon(weatherMain)}
					<span className='text-4xl text-white'>{weatherTemp} °C</span>
				</div>
			</div>
		</div>
	)
}
