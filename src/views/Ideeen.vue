<template>
  <div class="ideeen">
    <header>
      <div>
        <img
          @click="$router.go(-1)"
          src="@assets/back.png"
          class="back-button"
        />
        <img src="@assets/ideeen/header.png" />
      </div>
    </header>

    <div class="uk-container">
      <div class="uk-grid-large uk-child-width-1-1" uk-grid>
        <div>
          <img class="uk-width-1-1" src="@assets/ideeen/idee-1.jpg" />
        </div>
        <div>
          <img class="uk-width-1-1" src="@assets/ideeen/idee-2.jpg" />
        </div>
        <div>
          <img class="uk-width-1-1" src="@assets/ideeen/idee-3.jpg" />
        </div>
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

<script>
export default {};
</script>

<style lang="less" scoped>
.ideeen {
  min-height: 100vh;
  background: rgb(33, 33, 156);
}

.header {
  width: 30rem;
}
</style>
