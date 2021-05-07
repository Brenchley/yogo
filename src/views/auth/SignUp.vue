<template>
  <div class="">
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="row authBanner d-flex align-items-end text-center">
            <div class="col-6 mb-1">
              <router-link to="/login" class="link">Sign In</router-link>
            </div>
            <div class="col-6" style="border-bottom: 4px solid #1E5AFF;">
              <router-link to="/register" class="link">Sign Up</router-link>
            </div>
          </div>
          <div class="p-2 d-flex justify-content-between mt-4">
            <div class="">
              <h3 class="mt-0" style="font-weight:900;">New <br />Account</h3>
            </div>
            <div class="text-center avatarSec">
              <img
                class="img-fluid rounded-circle"
                src="@/assets/112.jpeg"
                style="width:3em;height:3em;"
                alt="User"
              />
              <p class="mb-0 mt-1" style="font-size:11px;">
                <small class="text-muted"
                  >Upload your<br />
                  profile picture</small
                >
              </p>
            </div>
          </div>
          <div class="">
            <RegForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import RegForm from "@/components/Auth/RegisterForm.vue";
export default {
  components: {
    RegForm
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
.authBanner {
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("../../assets/jack-young-B87VRCWmpqU-unsplash.jpg");
  min-height: 25vh;
}
.link {
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
}
</style>
