import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import CadastrarContas from "../components/CadastrarContas.vue";
import TabelaDeContas from '../components/TabelaDeContas.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "/",
        component: CadastrarContas,
        name: "cadastro",
      },
      {
        path: "tabela-de-contas",
        component: TabelaDeContas,
        name: "tabela",
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
