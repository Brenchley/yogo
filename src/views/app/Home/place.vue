<template>
  <div class="">
    <div class="container">
      <div class="col-md-6 offset-md-3">
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
              <div>
                <p>
                  <router-link :to="{ name: 'profileFollowers' }">
                    <span class="mr-4"
                      ><svg
                        width="1.2em"
                        height="1.2em"
                        viewBox="0 0 16 16"
                        class="bi bi-heart"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                        /></svg
                    ></span>
                  </router-link>
                  <router-link :to="{ name: 'profileFollowers' }"
                    ><span>
                      <svg
                        width="1.2em"
                        height="1.2em"
                        viewBox="0 0 16 16"
                        class="bi bi-bookmark"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"
                        />
                      </svg> </span
                  ></router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 mt-3 location">
            <div class="d-flex justify-content-between">
              <h3 class="mb-0">Kakamega Forest</h3>
              <img src="@/assets/cloudy.svg" width="30" />
            </div>
            <div class="">
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
          </div>
          <div class="col-12 bio">
            <p class="mb-2 text-muted" v-if="!readMoreActivated">
              {{ longText.slice(0, 155) }}...
            </p>
            <p class="mb-2 text-muted" v-if="readMoreActivated">
              {{ longText }}
            </p>
            <p
              class="text-center"
              @click="readMoreActivated = !readMoreActivated"
            >
              {{ readMoreActivated ? "View Less" : "View More" }}
            </p>
          </div>
        </div>
        <section class="hot-places-section mt-4">
          <FeaturedExp />
        </section>
        <section class="hot-places-section mt-4">
          <ToStay />
        </section>
        <div class="col-12">
          <router-link :to="{ name: 'createTrip' }"
            ><button type="submit" class="my-4 btn btn-lg btn-primary w-100">
              PLAN NEW TRIP
            </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FeaturedExp from "@/components/Home/FeaturedExp.vue";
import ToStay from "@/components/Home/ToStay.vue";

export default {
  components: {
    FeaturedExp,
    ToStay
  },
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
    url("../../../assets/david-clode-xFqH9peAlmw-unsplash.jpg");
  height: 33vh;
  background-position: center;
  background-size: cover;
  color: #fff;
  text-shadow: rgba(0, 0, 0, 0.5) 0 1px 0;
  letter-spacing: 1px;
  & h3 {
    font-weight: 800;
    font-size: 30px;
  }
  & p {
    font-size: 12px;
    font-weight: 600;
  }
}
.top-link a {
  color: #fff;
}
.location {
  & h3 {
    font-weight: 800;
    font-size: 22px;
    letter-spacing: 0.3px;
  }
  & p {
    font-weight: 700;
    font-size: 12px;
    color: #188de2;
  }
}
.bio p {
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
}
.btn-primary {
  background: #0037cf;
  font-weight: 700;
  font-size: 14px;
}
</style>
