<template>
  <div class="container">
    <div class="row mt-4 ">
      <div class="top-tab d-flex justify-content-between">
        <div class="">
          <h5>Featured Experience</h5>
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
        <img
          src="@/assets/aung-nyi-Te6wiGYQ_WQ-unsplash.jpg"
          class="location-img"
        />
        <div class="place-info">
          <small class="text-muted category mb-1">Art</small>
          <h6 class="mt-0 mb-0">Glass Blowing</h6>
          <p>
            <svg
              width="0.9em"
              height="0.9em"
              viewBox="0 0 16 16"
              class="bi bi-geo-alt-fill mb-1"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
              />
            </svg>
            Rongai
          </p>
        </div>
      </div>
      <div class="cardy pl-2 pr-1">
        <img
          src="@/assets/david-clode-wOpm2alT6qU-unsplash.jpg"
          class="location-img"
        />
        <div class="place-info">
          <small class="text-muted category mb-1">Adventure</small>
          <h6 class="mt-0 mb-0">Giraffe feeding</h6>
          <p>
            <svg
              width="0.9em"
              height="0.9em"
              viewBox="0 0 16 16"
              class="bi bi-geo-alt-fill mb-1"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
              />
            </svg>
            Nairobi
          </p>
        </div>
      </div>
      <div class="cardy pl-2 pr-1">
        <img
          src="@/assets/max-murauer-81RoT9d5vN0-unsplash.jpg"
          class="location-img"
        />
        <div class="place-info">
          <small class="text-muted category mb-1">sport</small>
          <h6 class="mt-0 mb-0">Ostrich Riding</h6>
          <p>
            <svg
              width="0.9em"
              height="0.9em"
              viewBox="0 0 16 16"
              class="bi bi-geo-alt-fill mb-1"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
              />
            </svg>
            Kitengela
          </p>
        </div>
      </div>
      <div class="cardy pl-2 pr-1">
        <img
          src="@/assets/anna-pelzer-IGfIGP5ONV0-unsplash.jpg"
          class="location-img"
        />
        <div class="place-info">
          <small class="text-muted category mb-1">cooking class</small>
          <h6 class="mt-0 mb-0">Traditional Chicken Salad</h6>
          <p>
            <svg
              width="0.9em"
              height="0.9em"
              viewBox="0 0 16 16"
              class="bi bi-geo-alt-fill mb-1"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
              />
            </svg>
            Nairobi
          </p>
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
.location-img {
  object-fit: cover;
  width: 100%;
  border-radius: 7px;
  width: 100%;
  height: 14rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
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
    width: 70%;
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
  & .category {
    font-size: 10px;
    font-weight: 800;
    text-transform: uppercase;
  }
}
</style>
