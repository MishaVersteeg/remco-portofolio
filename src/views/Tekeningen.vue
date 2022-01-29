<template>
  <div class="tekeningen">
    <header>
      <div>
        <img @click="$router.go(-1)" src="@assets/back.png"  class="back-button"/>
        <img src="@assets/tekeningen/header.png" />
      </div>
    </header>

    <div class="uk-container">
      <div
        class="uk-grid uk-grid uk-child-width-1-4@xl uk-child-width-1-3@l uk-child-width-1-2@m uk-child-width-1-1@s"
        uk-grid="masonry: true"
      >
        <div>
          <img
            uk-img
            @click="openModal('karakters-1.jpg')"
            :data-src="require('@assets/tekeningen/karakters-1.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('karakters-2.jpg')"
            :data-src="require('@assets/tekeningen/karakters-2.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('karakters-3.jpg')"
            :data-src="require('@assets/tekeningen/karakters-3.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('karakters-4.jpg')"
            :data-src="require('@assets/tekeningen/karakters-4.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('karakters-5.jpg')"
            :data-src="require('@assets/tekeningen/karakters-5.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('karakters-6.jpg')"
            :data-src="require('@assets/tekeningen/karakters-6.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('karakters-7.jpg')"
            :data-src="require('@assets/tekeningen/karakters-7.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('karakters-8.jpg')"
            :data-src="require('@assets/tekeningen/karakters-8.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('karakters-9.jpg')"
            :data-src="require('@assets/tekeningen/karakters-9.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('karakters-10.jpg')"
            :data-src="require('@assets/tekeningen/karakters-10.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('karakters-11.jpg')"
            :data-src="require('@assets/tekeningen/karakters-11.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('karakters-12.jpg')"
            :data-src="require('@assets/tekeningen/karakters-12.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('karakters-13.jpg')"
            :data-src="require('@assets/tekeningen/karakters-13.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('karakters-14.jpg')"
            :data-src="require('@assets/tekeningen/karakters-14.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('karakters-15.jpg')"
            :data-src="require('@assets/tekeningen/karakters-15.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('karakters-16.jpg')"
            :data-src="require('@assets/tekeningen/karakters-16.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('karakters-17.jpg')"
            :data-src="require('@assets/tekeningen/karakters-17.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('karakters-18.jpg')"
            :data-src="require('@assets/tekeningen/karakters-18.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('karakters-19.jpg')"
            :data-src="require('@assets/tekeningen/karakters-19.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('karakters-20.jpg')"
            :data-src="require('@assets/tekeningen/karakters-20.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('karakters-21.jpg')"
            :data-src="require('@assets/tekeningen/karakters-21.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('karakters-22.jpg')"
            :data-src="require('@assets/tekeningen/karakters-22.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('karakters-23.jpg')"
            :data-src="require('@assets/tekeningen/karakters-23.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('karakters-24.jpg')"
            :data-src="require('@assets/tekeningen/karakters-24.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('karakters-25.jpg')"
            :data-src="require('@assets/tekeningen/karakters-25.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('karakters-26.jpg')"
            :data-src="require('@assets/tekeningen/karakters-26.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('karakters-27.jpg')"
            :data-src="require('@assets/tekeningen/karakters-27.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('karakters-28.jpg')"
            :data-src="require('@assets/tekeningen/karakters-28.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('karakters-29.jpg')"
            :data-src="require('@assets/tekeningen/karakters-29.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('karakters-30.jpg')"
            :data-src="require('@assets/tekeningen/karakters-30.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('karakters-31.jpg')"
            :data-src="require('@assets/tekeningen/karakters-31.jpg')"
          />
        </div>
      </div>
    </div>

    <div @click="closeModal" class="uk-modal-full" ref="modal" uk-modal>
      <div
        :style="{ background: modalBackground }"
        class="uk-modal-dialog uk-modal-body uk-padding-remove modal"
      >
        <img
          class="uk-position-center"
          v-if="modalFile"
          :src="require(`@assets/tekeningen/${modalFile}`)"
        />
      </div>
    </div>

    <footer class="uk-padding-large">
      <div>
        <img @click="$router.go(-1)" src="@assets/back.png"  class="back-button" />
      </div>
    </footer>
  </div>
</template>

<script>
import UIkit from "uikit";

export default {
  data() {
    return {
      modalFile: null,
      modalBackground: "#708292",
    };
  },

  methods: {
    openModal(file) {
      this.modalFile = file;

      UIkit.modal(this.$refs.modal).show();
    },

    closeModal() {
      this.modalFile = null;

      UIkit.modal(this.$refs.modal).hide();
    },
  },
};
</script>

<style lang="less" scoped>
.tekeningen {
  min-height: 100vh;
  background: #708292;
}

img {
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

img:hover:not(.modal, .modal > *):not(.header) {
  transform: scale(1.1);
}

.modal {
  height: 100vh;
  padding: 20vw;
  img {
    display: block;
    max-width: 80vw;
    max-height: 80vh;
    width: auto;
    height: auto;
  }
}
</style>
