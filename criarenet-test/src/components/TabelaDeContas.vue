<template>
  <div>
    <v-container
      ><h1 class="text-center my-5">Portal de contas</h1></v-container
    >
    <v-row class="d-flex justify-center">
      <v-col cols="8">
        <v-card>
          <v-card-title> </v-card-title>
          <v-data-table :headers="getHeaders" :items="getData"></v-data-table>
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
  },
};
</script>