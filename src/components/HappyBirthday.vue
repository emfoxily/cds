<template>
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
  height: auto;
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
  /* background-color: black; */
  width: 75%;
  height: 40%;
  margin: -5vh auto;
}

.video-player iframe {
  /* position: absolute; */
  margin: 0 auto;
  width: 100%;
  height: 100%;
}

@media only screen and (min-width: 1921px) {
  .container {
    height: auto;
    margin: 3vh auto;
  }

  .birthday h2 {
    margin-top: -1vh;
  }
}

@media only screen and (min-width: 1367px) and (max-width: 1920px) {
  .container {
    height: 80vh;
    margin: 3vh auto;
  }

  .birthday h2 {
    margin-top: -1vh;
  }
}

@media only screen and (min-width: 1025px) and (max-width: 1366px) {
  .container {
    height: 90vh;
    margin: 3vh auto;
  }

  .video-player {
    width: 65%;
  }

  .birthday h2 {
    margin-top: -1vh;
  }
}

@media only screen and (max-width: 1024px) {
  .container {
    height: auto;
    margin: 3vh auto;
  }

  .birthday h2 {
    margin-top: -1vh;
  }
}

@media only screen and (max-width: 415px) {

  .birthday {
    /* margin-top: -10vh; */
  }

  .birthday h2 {
    font-size: 1.355em;
  }

  .container {
    margin: -20vh auto;
    width: 100vw!important;
  }

  .video-player {
    width: 100%;
  }
}

</style>