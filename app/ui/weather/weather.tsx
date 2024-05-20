import WeatherSearch from '@/weather-search/weather-search'
import Image from 'next/image'

export default function Weather() {
	return (
		<section className='weather relative'>
			<div className='relative w-full h-[100vh]'>
				<Image
					className='object-cover'
					src='/images/weather/cloud.jpg'
					fill={true}
					alt='Weather image'
				/>
				<div className='absolute top-0 left-0 w-full h-full bg-black/40 z-10'></div>
			</div>
			<WeatherSearch />
		</section>
	)
}
