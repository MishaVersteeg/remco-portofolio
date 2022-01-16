<template>
  <div class="grafisch">
    <header class="uk-text-center">
      <img class="uk-width-1-3" src="@assets/grafisch/header.png" />
    </header>

    <div class="uk-flex uk-flex-center uk-grid-large uk-child-width-1-2">
      <img
        @click="openModal('cover-1.jpg', '#1D1E19')"
        src="@assets/grafisch/cover-1.jpg"
      />
    </div>

    <div
      class="uk-margin-large-top uk-flex uk-flex-center uk-grid-large uk-child-width-1-2"
    >
      <img
        @click="openModal('cover-2.jpg', '#1D1E19')"
        src="@assets/grafisch/cover-2.jpg"
      />
    </div>

    <div
      class="uk-margin-large-top uk-flex uk-flex-center uk-grid-large uk-child-width-1-4"
    >
      <img
        @click="openModal('visite-kaartje-1.jpg', '#353D8E')"
        src="@assets/grafisch/visite-kaartje-1.jpg"
      />
      <img
        @click="openModal('visite-kaartje-1-back.jpg', '#353D8E')"
        src="@assets/grafisch/visite-kaartje-1-back.jpg"
      />
    </div>

    <div
      class="uk-margin-large-top uk-flex uk-flex-center uk-grid-large uk-child-width-1-4"
    >
      <img
        @click="openModal('visite-kaartje-2.jpg', '#FFFFFF')"
        src="@assets/grafisch/visite-kaartje-2.jpg"
      />
      <img
        @click="openModal('visite-kaartje-2-back.jpg', '#FFFFFF')"
        src="@assets/grafisch/visite-kaartje-2-back.jpg"
      />
    </div>

    <div
      class="uk-margin-large-top uk-flex uk-flex-center uk-grid-large uk-child-width-1-2"
    >
      <img
        @click="openModal('poster.jpg', '#313232')"
        src="@assets/grafisch/poster.jpg"
      />
    </div>

    <div
      class="uk-margin-large-top uk-flex uk-flex-center uk-grid-large uk-child-width-1-2"
    >
      <img
        @click="openModal('museum-docent.gif', '#313232')"
        src="@assets/grafisch/museum-docent.gif"
      />
    </div>

    <div class="uk-padding-large"></div>

    <div @click="closeModal" class="uk-modal-full" ref="modal" uk-modal>
      <div
        :style="{ background: modalBackground }"
        class="uk-modal-dialog uk-modal-body uk-padding-remove modal"
      >
        <img
          class="uk-position-center"
          v-if="modalFile"
          :src="require(`@assets/grafisch/${modalFile}`)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import UIkit from "uikit";

export default {
  data() {
    return {
      modalFile: null,
      modalBackground: null,
    };
  },

  methods: {
    openModal(file, background) {
      this.modalFile = file;
      this.modalBackground = background;

      UIkit.modal(this.$refs.modal).show();
    },

    closeModal() {
      this.modalFile = null;
      this.modalBackground = null;

      UIkit.modal(this.$refs.modal).hide();
    },
  },
};
</script>

<style lang="less" scoped>

.grafisch {
    background: #b93a19;
}

img {
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
