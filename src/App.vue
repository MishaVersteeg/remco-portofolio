<template>
  <div>
    <router-view class="app">
      <!-- <footer class="uk-position-bottom footer">
        <div>Remo Efdé ©{{ new Date().getFullYear() }}</div>
      </footer> -->
    </router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    document.addEventListener("contextmenu", (event) => event.preventDefault());
  },
};
</script>

<style lang="less">
@import "~@styling/index.less";

.b {
  border: 3px solid pink;
}

header {
  .uk-padding;
  .uk-text-center;
  img {
    .uk-width-1-2;
    min-width: 20rem;
  }
}

* {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;

  ::selection {
    background: transparent;
  }
  ::-moz-selection {
    background: transparent;
  }
}

.uk-card-title {
  color: white;
}

.footer {
  // margin-top: -5rem;

  // height: -5rem;
  display: flex;
  justify-content: right;
  align-items: center;
  div {
    // margin: 2rem;
    font-size: 3rem;
    color: rgb(218, 218, 218);
  }
}
</style>
