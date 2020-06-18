<template>
  <div>
    <v-data-table 
    :headers="headers"
    :options.sync="list.pagination"
      :server-items-length="tasks.length"
    class="elevation-1">
      <template v-slot:body>
        <tbody class="textAlign">
          <listItem v-for="item in tasks" :item="item" :key="item.id" @alert="alertId" />
        </tbody>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import * as api from '@/api/'
import listItem from "@/components/list-item.vue";

export default {
  components: {
    listItem
  },
  data() {
    return {
      tasks: [],
       loading: true,
             list: {
        pagination: {
          page: 3,
          rowsPerPage: 10,
          totalItems: 0,
          current_page: 0,
          per_page: 0,
          last_page: 0,
        }
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
  beforeMount() {

    let params = this.list.pagination
    console.log(params)
  api.list.get(params).then(response=>{
     this.tasks = response.data.data
   })
  },
  //     watch: {
  //     options: {

  //       deep: true,
  //     },
  //   },
    // mounted () {
    //   this.getDataFromApi()
    //     .then(data => {
    //       this.desserts = data.items
    //       this.totalDesserts = data.total
    //     })
    // },
  methods: {
    alertId(idToAlert) {
      alert("id=" + idToAlert);
    }
  }
};
</script>

<style scoped>
.textAlign {
  text-align: left;
}
</style>