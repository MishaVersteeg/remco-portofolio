<template>
  <div class="uk-flex uk-flex-middle uk-flex-center home">
    <div class="background-container">
      <img class="background" src="@assets/home/background.jpg" />

      <div
        @click="openView('films')"
        class="widget widget-grow films uk-visible-toggle"
      >
        <img class="closed" src="@assets/home/films-1.png" />
        <img class="uk-invisible-hover" src="@assets/home/films-2.png" />
      </div>

      <div
        @click="openView('over')"
        class="widget widget-grow over uk-visible-toggle"
      >
        <img class="closed" src="@assets/home/over-1.png" />
        <img class="uk-invisible-hover" src="@assets/home/over-2.png" />
      </div>

      <div
        @click="openView('events')"
        class="widget widget-grow events uk-visible-toggle"
      >
        <img class="closed" src="@assets/home/events-1.png" />
        <img class="uk-invisible-hover" src="@assets/home/events-2.png" />
      </div>

      <div
        @click="openView('ideeen')"
        class="widget widget-grow ideeen uk-visible-toggle"
      >
        <img class="closed" src="@assets/home/ideeen-1.png" />
        <img class="uk-invisible-hover" src="@assets/home/ideeen-2.png" />
      </div>

      <div
        @click="openView('tekeningen')"
        class="widget widget-grow tekeningen uk-visible-toggle"
      >
        <img class="closed" src="@assets/home/tekeningen-1.png" />
        <img class="uk-invisible-hover" src="@assets/home/tekeningen-2.png" />
      </div>

      <div
        @click="openView('fotos')"
        class="widget widget-grow scanner uk-visible-toggle"
      >
        <img class="closed" src="@assets/home/fotos-1.png" />
        <img class="uk-invisible-hover" src="@assets/home/fotos-2.png" />
      </div>

      <div
        @click="openView('muziek')"
        class="widget widget-grow muziek uk-visible-toggle"
      >
        <img class="closed" src="@assets/home/muziek-1.png" />
        <img class="uk-invisible-hover" src="@assets/home/stekker.png" />
        <img class="uk-invisible-hover" src="@assets/home/muziek-2.png" />
      </div>

      <div
        @click="openView('grafisch')"
        class="widget widget-grow laptop uk-visible-toggle"
      >
        <img class="closed" src="@assets/home/grafisch-1.png" />
        <img class="uk-invisible-hover" src="@assets/home/grafisch-2.png" />
      </div>

      <div
        @click="openView('graffiti')"
        class="widget widget-grow graffiti uk-visible-toggle"
      >
        <img class="closed" src="@assets/home/graffiti-1.png" />
        <img class="uk-invisible-hover" src="@assets/home/graffiti-2.png" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    window.addEventListener("load", () => this.animateWidgets());
  },

  methods: {
    openView(widget) {
      if (/Mobi|Android/i.test(navigator.userAgent)) {
        setTimeout(() => {
          this.$router.push({ name: widget });
        }, 700);
      } else {
        this.$router.push({ name: widget });
      }
    },

    animateWidgets() {
      let timeOutCount = 0;
      const widgets = document.getElementsByClassName("widget");

      for (let i = 0; i < widgets.length; i++) {
        timeOutCount += 3000;

        setTimeout(() => {
          widgets[i].firstChild.classList.add("animate-widget");

          setTimeout(() => {
            widgets[i].firstChild.classList.remove("animate-widget");

            if (i === widgets.length - 1) {
              this.animateWidgets();
            }
          }, 500);
        }, timeOutCount);
      }
    },
  },
};
</script>
<style lang="less" scoped>
.home {
  background: #b93a19;
  height: 100vh;
}

.background-container {
  position: relative;
}

.background {
  max-width: 100vw;
  max-height: 100vh;
  aspect-ratio: 16 / 9;
}

.widget {
  &:hover > :first-of-type {
    display: none;
  }

  > img {
    cursor: pointer;
    position: absolute;
  }
}

.widget-grow > img:hover,
.animate-widget {
  transform: scale(1.1);
  transition: transform 0.2s ease-in-out;
}

.films > img {
  top: 0;
  left: 12%;
  width: 15%;
}

.over > img {
  top: 10%;
  left: 75%;
  width: 15%;
}

.muziek > img {
  top: 32%;
  left: 59%;
  width: 17%;

  &:nth-child(2) {
    top: 55%;
    left: 73.5%;
    width: 8%;
  }

  &:nth-child(3) {
    top: 32%;
    left: 59%;
    width: 17%;
  }
}

.events > img {
  top: 23%;
  left: 63%;
  width: 7%;
}

.tekeningen > img {
  top: 45%;
  left: 23%;
  width: 14%;
}

.scanner > img {
  top: 23%;
  left: 45%;
  width: 15%;
}

.ideeen > img {
  top: 27%;
  left: 32%;
  width: 15%;
}

.laptop > img {
  top: 40%;
  left: 40%;
  width: 17%;
}

.graffiti > img {
  top: 28%;
  left: 3%;
  width: 25%;
}
</style>
