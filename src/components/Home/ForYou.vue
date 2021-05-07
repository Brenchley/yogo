<template>
  <div class="container">
    <div class="row mt-4 ">
      <div class="top-tab d-flex justify-content-between">
        <div class="">
          <h5>For You</h5>
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
      <router-link :to="{ name: 'placeView' }"
        ><div class="cardy pl-2 pr-1">
          <img
            src="@/assets/david-clode-xFqH9peAlmw-unsplash.jpg"
            class="location-img"
          />
          <div class="place-info">
            <h6 class="mt-2 mb-0">Kakamega Forest</h6>
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
              Kakamega
            </p>
          </div>
        </div></router-link
      >
      <div class="cardy pl-2 pr-1">
        <img
          src="@/assets/daniel-james-DVXATXxgtKg-unsplash.jpg"
          class="location-img"
        />
        <div class="place-info">
          <h6 class="mt-2 mb-0">Lake Magadi</h6>
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
            Magadi
          </p>
        </div>
      </div>
      <div class="cardy pl-2 pr-1">
        <img
          src="@/assets/harshil-gudka-CcyP9DlIdrM-unsplash.jpg"
          class="location-img"
        />
        <div class="place-info">
          <h6 class="mt-2 mb-0">Lamu</h6>
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
            Lamu
          </p>
        </div>
      </div>
      <div class="cardy pl-2 pr-1">
        <img
          src="@/assets/mustafa-omar-Zkao_QBEjk8-unsplash.jpg"
          class="location-img"
        />
        <div class="place-info">
          <h6 class="mt-2 mb-0">KICC</h6>
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
  height: 7rem;
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
    width: 40%;
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
</style>
