<template>
  <div class="container">
    <div class="row mt-4 ">
      <div class="top-tab d-flex justify-content-between">
        <div class="">
          <h5>Stories</h5>
        </div>
      </div>
    </div>
    <div class="row cards d-block scrolling-wrapper">
      <div class="cardy ml-sm-1 mr-sm-1 ml-2 mr-3">
        <div
          class="profile-img d-flex align-items-center justify-content-center"
          style="background:#0a0a0a;color:#fff;"
        >
          <svg
            width="2em"
            height="2em"
            viewBox="0 0 16 16"
            class="bi bi-plus"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            />
          </svg>
        </div>
      </div>
      <div class="stories">
        <section class="user">
          <article class="story" style="background:url('https://picsum.photos/480/840');"></article>
          <article class="story" style="background:url('https://picsum.photos/480/841')"></article>
        </section>
      </div>
      <div class="cardy ml-sm-1 mr-sm-1 ml-2 mr-3">
        <img
          src="@/assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg"
          class="profile-img"
        />
      </div>
      <div class="cardy ml-sm-1 mr-sm-1 ml-2 mr-3">
        <img
          src="@/assets/bradford-zak-RKrHmXNrSKY-unsplash.jpg"
          class="profile-img"
        />
      </div>
      <div class="cardy ml-sm-1 mr-sm-1 ml-2 mr-3">
        <img
          src="@/assets/harshil-gudka-CcyP9DlIdrM-unsplash.jpg"
          class="profile-img"
        />
      </div>
      <div class="cardy ml-sm-1 mr-sm-1 ml-2 mr-3">
        <img
          src="@/assets/jack-young-B87VRCWmpqU-unsplash.jpg"
          class="profile-img"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>
<style lang="scss" scoped>
.top-tab {
  & h5 {
    font-weight: 800;
    font-size: 15px;
    margin-bottom: 10px;
  }
  & a,
  p {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
    text-decoration: none;
  }
}
.profile-img {
  object-fit: cover;
  width: 100%;
  border-radius: 50%;
  width: 13vh;
  height: 13vh;
}
.scrolling-wrapper {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
  & .cardy {
    display: inline-block;
    white-space: normal;
    margin: 0 1px;
    vertical-align: top;
    width: 20%;
    & img {
      padding: 2px;
      border: 2px solid #5e12f8;
    }
  }
}
.place-info {
  & h6 {
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.3px;
  }
  & p {
    font-weight: 700;
    font-size: 12px;
    color: #188de2;
  }
}

.stories {
  inline-size: 100vw;
  block-size: 100vh;

  display: grid;
  grid: 1fr / auto-flow 100%;
  gap: 1ch;

  overflow-x: auto;
  scroll-snap-type: x mandatory;
  overscroll-behavior: contain;
  touch-action: pan-x;
}

/* desktop constraint */
// @media (hover: hover) and (min-width: 480px) {
//   max-inline-size: 480px;
//   max-block-size: 848px;
// }

.user {
  display: grid;
  grid: [story] 1fr / [story] 1fr;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}
.story {
  grid-area: story;
  background-size: cover;
}
</style>
