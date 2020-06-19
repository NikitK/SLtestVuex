<template>
  <div>
    <v-data-table
      :headers="headers"
      :options.sync="list.pagination"
      :items="list.tasks"
      :server-items-length="list.pagination.totalItems"
      :footer-props="footerProps"
      class="elevation-1"
    >
      <template v-slot:body>
        <tbody class="textAlign">
          <listItem v-for="item in list.tasks" :item="item" :key="item.id" @alert="alertId" />
        </tbody>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import listItem from "@/components/list-item.vue";

export default {
  components: {
    listItem
  },
  data() {
    return {
      footerProps:{
        'items-per-page-options': [5, 10,15, 50],
        'rows-per-page-items':5,
        'showCurrentPage':true,
        'multiSort':true,
        'showFirstLastPage':true
      },
      loading: true,
      list: {
        pagination: {
          page: 1,
          itemsPerPage: 10,
          rowsPerPage:10,
          totalItems: 0,
          current_page: 0,
          per_page: 0,
          last_page: 0
        },
        // response.data will be saved here
        tasks: []
      },
      headers: [
        {
          text: "Tasks",
          align: "start",
          sortable: false,
          value: "name"
        },
        { text: "Description", value: "description" },
        { text: "Platform", value: "platform" },
        { text: "Price", value: "price" },
        { text: "Title", value: "title" }
      ]
    };
  },
  watch: {
    "list.pagination.page"() {
      this.load();
    },
    "list.pagination.itemsPerPage"() {
      this.load();
    },
      "list.pagination.rowsPerPage"() {
      this.load();
    },
    "list.pagination.sortBy"() {
      this.load();
    },
    filter: {
      handler() {
        this.load();
      }
    },
    deep: true
  },
  methods: {
    load() {
      let params = {
        page: this.list.pagination.page,
        text: 'test',
        limit: this.list.pagination.itemsPerPage
      };

      if (typeof this.collectSort === "function") {
        params = this.collectSort(params);
      }

      if (typeof this.collectFilter === "function") {
        params = this.collectFilter(params);
      }
      this.getData(params);
    },
    // Save data from server and set new pagination
    getData(params) {
      return this.getList(params).then(response => {
        this.list.tasks = this.onLoadTransform(
          response.data.data ? response.data.data : response.data
        );
        this.list.pagination.totalItems = response.data.total
          ? response.data.total
          : response.data.length;
        this.list.pagination.current_page = response.data.current_page;
        this.list.pagination.per_page = response.data.per_page;
        this.list.pagination.last_page = response.data.last_page;
        this.list.pagination.rowsPerPage = response.data.per_page
      });
    },
    getList(params) {
      return this.$api.list.get(params);
    },
    onLoadTransform(data) {
      return data;
    },
    alertId(idToAlert) {
 
      alert("id=" + idToAlert);
    },
    comsoleId() {
 console.log(this.list.pagination.current_page)
    }
    
  }
};
</script>

<style scoped>
.textAlign {
  text-align: left;
}
</style>