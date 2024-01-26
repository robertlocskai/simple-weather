import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import axios from 'axios'

import clear_sky from '@/components/icons/clear_sky.svg'
import rain from '@/components/icons/rain.svg'
import scattered_clouds from '@/components/icons/scattered_clouds.svg'
import thunderstorm from '@/components/icons/thunderstorm.svg'
import snow from '@/components/icons/snow.svg'

export const useWeatherStore = defineStore('weather', () => {
  const API_URI = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
  // state
  const weather = ref({})
  const current = ref({ weather: clear_sky })
  const getWeather = computed(() => weather.value)
  const getImage = computed(() => current.value.weather)

  // actions
  getWeatherData('Esztergom')

  async function getWeatherData(town) {
    try {
      const fetchWeather = await axios.get(
        `${API_URI}${town}+&appid=${import.meta.env.VITE_API_KEY}`
      )

      if (!fetchWeather) throw new Error("Couldn't fetch data from this place...")

      weather.value = fetchWeather.data
      let weatherType = weather.value.weather[0].main
      if (weatherType == 'Clouds') {
        current.value.weather = scattered_clouds
      } else if (weatherType == 'Clear') {
        current.value.weather = clear_sky
      } else if (weatherType == 'Snow') {
        current.value.weather = snow
      } else if (weatherType == 'Rain') {
        current.value.weather = rain
      } else if (weatherType == 'Thunderstorm') {
        current.value.weather = thunderstorm
      }
    } catch (err) {
      console.log(err)
    }
  }

  // return
  return { getWeatherData, weather, getWeather, getImage }
})
