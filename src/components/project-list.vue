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
import axios from "axios";
import {mapGetters ,mapMutations} from 'vuex'
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
    // const token = localStorage.getItem("token");
    const URL = "https://api.grtsk-cmp.studio-luck.ru/api/common/tasks";
    const AuthStr = "Bearer " + this.userToken;
    axios
      .get(URL, { headers: { Authorization: AuthStr } })
      .then(response => {
        // If request is good...
        console.log(response.data);
        this.tasks = response.data.data;
        this.updateStore()
        console.log(this.tasks);
      })
      .catch(error => {
        if (error.response.status === 401) {
          console.log("error " + error);
          this.$router.push({ name: "Login" });
        }
      });
  },
  methods: {
    ...mapMutations(["updateStore"]),
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