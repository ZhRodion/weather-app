import { create } from 'zustand'

interface SearchState {
	weather: any
	setWeather: (data: any) => void
}

export const useSearch = create<SearchState>(set => ({
	weather: {},
	setWeather: (data: any) => set({ weather: data }),
}))
