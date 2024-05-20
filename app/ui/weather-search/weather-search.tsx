'use client'

import axios from 'axios'
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

export default function WeatherSearch() {
	const [city, setCity] = useState('')
	const [weather, setWeather] = useState({})
	const [error, setError] = useState('')

	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric`
	const regex = /^[a-zA-Z]+$/

	const fetchWeather = async (evt: any) => {
		evt.preventDefault()

		if (!regex.test(city)) {
			setError('Please enter a valid city name containing only letters.')
			return
		}

		setError('')

		try {
			const response = await axios.get(apiUrl)
			setWeather(response.data)
		} catch (error) {
			setError('Error fetching weather data. Please try again.')
		}

		setCity('')
	}

	console.log(weather)

	return (
		<div className='w-full max-w-[500px] h-[100px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[11] text-white flex flex-col gap-2'>
			<form
				className='w-full mx-auto py-3 px-2 flex items-center justify-between bg-transparent border border-grey-300 text-white rounded-2xl'
				onSubmit={fetchWeather}
			>
				<div className='flex flex-col gap-2'>
					<input
						className='w-full bg-transparent border-transparent text-white text-2xl focus:outline-none'
						type='text'
						placeholder='Search City'
						value={city}
						onChange={e => setCity(e.target.value)}
					/>
				</div>
				<button className='p-2' onClick={fetchWeather} type='button'>
					<BsSearch size={20} />
				</button>
			</form>
			{error && <p className='px-3 text-red-500'>{error}</p>}
		</div>
	)
}
