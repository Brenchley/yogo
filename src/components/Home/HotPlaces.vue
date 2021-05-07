<template>
  <div class="container">
    <div class="row mt-4 ">
      <div class="top-tab d-flex justify-content-between">
        <div class="">
          <h5>Hot Places</h5>
        </div>
        <div class="">
          <router-link to="/"
            ><p class="text-muted">
              See All
              <svg
                width="0.8em"
                height="0.8em"
                viewBox="0 0 16 16"
                class="bi bi-chevron-right mb-1"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg></p
          ></router-link>
        </div>
      </div>
    </div>
    <div class="row cards d-block scrolling-wrapper">
      <div class="cardy pl-2 pr-1">
        <div class="cardy-body">
          <div class="block-card">
            <img
              src="@/assets/sneha-DEBrMzu-D8I-unsplash.jpg"
              class="location-img"
            />
            <div href="#" class="image-shadow"></div>
            <div class="pl-2 pr-2 place-info">
              <h6 class="mt-2 mb-0">Nairobi National Park</h6>
              <p>
                1232 travellers now
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="cardy pl-2 pr-1">
        <div class="cardy-body">
          <div class="block-card">
            <img
              src="@/assets/bradford-zak-RKrHmXNrSKY-unsplash.jpg"
              class="location-img"
            />
            <div href="#" class="image-shadow"></div>
            <div class="pl-2 pr-2 place-info">
              <h6 class="mt-2 mb-0">Maasai Mara</h6>
              <p>
                32 travellers now
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="cardy pl-2 pr-1">
        <div class="cardy-body">
          <div class="block-card">
            <img
              src="@/assets/jack-young-B87VRCWmpqU-unsplash.jpg"
              class="location-img"
            />
            <div href="#" class="image-shadow"></div>
            <div class="pl-2 pr-2 place-info">
              <h6 class="mt-2 mb-0">Lake Turkana</h6>
              <p>
                122 travellers now
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="cardy pl-2 pr-1">
        <div class="cardy-body">
          <div class="block-card">
            <img
              src="@/assets/harshil-gudka-CcyP9DlIdrM-unsplash.jpg"
              class="location-img"
            />
            <div href="#" class="image-shadow"></div>
            <div class="pl-2 pr-2 place-info">
              <h6 class="mt-2 mb-0">Watamu</h6>
              <p>
                312 travellers now
              </p>
            </div>
          </div>
        </div>
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
    width: 60%;
    height: 12rem;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    img {
      object-fit: cover;
      border-radius: 7px;
      width: 100%;
      height: 100%;
      transition: 0.3s;
    }
    & .cardy-body {
      -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      height: 100%;

      & .block-card {
        display: block;
        position: relative;
        height: 100%;

        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
    }
  }
}
.place-info {
  z-index: 2;
  position: absolute;
  bottom: -10px;
  & h6 {
    font-weight: 900;
    font-size: 12px;
    letter-spacing: 0.3px;
    text-shadow: rgba(0, 0, 0, 0.4) 0 1px 0;
    color: #fff;
  }
  & p {
    font-weight: 700;
    font-size: 10px;
    color: #fff;
  }
}
.image-shadow {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 7px;
}
</style>
