<template>
  <div class="muziek">
    <header class="uk-text-center">
      <img class="uk-width-1-3" src="@assets/muziek/header.png" />
    </header>

    <div class="uk-container">
      <div class="uk-grid-medium uk-grid uk-child-width-1-2" uk-grid>
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

        <div class="uk-width-1-1">
          <div
            class="uk-card uk-card-default uk-card-body card card-transparent"
          >
            <h3 class="uk-card-title">MIXTAPE VORMGEVING</h3>
            <img class="uk-width-1-1" src="@assets/muziek/vormgeving.jpg" />
          </div>
        </div>

        <div class="uk-width-1-1 uk-margin-remove-top">
          <div
            class="uk-card uk-card-default uk-card-body card card-transparent"
          >
            <h3 class="uk-card-title">AFSLAG VIDEO</h3>
            <video id="myaudio" controls>
              <source src="@assets/muziek/video.mp4" type="audio/mpeg" />
            </video>
          </div>
        </div>

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

        <div class="uk-padding"></div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.muziek {
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
</style>
