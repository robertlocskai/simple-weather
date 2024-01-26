import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import axios from 'axios'

export const useWeatherStore = defineStore('weather', () => {
  const API_URI = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
  // state
  let weather = ref({})
  const getWeather = computed(() => weather.value)

  // actions
  getWeatherData('Esztergom')

  async function getWeatherData(town) {
    try {
      const fetchWeather = await axios.get(
        `${API_URI}${town}+&appid=${import.meta.env.VITE_API_KEY}`
      )

      if (!fetchWeather) throw new Error("Couldn't fetch data from this place...")

      weather.value = fetchWeather.data
      console.log(weather)
    } catch (err) {
      console.log(err)
    }
  }

  // return
  return { getWeatherData, weather, getWeather }
})
