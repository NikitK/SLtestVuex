<template>
  <div>
    <v-data-table :headers="headers" class="elevation-1">
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
import {mapGetters} from 'vuex'
import listItem from "@/components/list-item.vue";

export default {
  components: {
    listItem
  },
  data() {
    return {
      tasks: [],
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
  api.list.get().then(response=>{
     this.tasks = response.data.data
   })
  },
  methods: {
    alertId(idToAlert) {
      alert("id=" + idToAlert);
    }
  },
  computed:{
    ...mapGetters(["userToken"])
  }
};
</script>

<style scoped>
.textAlign {
  text-align: left;
}
</style>