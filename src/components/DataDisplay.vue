<script setup>
import { storeToRefs } from 'pinia'
import { useWeatherStore } from '../stores/weather'
import { ref } from 'vue'

// stores
const weatherStore = useWeatherStore()
const { getWeather } = storeToRefs(weatherStore)
const { getImage } = storeToRefs(weatherStore)
</script>

<template>
  <div class="container">
    <img :src="getImage" alt="Weather Icon" />
    <h1>{{ getWeather.main.temp }}°C</h1>
    <h3>Esztergom</h3>
    <div class="details">
      <div>
        <img src="./icons/humidity.svg" alt="humidity" id="humidity" />
        {{ getWeather.main.humidity }}%
      </div>
      <div>
        Feels Like <br id="mobile" />
        {{ getWeather.main.feels_like }}°C
      </div>
      <div style="justify-self: flex-end">
        <img src="./icons/wind.svg" alt="wind" id="wind" /> {{ getWeather.wind.speed }}MPH
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
}

h1 {
  color: rgba(255, 255, 255, 0.7);
  font-size: 96px;
  margin: 0px;
}

h3 {
  color: rgba(255, 255, 255, 0.7);
  font-size: 2rem;
  font-family: Inter;
  font-weight: 500;
  margin: 0px;
}

br#mobile {
  display: none;
}

.details {
  display: flex;
  justify-content: center;
  gap: 1rem;

  margin-top: 2rem;
  font-family: Inter;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.7);
  font-size: 32px;
}

.details > div {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
}

img {
  height: 10rem;
  margin-bottom: 1rem;
}

img#humidity {
  width: 30px;
}
img#wind {
  width: 50px;
}

@media (max-width: 775px) {
  .details {
    gap: 2rem;
    flex-direction: column;
  }
}
@media (max-width: 400px) {
  h1 {
    font-size: 55px;
  }
  h3 {
    font-size: 1.6rem;
  }
  .details {
    font-size: 1rem;
  }
  .details > div {
    flex-direction: column;
    gap: 0.3rem;
  }
  br#mobile {
    display: block;
  }
}
</style>
