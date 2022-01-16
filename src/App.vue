<template>
  <router-view class="app" />
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

html {
  // background: #b93a19;

}
.app {
  // height: 100vh;
}

.b {
  border: 3px solid pink;
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
</style>
