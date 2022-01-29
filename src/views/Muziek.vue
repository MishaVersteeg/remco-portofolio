<template>
  <div class="muziek">
    <header>
      <div>
        <img @click="$router.go(-1)" src="@assets/back.png"  class="back-button"/>
        <img src="@assets/muziek/header.png" />
      </div>
    </header>

    <div class="uk-container">
      <div
        class="uk-grid-small uk-child-width-1-1@s uk-child-width-1-2@m"
        uk-grid
      >
        <div>
          <div class="uk-card uk-card-default uk-card-body card">
            <h3 class="uk-card-title">MIMOSA</h3>
            <audio id="myaudio" controls>
              <source src="@assets/muziek/01-mimosa.mp3" type="audio/mpeg" />
            </audio>
          </div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body card">
            <h3 class="uk-card-title">6PAX</h3>
            <audio id="myaudio" controls>
              <source src="@assets/muziek/02-6pax.mp3" type="audio/mpeg" />
            </audio>
          </div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body card">
            <h3 class="uk-card-title">PORNSTAR</h3>
            <audio id="myaudio" controls>
              <source src="@assets/muziek/03-pornstar.mp3" type="audio/mpeg" />
            </audio>
          </div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body card">
            <h3 class="uk-card-title">KINGKONGVISIE</h3>
            <audio id="myaudio" controls>
              <source
                src="@assets/muziek/04-kingkongvisie.mp3"
                type="audio/mpeg"
              />
            </audio>
          </div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body card">
            <h3 class="uk-card-title">AFSLAG</h3>
            <audio id="myaudio" controls>
              <source src="@assets/muziek/05-afslag.mp3" type="audio/mpeg" />
            </audio>
          </div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body card">
            <h3 class="uk-card-title">VOORBIJ</h3>
            <audio id="myaudio" controls>
              <source src="@assets/muziek/06-voorbij.mp3" type="audio/mpeg" />
            </audio>
          </div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body card">
            <h3 class="uk-card-title">80</h3>
            <audio id="myaudio" controls>
              <source src="@assets/muziek/07-80.mp3" type="audio/mpeg" />
            </audio>
          </div>
        </div>

        <br />

        <div class="uk-margin-large-top uk-width-1-1">
          <!-- <div
            class="uk-card uk-card-default uk-card-body card card-transparent"
          >-->
          <!-- <h3 class="uk-card-title">MIXTAPE VORMGEVING</h3> -->

          <img
            class="uk-margin-bottom item-header"
            src="@assets/muziek/vormgeving-header.svg"
          />

          <img class="uk-width-1-1" src="@assets/muziek/vormgeving.jpg" />
          <!-- </div> -->
        </div>

        <div class="uk-margin-large-top uk-width-1-1">
          <!-- <div
            class="uk-card uk-card-default uk-card-body card card-transparent"
          > -->
          <!-- <h3 class="uk-card-title">VIDEOCLIP</h3> -->
          <img
            class="uk-margin-bottom item-header"
            src="@assets/muziek/videoclip-header.svg"
          />
          <iframe
            style="aspect-ratio: 1.78"
            class="uk-width-1-1 uk-height-auto"
            src="https://www.youtube.com/embed/ToBxNtSZTfM"
          >
          </iframe>
          <!-- </div> -->
        </div>

        <div class="uk-margin-large-top uk-width-1-1"></div>

        <div>
          <div class="uk-card uk-card-default uk-card-body card">
            <h3 class="uk-card-title">BETTER DAYZ</h3>
            <audio id="myaudio" controls>
              <source src="@assets/muziek/nieuw-1.mp3" type="audio/mpeg" />
            </audio>
          </div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body card">
            <h3 class="uk-card-title">IEDERE DAG</h3>
            <audio id="myaudio" controls>
              <source src="@assets/muziek/nieuw-2.mp3" type="audio/mpeg" />
            </audio>
          </div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body card">
            <h3 class="uk-card-title">MIX NIEUW</h3>
            <audio id="myaudio" controls>
              <source src="@assets/muziek/nieuw-3.mp3" type="audio/mpeg" />
            </audio>
          </div>
        </div>
        <div>
          <div class="uk-card uk-card-default uk-card-body card">
            <h3 class="uk-card-title">LATE AT NIGHT</h3>
            <audio id="myaudio" controls>
              <source src="@assets/muziek/nieuw-4.mp3" type="audio/mpeg" />
            </audio>
          </div>
        </div>
      </div>
    </div>

    <footer class="uk-padding-large">
      <div>
        <img @click="$router.go(-1)" src="@assets/back.png"  class="back-button"/>
      </div>
    </footer>
  </div>
</template>

<style lang="less" scoped>
.muziek {
  min-height: 100vh;
  background: rgb(42, 83, 170);
}

.card {
  background: rgb(132, 132, 219);
  * {
    color: rgb(226, 226, 226) !important;
  }
}

.card-transparent {
  background: transparent;
  box-shadow: none;
}

.item-header {
  height: 6rem;
}
</style>
