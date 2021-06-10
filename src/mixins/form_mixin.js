export default {
  data() {
    return {
      errors: {}
    };
  },
  methods: {
    fieldError(field) {
      return this.errors[field];
    },
    clearErrors() {
      this.errors = {};
    }
  },
  computed: {
    nonFieldErrors() {
      return this.errors["non_field_errors"];
    }
  }
};
