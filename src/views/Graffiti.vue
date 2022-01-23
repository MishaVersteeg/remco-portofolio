<template>
  <div class="graffiti">
    <header class="uk-text-center">
      <img class="header" src="@assets/headers/graffiti.png" />
    </header>
    <div class="uk-container uk-container">
      <div
        class="uk-grid- uk-child-width-1-2 uk-text-center"
        uk-grid="masonry: true"
      >
        <div>
          <img
            uk-img
            :data-src="require('@assets/graffiti/graffiti-1.1.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            :data-src="require('@assets/graffiti/graffiti-1.2.jpeg')"
          />
        </div>
        <div>
          <img
            uk-img
            :data-src="require('@assets/graffiti/graffiti-2.1.jpeg')"
          />
        </div>
        <div>
          <img
            uk-img
            :data-src="require('@assets/graffiti/graffiti-2.2.jpeg')"
          />
        </div>
        <div>
          <img
            uk-img
            :data-src="require('@assets/graffiti/graffiti-3.1.jpeg')"
          />
        </div>
        <div>
          <img
            uk-img
            :data-src="require('@assets/graffiti/graffiti-3.2.jpeg')"
          />
        </div>
        <div>
          <img
            uk-img
            :data-src="require('@assets/graffiti/graffiti-4.1.jpeg')"
          />
        </div>
        <div>
          <img
            uk-img
            :data-src="require('@assets/graffiti/graffiti-4.2.jpeg')"
          />
        </div>
      </div>
    </div>
    <div class="uk-padding"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.graffiti {
  background: rgb(153, 90, 90);
  min-height: 100vh;
}

.header {
  width: 30rem;
}
</style>
