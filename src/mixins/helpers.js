import Vue from 'vue'
import { mapGetters } from "vuex"

Vue.mixin({
  computed: {
    // User from Vuex available globally like this.user
    ...mapGetters(['user']),
  },
  methods: {

    // Globally available methods can placed here

  },
});


// Use this filter if the property you need is in the object, which is a property of the parent object.
// Example usage in template:
// {{ category.product | getText('name', 'No name product') }} instead {{ category.product.name }}

Vue.filter('getText', (object, field = 'name', defaultText = '') => {
  return object && (typeof object[field] !== "undefined") ? object[field] : defaultText
})
