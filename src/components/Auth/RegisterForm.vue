<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="submit">
          <div class="form-group">
            <label>Email</label>
            <input
              type="email"
              class="form-control"
              v-model.trim="form.email"
              required
            />
          </div>
          <div class="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              class="form-control"
              v-model.trim="form.username"
              required
            />
          </div>
          <div class="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              class="form-control"
              v-model.trim="form.password"
              required
            />
          </div>
          <button
            type="submit"
            class="mt-4 btn btn-block btn-primary text-uppercase"
          >
            {{ registerTxt }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import formMixin from "@/mixins/form_mixin";

export default {
  name: "RegisterForm",
  mixins: [formMixin],
  components: {},
  data() {
    return {
      loading: false,
      form: {
        email: "",
        username: "",
        password: ""
      }
    };
  },
  computed: {
    registerTxt() {
      return this.loading ? "Creating Account..." : "Create Account";
    }
  },
  methods: {
    submit() {
      if (this.loading) return;
      this.loading = true;

      if (this.form.email !== "") {
        this.redirectToDashboard();
      } else {
        this.loading = false;
      }
    },
    redirectToDashboard() {
      let next = "app/profile/interests";

      window.location.href = next;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../scss/styles";

a {
  text-decoration: none;
}

/* LABEL ======================================= */
label {
  color: rgb(138, 138, 138);
  padding: 0;
  line-height: 14px;
  font-size: 14px;
  font-weight: 600;
}
.form-control {
  min-height: auto;
}
.form-control:focus {
  background: #fff;
  box-shadow: none;
}
</style>
