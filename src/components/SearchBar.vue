<script setup>
import { ref } from 'vue'
import { useWeatherStore } from '../stores/weather'

// stores
const weatherStore = useWeatherStore()
const input = ref(null)

function handleSubmit() {
  weatherStore.getWeatherData(input.value)
  input.value = ''
}
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <form @submit.prevent="handleSubmit()">
        <label for="send">
          <img src="@/components/icons/searchIcon.svg" />
        </label>
        <input type="text" v-model="input" id="searchbar" placeholder="London..." />
        <input type="submit" value=" " name="send" id="send" />
      </form>
    </div>
  </div>
</template>
<style scoped>
div.wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
}

div.container {
  position: relative;
  width: 40rem;
  padding: 1rem;
}

input[type='text'] {
  border: none;
  outline: none;
  height: 3rem;
  width: 100%;
  border-radius: 6px;
  font-size: 1rem;
  background-color: #191a24;
  opacity: 40%;
  color: white;
  font-family: Inter;
  font-weight: 500;
  box-shadow: rgba(0, 0, 0, 0.3) 5px 5px 10px;
  transition: 0.2s;

  box-sizing: border-box;
  padding-left: 10px;
}
input[type='submit'] {
  display: none;
}

label {
  z-index: 10;
  position: absolute;
  right: 0;
  margin-right: 30px;
  margin-top: 12px;
}
label:hover {
  cursor: pointer;
}
</style>
