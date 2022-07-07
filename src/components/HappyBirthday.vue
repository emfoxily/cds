<template>
    <div class="container">
      <div class="birthday">
        <h2>Happy Birthday, Ben!</h2>
        <span>
          From Emily, Sofi, Mima, and Paula
        </span>
      </div>
      <div class="video-player">
        video here
      </div>
    </div>
</template>

<script>
export default {
  name: 'HappyBirthday'
}
</script>

<style scoped>
.container {
  background-image: radial-gradient(farthest-corner at 40px 40px,
      rgb(253, 91, 91) 0%, rgb(207, 33, 33) 100%);
  border-radius: .5em;
  border: .1em solid rgb(207, 33, 33);
  filter: drop-shadow(5px 5px 5px rgba(51, 51, 51, 0.404));
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
  background-color: black;
  width: 720px;
  height: 360px;
  margin: 0 auto;
}

@media only screen and (max-width: 415px) {

  .birthday h2 {
    font-size: 1.355em;
  }

  .container {
    margin: -20vh auto;
  }

  .video-player {
    width: 90%;
    height: 30%;
  }
}

@media only screen and (max-width: 1024px) {
  .container {
    height: 50vh;
    margin: 3vh auto!important;
  }

  .birthday h2 {
    margin-top: -1vh;
  }
}

</style>