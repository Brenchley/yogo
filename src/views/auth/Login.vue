<template>
  <div class="">
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="row authBanner d-flex align-items-end text-center">
            <div class="col-6" style="border-bottom: 4px solid #1E5AFF;">
              <router-link to="/login" class="link">Sign In</router-link>
            </div>
            <div class="col-6 mb-1">
              <router-link to="/register" class="link">Sign Up</router-link>
            </div>
          </div>
          <div class="p-2 d-flex justify-content-between mt-4">
            <div class="">
              <p class="mb-0">Welcome back,</p>
              <h3 class="mt-0" style="font-weight:900;">Wanyonyi</h3>
              <router-link to="/"
                ><small>Oh no, this is not me</small></router-link
              >
            </div>
            <div class="avatarSec">
              <img
                class="img-fluid rounded-circle"
                src="@/assets/112.jpeg"
                style="width:3em;height:3em;"
                alt="User"
              />
            </div>
          </div>
          <div class="">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LoginForm from "@/components/Auth/LoginForm.vue";
export default {
  components: {
    LoginForm
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
@import "../../scss/styles";

.authBanner {
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("../../assets/jack-young-B87VRCWmpqU-unsplash.jpg");
  // background: #141f6b;
  min-height: 25vh;
}
.link {
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
}
</style>
