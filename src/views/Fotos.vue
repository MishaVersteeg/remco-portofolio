<template>
  <div class="fotos">
    <header>
      <div>
        <img
          @click="$router.go(-1)"
          src="@assets/back.png"
          class="back-button"
        />
        <img class="header-image" src="@assets/fotos/header.png" />
      </div>
    </header>

    <div class="uk-container">
      <div
        class="uk-grid-large uk-child-width-1-4@xl uk-child-width-1-3@l uk-child-width-1-2@s"
        uk-grid="masonry: true"
      >
        <div>
          <img
            uk-img
            @click="openModal('foto-1.jpg')"
            :data-src="require('@assets/fotos/klein/foto-1.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('foto-2.jpg')"
            :data-src="require('@assets/fotos/klein/foto-2.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('foto-3.jpg')"
            :data-src="require('@assets/fotos/klein/foto-3.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('foto-4.jpg')"
            :data-src="require('@assets/fotos/klein/foto-4.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('foto-5.jpg')"
            :data-src="require('@assets/fotos/klein/foto-5.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('foto-6.jpg')"
            :data-src="require('@assets/fotos/klein/foto-6.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('foto-7.jpg')"
            :data-src="require('@assets/fotos/klein/foto-7.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('foto-8.jpg')"
            :data-src="require('@assets/fotos/klein/foto-8.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('foto-9.jpg')"
            :data-src="require('@assets/fotos/klein/foto-9.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('foto-10.jpg')"
            :data-src="require('@assets/fotos/klein/foto-10.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('foto-11.jpg')"
            :data-src="require('@assets/fotos/klein/foto-11.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('foto-12.jpg')"
            :data-src="require('@assets/fotos/klein/foto-12.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('foto-13.jpg')"
            :data-src="require('@assets/fotos/klein/foto-13.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('foto-14.jpg')"
            :data-src="require('@assets/fotos/klein/foto-14.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('foto-15.jpg')"
            :data-src="require('@assets/fotos/klein/foto-15.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('foto-16.jpg')"
            :data-src="require('@assets/fotos/klein/foto-16.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('foto-17.jpg')"
            :data-src="require('@assets/fotos/klein/foto-17.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('foto-18.jpg')"
            :data-src="require('@assets/fotos/klein/foto-18.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('foto-19.jpg')"
            :data-src="require('@assets/fotos/klein/foto-19.jpg')"
          />
        </div>

        <div>
          <img
            uk-img
            @click="openModal('foto-20.jpg')"
            :data-src="require('@assets/fotos/klein/foto-20.jpg')"
          />
        </div>

        <div>
          <img
            uk-img
            @click="openModal('foto-21.jpg')"
            :data-src="require('@assets/fotos/klein/foto-21.jpg')"
          />
        </div>

        <div>
          <img
            uk-img
            @click="openModal('foto-22.jpg')"
            :data-src="require('@assets/fotos/klein/foto-22.jpg')"
          />
        </div>

        <div>
          <img
            uk-img
            @click="openModal('foto-23.jpg')"
            :data-src="require('@assets/fotos/klein/foto-23.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('foto-24.jpg')"
            :data-src="require('@assets/fotos/klein/foto-24.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('foto-25.jpg')"
            :data-src="require('@assets/fotos/klein/foto-25.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('foto-26.jpg')"
            :data-src="require('@assets/fotos/klein/foto-26.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('foto-27.jpg')"
            :data-src="require('@assets/fotos/klein/foto-27.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('foto-28.jpg')"
            :data-src="require('@assets/fotos/klein/foto-28.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('foto-29.jpg')"
            :data-src="require('@assets/fotos/klein/foto-29.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('foto-30.jpg')"
            :data-src="require('@assets/fotos/klein/foto-30.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('foto-31.jpg')"
            :data-src="require('@assets/fotos/klein/foto-31.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('foto-32.jpg')"
            :data-src="require('@assets/fotos/klein/foto-32.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('foto-33.jpg')"
            :data-src="require('@assets/fotos/klein/foto-33.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('foto-34.jpg')"
            :data-src="require('@assets/fotos/klein/foto-34.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('foto-35.jpg')"
            :data-src="require('@assets/fotos/klein/foto-35.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('foto-36.jpg')"
            :data-src="require('@assets/fotos/klein/foto-36.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('foto-37.jpg')"
            :data-src="require('@assets/fotos/klein/foto-37.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('foto-38.jpg')"
            :data-src="require('@assets/fotos/klein/foto-38.jpg')"
          />
        </div>
        <div>
          <img
            uk-img
            @click="openModal('foto-39.jpg')"
            :data-src="require('@assets/fotos/klein/foto-39.jpg')"
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
          :src="require(`@assets/fotos/${modalFile}`)"
        />
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
import UIkit from "uikit";

export default {
  data() {
    return {
      modalFile: null,
      modalBackground: "#222222",
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
.fotos {
  min-height: 100vh;
  background: #222222;
}

img {
  transition: transform 0.2s ease-in-out;
}

img:hover:not(.modal, .modal > *):not(.header-image) {
  transform: scale(1.1);
  cursor: pointer;
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
