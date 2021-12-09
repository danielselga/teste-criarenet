<template>
  <div>
    <v-container
      ><h1 class="text-center my-5">Portal de usuários</h1></v-container
    >
    <v-row class="d-flex justify-center">
      <v-col cols="8">
        <v-card v-if="getLocalStorageData.length">
          <v-data-table
            :headers="getHeaders"
            :items="data || getLocalStorageData"
          >
            <template v-slot:item.delete="props">
              <v-btn icon center color="error" @click="getItemData(props.item)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
        <div v-else>carregando</div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import store from "../store/index";

export default {
  data() {
    return {
      data: "",
    };
  },
  methods: {
    async getItemData(item) {
      console.log(item);
      try {
        await fetch(`http://localhost:3000/data/${item.id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(item),
        });

        const data = await fetch("http://localhost:3000/data");
        const res = await data.json();
        this.data = await res;
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    getHeaders() {
      return store.getters.headers;
    },
    getData() {
      return store.getters.data;
    },
    getLocalStorageData() {
      return JSON.parse(localStorage.getItem("data"));
    },
  },
  created: async function () {
    try {
      const data = await fetch("http://localhost:3000/data");
      const res = await data.json();
      this.data = await res;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style >
.theme--light.v-data-table .v-data-footer {
  border-top: thin solid rgba(0, 0, 0, 0.12);
  background-color: #2196f3;
}

#app
  > div
  > div
  > main
  > div
  > div
  > div.row.d-flex.justify-center
  > div
  > div
  > div
  > div.v-data-table__wrapper
  > table
  > thead {
  background-color: #2196f3;
}

#app
  > div
  > div
  > main
  > div
  > div
  > div.row.d-flex.justify-center
  > div
  > div
  > div
  > div.v-data-table__wrapper
  > table
  > tbody
  > tr:nth-of-type(odd) {
  background-color: #ecebeb;
}
</style>