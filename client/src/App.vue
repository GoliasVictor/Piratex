<template>
  <div id="app">
    <app-header></app-header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script > 
import AppHeader from "./components/app-header.vue"
import PageSeries from "./components/page-series.vue"
import PageSerie from "./components/page-serie.vue"
import {GetSeries, GetSerie} from "./Requests"
import VueRouter from 'vue-router';

export default {
  name: 'app',
  data () {
    return {}
  },
  components:{
    "app-header":AppHeader,
    "page-series":PageSeries,
    "page-serie":PageSerie
  },

  methods:{
    GetSeries,
    GetSerie
  },
  router : new VueRouter(),
  created : function(){
    const self = this;
    this.$router.addRoutes([
      {
        path: '/',
        component: PageSeries,
        props: () => ({
          series:self.GetSeries()
        })
      },
      {
        path:'/serie/:ID',
        component:PageSerie,
        props: (route) => ({
          serie:  self.GetSerie(route.params.ID)
        })
      }
    ])
  }
}
</script>

<style lang="scss">
  @import "./style.scss";
</style>
