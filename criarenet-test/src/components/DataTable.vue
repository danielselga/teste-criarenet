<template>
<v-container>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600"
    >
      <v-card>
        <v-card-title class="text-h5">
          {{cardData.cargo}} - {{cardData.projeto}}
        </v-card-title>
        <v-card-title>Descrição das atividades</v-card-title>
        <v-card-text>{{cardData.atividades}}</v-card-text>
        <v-card-title>Descrição dos requisitos</v-card-title>
        <v-card-text>{{cardData.requisitos}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="error"
            text
            @click="dialog = false"
          >
            Deletar Vaga
          </v-btn>
          <v-btn
            color="success"
            text
            @click="dialog = false"
          >
            Sair
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  <!-- Table -->
    <v-app>
      <v-data-table
        :headers="headers"
        :items="data"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :search="search"
        class="elevation-1 secondary"
      >
        <template v-slot:top>
          <v-text-field
            v-model="search"
            label="Pesquisar"
            class="mx-4"
          ></v-text-field>
        </template>
          <!-- Info buton -->
          <template v-slot:item.info="props">
          <v-btn icon center large color="primary" @click="getTableDataBtn(props.item)">
            <v-icon>mdi-information-variant</v-icon>
          </v-btn>
        </template>
        <template v-slot:item.candidatos="props">
          <v-btn icon center large color="primary" @click="acessarCandidato(props.item)">
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-app>
</v-container>
</template>

<script>
export default {
    props: ['dataCandidatos', 'dataVagas'],
    data () {
    return {
      dialog: false,
      cardData: '',
      search: '',
      sortDesc: false,
      headers: this.$store.state.headers,
      data: this.$store.state.candidatos
    }
  },
  methods: {
    acessarCandidato(item) {
      console.log(item)
      const name = item.nome
      this.$store.dispatch('setUserData', name)
      const i = item.i
      this.$router.push({path: `/user/${i}`})
    },
    getTableDataBtn(item) {
      this.dialog = true
      this.cardData = item
    },
    toggleOrder () {
      this.sortDesc = !this.sortDesc
    },
    nextSort () {
      let index = this.headers.findIndex(h => h.value === this.sortBy)
      index = (index + 1) % this.headers.length
      this.sortBy = this.headers[index].value
    },
    filterOnlyCapsText (value, search, item) {
      return value != null &&
      search != null &&
      typeof value === 'string' &&
      value.toString().toLowerCase().indexOf(search) !== -1
      }
  },
    watch: {
      dataVagas: function getAllCandidates() {
        this.$store.dispatch('setCandidatos', this.dataVagas.vagas)
      }
    },
    mounted() {
        this.$store.dispatch('setHeader', [{
          text: "Cargo",
          align: "center",
          value: "cargo"
        },
        {
          text: "Projeto",
          align: "center",
          value: "projeto"
        },
        {
          text: "Motivo",
          align: "center",
          value: "motivo"
        },
        {
          text: "Faixa salarial",
          align: "center",
          value: "salario"
        },
        {
          text: "Data",
          align: "center",
          value: "data",
          sortable: false
        },
        { text: "Informações da vaga", value: "info", sortable: false, align: "center" }
        ]),

        this.$store.dispatch('setCandidatos', this.dataVagas.vagas)
      }
  }
</script>

<style>
/* Mobile */
 .table-container {
     margin: 0.5rem;
 }

 .theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr:last-child > th {
     background-color: #16c177;
 }

 .theme--light.v-data-table .v-data-footer {
     background-color: #16c177;
 }

</style>