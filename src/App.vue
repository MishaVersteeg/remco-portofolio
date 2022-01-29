<template>
  <div>
    <router-view class="app" />
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

header,
footer {
  .uk-padding;
  .uk-flex;
  .uk-flex-center;

  > div {
    .uk-flex;
    .uk-flex-column;

    .uk-flex-center;
    .uk-flex-middle;
    .uk-width-1-2;

    & :nth-child(1) {
      .uk-width-1-5;
      cursor: pointer;
      float: left;
    }

    & :nth-child(2) {
      width: 100%;
    }
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

.back-button:hover {
  transform: scale(1.1);
  transition: transform 0.2s ease-in-out;
}
</style>
