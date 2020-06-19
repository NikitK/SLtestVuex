import {mapActions} from 'vuex'


var list = {
  data() {
    return {
      // Set default pagination settings
      list: {
        pagination: {
          page: 3,
          rowsPerPage: 10,
          totalItems: 0,
          current_page: 0,
          per_page: 0,
          last_page: 0,
        },
        // response.data will be saved here
        items: [],
      }
    }
  },
  watch: {
    // Trigger request to load data from server when pagination, filter or sort is changed
    'list.pagination.page'() {
      this.load()
    },
    'list.pagination.rowsPerPage'() {
      this.load()
    },
    'list.pagination.sortBy' () {
      this.load()
    },
    filter: {
      handler() {
        this.load()
      },
      deep: true
    }
  },
  mounted() {
    //Use method load() in this hook to get list data when page if loaded.
    //this.load()
  },
  methods: {
    // Method from vuex to make loading
    ...mapActions(['queue']),
    // Call this method to load data from server
    load() {
      let params = {
        page: this.list.pagination.page,
        limit: this.list.pagination.rowsPerPage
      }

      if (typeof this.collectSort === "function") {
        params = this.collectSort(params)
      }

      if (typeof this.collectFilter === "function") {
        params = this.collectFilter(params)
      }
      this.getData(params)
    },
    // Save data from server and set new pagination
    getData(params) {
      return this.getList(params).then((response) => {
        this.list.items = this.onLoadTransform(response.data.data ? response.data.data : response.data)
        this.list.pagination.totalItems = response.data.total ? response.data.total : response.data.length
        this.list.pagination.current_page = response.data.current_page
        this.list.pagination.per_page = response.data.per_page
        this.list.pagination.last_page = response.data.last_page
      })
    },
    getList(params) {
      return this.$api.list.get(params)
    },
    onLoadTransform(data) {
      return data
    }
  }
}

export default list
