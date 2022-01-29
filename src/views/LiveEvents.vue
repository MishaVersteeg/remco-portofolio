<template>
  <div class="live-events">
    <div class="live-events-1">
      <header>
        <div>
          <img @click="$router.go(-1)" src="@assets/back.png"  class="back-button"/>
          <img src="@assets/live-events/header.png" />
        </div>
      </header>

      <div class="uk-container">
        <div
          class="uk-grid-small uk-grid uk-child-width-1-3@m uk-child-width-1-2@s"
          uk-grid
        >
          <div class="uk-width-1-1">
            <img
              class="uk-margin-bottom item-header"
              src="@assets/live-events/vermiste-varken-header.svg"
            />
            <iframe
              style="aspect-ratio: 1.78"
              class="uk-width-1-1 uk-height-auto"
              src="https://www.youtube.com/embed/mk9lzaxL2pw"
            >
            </iframe>
          </div>

          <div>
            <img src="@assets/live-events/het-vermiste-varken-3.jpg" />
          </div>

          <div>
            <img src="@assets/live-events/het-vermiste-varken-2.jpg" />
          </div>

          <div>
            <img src="@assets/live-events/het-vermiste-varken-1.jpg" />
          </div>
        </div>
      </div>
      <div class="uk-padding"></div>
    </div>
    <div class="live-events-2">
      <div class="uk-padding uk-container">
        <div
          class="uk-card uk-card-default uk-card-body card card-transparent uk-padding-remove-left"
        >
          <img
            class="uk-margin-bottom item-header"
            src="@assets/live-events/filmfestival-header.svg"
          />
        </div>

        <div
          style="margin-top: -2rem"
          class="uk-grid-small uk-child-width-1-3@m uk-child-width-1-2@s"
          uk-grid="masonry: true"
        >
          <div>
            <img src="@assets/live-events/huiskamerfilmfestival-4.jpg" />
          </div>

          <div>
            <img src="@assets/live-events/huiskamerfilmfestival-1.jpg" />
          </div>

          <div>
            <img src="@assets/live-events/huiskamerfilmfestival-2.jpg" />
          </div>

          <div>
            <img src="@assets/live-events/huiskamerfilmfestival-3.jpg" />
          </div>
          <div>
            <img src="@assets/live-events/huiskamerfilmfestival-6.jpg" />
          </div>
          <div>
            <img src="@assets/live-events/huiskamerfilmfestival-5.jpg" />
          </div>

          <!-- <img src="@assets/live-events/huiskamerfilmfestival-6.JPG" /> -->
        </div>
      </div>

          <footer class="uk-padding-large">
      <div>
        <img @click="$router.go(-1)" src="@assets/back.png"  class="back-button"/>
      </div>
    </footer>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.live-events {
  min-height: 100vh;
}

.live-events-1 {
  background: #276386;
}

.live-events-2 {
  background: #0b3a55;
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
  height: 6rem;
}
</style>
