<template>
  <MqResponsive target="lg">
      <div class="container">
        <div class="birthday">
          <h2>Happy Birthday, Ben!</h2>
          <span>
            From Emily, Sofi, Mima, and Paula
          </span>
        </div>
        <div class="video-player">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/uWrzDgh14cE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
  </MqResponsive>
</template>

<script>
import { MqResponsive } from "vue3-mq";

export default {
  name: 'TabBirthday',
  components: {
    MqResponsive
  }
}
</script>

<style scoped>
.container {
  background-image: radial-gradient(farthest-corner at 40px 40px,
      rgb(201, 59, 59) 0%, rgb(64, 5, 5) 100%);
  border-radius: .5em;
  /* border: .1em solid rgb(207, 33, 33); */
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.404));
  height: auto;
  width: 95vw;
  margin: -5.8vh auto 10vh;
}

.birthday {
  padding: 5em;
  text-align: center;
  color: white;
}

.birthday h2 {
  font-weight: 800;
  font-size: 2em;
}

.video-player {
  /* position: relative; */
  display: block;
  margin: -1vh auto;
}

.video-player iframe {
  /* position: absolute; */
  margin: 0 auto;
  width: 95vw;
  height: 60vh;
}

</style>