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
          <div class="ml-3 mr-3 mt-4">
            <p class="mb-0">
              You are in Nairobi
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <h3 class="mb-0">My Trips</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <OngingTrip />
      </div>
      <div class="col-12">
        <router-link :to="{ name: 'createTrip' }"
          ><button type="submit" class="mt-4 mb-4 btn btn-lg btn-primary w-100">
            CREATE NEW TRIP
          </button></router-link
        >
      </div>
      <div class="col-12">
        <PastTrips />
      </div>
    </div>
  </div>
</template>
<script>
import OngingTrip from "@/components/Trip/OngoingTrips.vue";
import PastTrips from "@/components/Trip/PastTrips.vue";
export default {
  components: {
    OngingTrip,
    PastTrips
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
.Banner {
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("../../assets/david-clode-xFqH9peAlmw-unsplash.jpg");
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
  & a {
    text-decoration: none;
    color: #fff;
  }
}

a {
  text-decoration: none;
}

.btn-primary {
  background: #0037cf;
  font-weight: 700;
  font-size: 14px;
}
</style>
