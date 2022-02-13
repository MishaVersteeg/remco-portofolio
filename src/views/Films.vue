<template>
  <div class="films">
    <div class="films-1">
      <header>
        <div>
          <img
            @click="$router.go(-1)"
            src="@assets/back.png"
            class="back-button"
          />
          <img src="@assets/films/header.png" />
        </div>
      </header>

      <div class="uk-container">
        <div
          class="uk-grid-collapse uk-child-width-1-2@l uk-child-width-1-2@s"
          uk-grid
        >
          <div class="uk-align-center uk-width-1-1">
            <img
              class="uk-margin-bottom item-header"
              src="@assets/films/showreel-header.svg"
            />

            <iframe
              style="aspect-ratio: 1.78"
              class="uk-width-1-1 uk-height-auto"
              src="https://www.youtube.com/embed/r4x2neU120E"
            >
            </iframe>
          </div>

          <div class="uk-margin-remove-top">
            <div
              class="uk-card uk-card-default uk-card-body card card-transparent"
            >
              <img
                class="uk-margin-bottom item-header"
                src="@assets/films/kaaiman-header.svg"
              />
              <iframe
                style="aspect-ratio: 1.78"
                class="uk-width-1-1 uk-height-auto"
                src="https://www.youtube.com/embed/yKpTuu00gbg"
              >
              </iframe>
            </div>
          </div>

          <div class="uk-margin-remove-top">
            <div
              class="uk-card uk-card-default uk-card-body card card-transparent"
            >
              <img
                class="uk-margin-bottom item-header"
                src="@assets/films/essay-header.svg"
              />
              <iframe
                style="aspect-ratio: 1.78"
                class="uk-width-1-1 uk-height-auto"
                src="https://www.youtube.com/embed/E3XKXYvTObs"
              >
              </iframe>
            </div>
          </div>

          <div>
            <div
              class="uk-card uk-card-default uk-card-body card card-transparent"
            >
              <img
                class="uk-margin-bottom item-header"
                src="@assets/films/nachtportier-header.svg"
              />
              <iframe
                style="aspect-ratio: 1.78"
                class="uk-width-1-1 uk-height-auto"
                src="https://www.youtube.com/embed/JXDdBNx8KLA"
              >
              </iframe>
            </div>
          </div>

          <div class="uk-margin-remove-top">
            <div
              class="uk-card uk-card-default uk-card-body card card-transparent"
            >
              <img
                class="uk-margin-bottom item-header"
                src="@assets/films/rock-header.svg"
              />
              <iframe
                style="aspect-ratio: 1.78"
                class="uk-width-1-1 uk-height-auto"
                src="https://www.youtube.com/embed/At_njVZJOc0 "
              >
              </iframe>
            </div>
          </div>

          <div class="uk-margin-remove-top">
            <div
              class="uk-card uk-card-default uk-card-body card card-transparent"
            >
              <img
                class="uk-margin-bottom item-header"
                src="@assets/films/foks-header.svg"
              />
              <iframe
                style="aspect-ratio: 1.78"
                class="uk-width-1-1 uk-height-auto"
                src="https://www.youtube.com/embed/PA3ZWZDqohE"
              >
              </iframe>
            </div>
          </div>

          <div class="uk-margin-remove-top">
            <div
              class="uk-card uk-card-default uk-card-body card card-transparent"
            >
              <img
                class="uk-margin-bottom item-header"
                src="@assets/films/dictator-header.svg"
              />
              <iframe
                style="aspect-ratio: 1.78"
                class="uk-width-1-1 uk-height-auto"
                src="https://www.youtube.com/embed/dvp72SGaFNc"
              >
              </iframe>
            </div>
          </div>

          <div class="uk-margin-remove-top">
            <div
              class="uk-card uk-card-default uk-card-body card card-transparent"
            >
              <img
                class="uk-margin-bottom item-header"
                src="@assets/films/tuinstra-worp-header.svg"
              />
              <iframe
                style="aspect-ratio: 1.78"
                class="uk-width-1-1 uk-height-auto"
                src="https://www.youtube.com/embed/MqCpKvg-66g"
              >
              </iframe>
            </div>
          </div>

          <div class="uk-margin-remove-top">
            <div
              class="uk-card uk-card-default uk-card-body card card-transparent"
            >
              <img
                class="uk-margin-bottom item-header"
                src="@assets/films/skolfer-header.svg"
              />
              <iframe
                style="aspect-ratio: 1.78"
                class="uk-width-1-1 uk-height-auto"
                src="https://www.youtube.com/embed/BejqQfufuZ0"
              >
              </iframe>
            </div>
          </div>

          <div class="uk-margin-remove-top">
            <div
              class="uk-card uk-card-default uk-card-body card card-transparent"
            >
              <img
                class="uk-margin-bottom item-header"
                src="@assets/films/terra-incognita-header.svg"
              />
              <iframe
                style="aspect-ratio: 1.78"
                class="uk-width-1-1 uk-height-auto"
                src="https://www.youtube.com/embed/hhlRq4yx_Tk"
              >
              </iframe>
            </div>
          </div>
        </div>

        <div class="uk-padding" />
      </div>
    </div>
    <div class="films-2">
     
      <h3 class="uk-text-center">
         CONTENT FOR SECTION 2
      </h3>

      <footer class="uk-padding-large">
        <div>
          <img
            @click="$router.go(-1)"
            src="@assets/back.png"
            class="back-button"
          />
        </div>
      </footer>
    </div>
  </div>
</template>

<style lang="less" scoped>
.films {
  min-height: 100vh;
}

.films-1 {
  background: #972929;
}

.films-2 {
  background: #257fd3;
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

.item-header {
  height: 3rem;
}
</style>
