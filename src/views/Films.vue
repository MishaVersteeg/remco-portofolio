<template>
  <div class="muziek">
    <header class="uk-text-center">
      <img class="uk-width-1-3" src="@assets/films/header.png" />
    </header>

    <div class="uk-container">
      <div
        class="uk-grid-collapse uk-grid uk-child-width-1-3@m uk-child-width-1-2@s"
        uk-grid
      >
        <div>
          <div
            class="uk-card uk-card-default uk-card-body card card-transparent"
          >
            <h3 class="uk-card-title">NACHTPORTIER</h3>
            <video id="myaudio" controls>
              <source src="@assets/films/nachtportier.mp4" type="audio/mpeg" />
            </video>
          </div>
        </div>

        <div class="uk-margin-remove-top">
          <div
            class="uk-card uk-card-default uk-card-body card card-transparent"
          >
            <h3 class="uk-card-title">VERVANG</h3>
            <video id="myaudio" controls>
              <source src="@assets/films/nachtportier.mp4" type="audio/mpeg" />
            </video>
          </div>
        </div>

        <div class="uk-margin-remove-top">
          <div
            class="uk-card uk-card-default uk-card-body card card-transparent"
          >
            <h3 class="uk-card-title">KAAIMAN</h3>
            <video id="myaudio" controls>
              <source src="@assets/films/kaaiman.mp4" type="audio/mpeg" />
            </video>
          </div>
        </div>

        <div class="uk-margin-remove-top">
          <div
            class="uk-card uk-card-default uk-card-body card card-transparent"
          >
            <h3 class="uk-card-title">VIDEO ESSAY</h3>
            <video id="myaudio" controls>
              <source src="@assets/films/essay.mp4" type="audio/mpeg" />
            </video>
          </div>
        </div>

        <div class="uk-margin-remove-top">
          <div
            class="uk-card uk-card-default uk-card-body card card-transparent"
          >
            <h3 class="uk-card-title">FOKS DE WEZEL</h3>
            <video id="myaudio" controls>
              <source src="@assets/films/foks.mp4" type="audio/mpeg" />
            </video>
          </div>
        </div>

        <div class="uk-margin-remove-top">
          <div
            class="uk-card uk-card-default uk-card-body card card-transparent"
          >
            <h3 class="uk-card-title">TERRA INCOGNITA</h3>
            <video id="myaudio" controls>
              <source
                src="@assets/films/terra-incognita.mp4"
                type="audio/mpeg"
              />
            </video>
          </div>
        </div>

        <div class="uk-margin-remove-top">
          <div
            class="uk-card uk-card-default uk-card-body card card-transparent"
          >
            <h3 class="uk-card-title">DE NANO TUINSTRAWORP</h3>
            <video id="myaudio" controls>
              <source src="@assets/films/tuinstra-worp.mp4" type="audio/mpeg" />
            </video>
          </div>
        </div>

        <div class="uk-margin-remove-top">
          <div
            class="uk-card uk-card-default uk-card-body card card-transparent"
          >
            <h3 class="uk-card-title">SKOLFER</h3>
            <video id="myaudio" controls>
              <source src="@assets/films/skolfer.mp4" type="audio/mpeg" />
            </video>
          </div>
        </div>

        <div class="uk-margin-remove-top">
          <div
            class="uk-card uk-card-default uk-card-body card card-transparent"
          >
            <h3 class="uk-card-title">LOOKS</h3>
            <video id="myaudio" controls>
              <source src="@assets/films/looks.mp4" type="audio/mpeg" />
            </video>
          </div>
        </div>

        <div class="uk-margin-remove-top">
          <div
            class="uk-card uk-card-default uk-card-body card card-transparent"
          >
            <h3 class="uk-card-title">DE DICTATOR</h3>
            <video id="myaudio" controls>
              <source src="@assets/films/dictator.mp4" type="audio/mpeg" />
            </video>
          </div>
        </div>

        <div class="uk-margin-large"></div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.muziek {
  background: #972929;
}

.card {
  background: rgb(132, 132, 219);
  * {
    color: rgb(226, 226, 226) !important;
  }
}

.card-transparent {
  background: transparent;
  box-shadow: none;
}
</style>
