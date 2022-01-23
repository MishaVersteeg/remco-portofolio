<template>
  <div>
    <router-view class="app" />

    <footer class="footer">
      <div>
        Remo Efdé ©{{ new Date().getFullYear() }}
      </div>
    </footer>
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

.footer {
  margin-top: -5rem;

  height: 5rem;
  display: flex;
  justify-content: right;
  align-items: center;
  div {
    margin: 2rem;
    font-size: 3rem;
    color: rgb(218, 218, 218);
  }
}
</style>
