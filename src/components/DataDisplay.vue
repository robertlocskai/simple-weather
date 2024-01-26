<template>
  <div class="container">
    <h1>20°C</h1>
    <h3>Esztergom</h3>
    <div class="details">
      <div><img src="./icons/humidity.svg" alt="humidity" /> 85%</div>
      <div>
        Feels Like <br />
        11°C
      </div>
      <div><img src="./icons/wind.svg" alt="humidity" /> 6.17MPH</div>
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

.details {
  width: 45rem;
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
</style>
