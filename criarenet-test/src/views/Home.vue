<template>
  <div>
    <v-app-bar class="primary" elevation="3"></v-app-bar>
    <v-card>
      <v-navigation-drawer
        app
        class="primary"
        v-model="drawer"
        :mini-variant.sync="mini"
        permanent
      >
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-title class="white--text"
            >CriareNet Admin</v-list-item-title
          >

          <v-btn icon @click.stop="mini = !mini">
            <v-icon color="white">mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item @click="goTo(item)" v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon color="white">{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="white--text" >{{
                item.title
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
      <v-content>
        <router-view></router-view>
      </v-content>
    <v-footer fixed class="primary">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Teste Crearenet - Daniel Ferreira Selga</strong>
      </v-col>
    </v-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Cadastrar contas", icon: "mdi-file-document", route: 'cadastro' },
        { title: "Contas cadastradas", icon: "mdi-account-group", route: 'tabela' },
      ],
      mini: true,
    };
  },
  methods: {
    goTo(item) {
      this.$router.push({name: item.route})
    }
  }
};
</script>

<style>
</style>