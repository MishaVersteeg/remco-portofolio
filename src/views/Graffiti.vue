<template>
  <div class="graffiti">
    <header>
      <div>
        <img
          @click="$router.go(-1)"
          src="@assets/back.png"
          class="back-button"
        />
        <img src="@assets/graffiti/header.png" />
      </div>
    </header>

    <div class="uk-container">
      <div class="uk-child-width-1-2 uk-text-center" uk-grid="masonry: true">
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
        <!-- OVERLAY SINGLE IMAGE EXAMPLE START: -->
        <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
          <img
            uk-img
            :data-src="require('@assets/graffiti/graffiti-3.1.jpeg')"
          />
          <img
            class="uk-transition-scale-up uk-position-cover"
            uk-img
            :data-src="require('@assets/graffiti/overlay/graffiti-3.1.jpg')"
          />
        </div>
        <!-- OVERLAY EXAMPLE END -->
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
        <div>
          <img uk-img :data-src="require('@assets/graffiti/graffiti-5.jpeg')" />
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
.graffiti {
  background: rgb(134, 37, 37);
  min-height: 100vh;
}

.header {
  width: 30rem;
}
</style>
