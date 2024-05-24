import WeatherSearch from '@/weather-search/weather-search'
import WeatherVisual from '@/weather-visual/weather-visual'
import Image from 'next/image'

export default function Weather() {
	return (
		<section className='weather relative'>
			<div className='relative w-full h-[100vh] px-4 box-border'>
				<Image
					className='object-cover'
					src='/images/weather/cloud.jpg'
					fill={true}
					alt='Weather image'
				/>
				<div className='absolute top-0 left-0 w-full h-full bg-black/40 z-10'></div>
				<div className='w-full max-w-[500px] z-[11] absolute top-1/4 left-1/2 -translate-x-1/2 flex flex-col gap-12'>
					<WeatherVisual />
					<WeatherSearch />
				</div>
			</div>
		</section>
	)
}
