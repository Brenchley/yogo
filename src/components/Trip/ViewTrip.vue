<template>
  <div class="">
    <div class="container">
      <div class="row Banner">
        <div class="col-12 p-0 mb-3">
          <div class="top-link mt-3 ml-3 mr-3 d-flex justify-content-between">
            <div>
              <p @click="$router.back()">
                <svg
                  width="1.2em"
                  height="1.2em"
                  viewBox="0 0 16 16"
                  class="bi bi-chevron-left"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="my-4 row">
        <div class="container">
          <div class="mb-5 title text-center">
            <h3 class="mb-0">Maasai Mara Drive</h3>
            <p class="text-muted">November 15 - November 20</p>
          </div>
          <div class="row">
            <div class="col-6">
              <router-link :to="{ name: 'placeView' }"
                ><button class="btn btn-secondary btn-lg w-100">
                  Discover
                </button></router-link
              >
            </div>
            <div class="col-6">
              <router-link :to="{ name: 'placeView' }"
                ><button class="btn btn-secondary btn-lg w-100">
                  Collection
                </button></router-link
              >
            </div>
            <div class="col-12 mt-4">
              <router-link :to="{ name: 'detailTrip' }"
                ><button class="btn btn-primary btn-lg w-100">
                  Trip Details Plan
                </button></router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="row" style="background:#f0f2f4;">
        <div class="container memories">
          <h5 class="mt-3">Our memories</h5>

          <div class="row">
            <div class="memory col-4 my-3 ">
              <div
                class="camera-prompt d-flex align-items-center justify-content-center"
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-camera"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15 12V6a1 1 0 0 0-1-1h-1.172a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 9.173 3H6.828a1 1 0 0 0-.707.293l-.828.828A3 3 0 0 1 3.172 5H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M8 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                  />
                  <path d="M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                </svg>
              </div>
            </div>
            <div class="memory col-4 my-3 ">
              <img
                src="@/assets/2-bull-photography-tKrIU01WDfM-unsplash.jpg"
                class="img-responsive"
              />
            </div>
            <div class="memory col-4 my-3 ">
              <img src="@/assets/rondo.jpg" class="img-responsive" />
            </div>
            <div class="memory col-4 my-3 ">
              <img
                src="@/assets/kunal-shinde--f0YLss50Bs-unsplash.jpg"
                class="img-responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    msg: String
  },
  data() {
    return {
      longText:
        "Kakamega Forest is a tropical rainforest situated in the Kakamega and Nandi County of Kenya, northwest of the capital Nairobi, and near to the border with Uganda. It is Kenya's only tropical rainforest and is said to be Kenya's last remnant of the ancient Guineo-Congolian rainforest that once spanned the continent",
      readMoreActivated: false
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
.Banner {
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("../../assets/sneha-uDL7x5SU9bw-unsplash.jpg");
  height: 20vh;
  background-position: center;
  background-size: cover;
  color: #fff;
  text-shadow: rgba(0, 0, 0, 0.5) 0 1px 0;
  letter-spacing: 1px;
}
.title {
  & h3 {
    color: #000;
    text-shadow: none;
    font-weight: 800;
    font-size: 22px;
  }
  & p {
    text-shadow: none;
    font-size: 10px;
    font-weight: 700;
  }
}
.top-link a {
  color: #fff;
}
a {
  text-decoration: none;
}

.btn-primary {
  background: #0037cf;
  font-weight: 700;
  font-size: 14px;
}

.memories {
  & h5 {
    font-weight: 800;
    font-size: 15px;
    margin-bottom: 10px;
  }
  & .memory {
    height: 6.3rem;

    & .camera-prompt {
      height: 100%;
      border-radius: 7px;
      border: 1px dashed #ccc;
    }

    & img {
      width: 100%;
      height: 100%;
      border-radius: 7px;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>
