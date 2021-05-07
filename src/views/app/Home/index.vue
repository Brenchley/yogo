<template>
  <div class="">
    <div class="container">
      <div class="col-md-6 offset-md-3">
        <div class="row Banner d-flex align-items-end">
          <div class="search-section">
            <p class="mb-2">
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
              You're in Nairobi
            </p>
            <h3 class="mb-4">Discover</h3>
            <form action="#">
              <div class="row">
                <div class="col-12 d-flex align-items-center form-group">
                  <input
                    class="form-control border-0 shadow-0"
                    type="text"
                    name="search"
                    placeholder="Hi, where do you want to go?"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-12">
          <section class="for-you-section mt-5">
            <ForYou />
          </section>
          <section class="stories-section mt-4">
            <Stories />
          </section>
          <section class="hot-places-section mt-4">
            <TopJourney />
          </section>
          <section class="hot-places-section mt-4">
            <HotPlaces />
          </section>
          <section class="hot-places-section mt-4">
            <FeaturedExp />
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ForYou from "@/components/Home/ForYou.vue";
import Stories from "@/components/Home/Stories.vue";
import TopJourney from "@/components/Home/TopJourney.vue";
import HotPlaces from "@/components/Home/HotPlaces.vue";
import FeaturedExp from "@/components/Home/FeaturedExp.vue";

export default {
  components: {
    ForYou,
    Stories,
    TopJourney,
    HotPlaces,
    FeaturedExp
  },
  props: {
    msg: String
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
.Banner {
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("../../../assets/jack-young-B87VRCWmpqU-unsplash.jpg");
  height: 33vh;
  background-position: center;
  background-size: contain;
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
.search-section {
  margin-bottom: -22px;
  & input {
    box-shadow: 0 0 5pt 0.5pt #d3d3d3;
    height: 45px;
  }
}
// .search-bar {
//     border-radius: 10rem;
//     background: #fff;
//     box-shadow: 0 0 1rem rgba(0,0,0,0.15);
// }
</style>
