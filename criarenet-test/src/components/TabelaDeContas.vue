<template>
  <div>
    <v-container
      ><h1 class="text-center my-5">Portal de contas</h1></v-container
    >
    <v-row class="d-flex justify-center">
      <v-col cols="8">
        <v-card>
          <v-data-table :headers="getHeaders" :items="getLocalStorageData || getData"></v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import store from "../store/index";

export default {
  data() {
    return {
      
    };
  },
  computed: {
    getHeaders() {
      return store.getters.headers;
    },
    getData() {
      return store.getters.data;
    },
    getLocalStorageData() {
      return JSON.parse(localStorage.getItem('data'))
    }
  },
  created: () => {
    console.log(JSON.parse(localStorage.getItem('data')))
    store.dispatch("setData");
  }
};
</script>

<style >
.theme--light.v-data-table .v-data-footer {
    border-top: thin solid rgba(0, 0, 0, 0.12);
    background-color: #2196F3
}

#app > div > div > main > div > div > div.row.d-flex.justify-center > div > div > div > div.v-data-table__wrapper > table > thead {
  background-color: #2196F3;
}

#app > div > div > main > div > div > div.row.d-flex.justify-center > div > div > div > div.v-data-table__wrapper > table > tbody > tr:nth-of-type(odd) {
  background-color: #ecebeb;
}


</style>