<template>
  <div class="films">
    <header>
      <div>
        <img
          @click="$router.go(-1)"
          src="@assets/back.png"
          class="back-button"
        />
        <img src="@assets/over/header.png" />
      </div>
    </header>

    <div class="uk-container uk-width-1-1">
      <div class="uk-margin-medium-bottom uk-container uk-flex uk-flex-middle">
        <img style="width: 25%" src="@assets/over/schets-1.jpg" />
        <div style="width: 5%" class="uk-padding">
          <img src="@assets/pijl.png" />
        </div>

        <img style="width: 25%" src="@assets/over/schets-2.jpg" />
        <div style="width: 5%" class="uk-padding">
          <img src="@assets/pijl.png" />
        </div>

        <img style="width: 25%" src="@assets/over/schets-3.jpg" />
      </div>
    </div>

    <div class="uk-container">
      <img src="@assets/over/over-text.svg" />
    </div>

    <div class="uk-container uk-width-1-1">
      <div class="uk-margin-medium-top uk-container uk-flex uk-flex-middle">
        <img style="width: 25%" src="@assets/over/remco-2.jpg" />
        <div style="width: 5%" class="uk-padding">
          <img src="@assets/pijl.png" />
        </div>

        <img style="width: 25%" src="@assets/over/remco-1.jpg" />
        <div style="width: 5%" class="uk-padding">
          <img src="@assets/pijl.png" />
        </div>

        <img style="width: 25%" src="@assets/over/remco-3.jpg" />
      </div>
    </div>

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
</template>

<style lang="less" scoped>
.films {
  min-height: 100vh;
  background: #d35725;
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
