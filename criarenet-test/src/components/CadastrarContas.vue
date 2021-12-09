<template>
  <div>
    <v-container>
      <v-row class="d-flex justify-center my-10 mb-16">
        <v-col sm="8" xl="4">
          <v-container class="text-center my-5"><h1>Cadastrar conta</h1></v-container>
          <v-card class="mb-16">
            <v-container class="blue-grey lighten-5 mb-16">
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  prepend-inner-icon="mdi-account"
                  filled
                  v-model="form.nome"
                  label="Nome completo"
                  required
                ></v-text-field>

                <v-text-field
                  prepend-inner-icon="mdi-gmail"
                  filled
                  v-model="form.email"
                  label="E-mail"
                  required
                ></v-text-field>

                <v-text-field
                  prepend-inner-icon="mdi-card-account-details-outline"
                  filled
                  label="CPF"
                  v-mask="'###.###.###-##'"
                  placeholder="123.456.789-11"
                  required
                  v-model="form.cpf"
                ></v-text-field>

                <v-text-field
                  prepend-inner-icon="mdi-phone"
                  filled
                  label="Telefone"
                  placeholder="(##) ####-####"
                  v-mask="'(##) #####-####'"
                  required
                  v-model="form.phone"
                ></v-text-field>

                <v-container class="d-flex justify-center">
                  <v-btn color="success" class="mr-4" @click.prevent="getUser">
                    Cadastrar usuário
                  </v-btn>
                </v-container>
              </v-form>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import store from '../store/index'

export default {
  data() {
    return {
      form: {
        id: '',
        nome: '',
        email: '',
        cpf: '',
        phone: ''
      }
    }
  },
  methods: {
    getUser() {
      this.form.id = this.form.id++ 
      store.dispatch('setForm', this.form)
      this.form.nome = ''
      this.form.email = ''
      this.form.cpf = ''
      this.form.phone = ''
    }
  },
};
</script>

<style>
</style>