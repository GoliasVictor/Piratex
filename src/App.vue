<template>
  <div id="app">
    <app-header></app-header>
    <main>  
      <router-view></router-view>
    </main>
  </div>
</template>

<script >
import DadosSeries from "./DadosSeries"
import AppHeader from "./components/app-header.vue"
import PageSeries from "./components/page-series.vue"
import PageSerie from "./components/page-serie.vue"

import VueRouter from 'vue-router';   
 
export default {
  name: 'app',
  data () {
    return {
      Series:DadosSeries, 
    }
  },
  components:{
    "app-header":AppHeader,
    "page-series":PageSeries,
    "page-serie":PageSerie
  },

  methods:{ 
    serieByID(ID){
      console.log(ID);
      return this.Series.find((s)=> s.ID == ID); 
    }
  },
  router : new VueRouter(),
  created : function(){
    const self = this;
    this.$router.addRoutes([
      {
        path: '/',
        component: PageSeries,
        props: () => ({
          series:self.Series
        })
      },
      {
        path:'/serie/:ID',
        component:PageSerie,
        props: function(route) {
          return {
            serie:self.serieByID(route.params.ID)
          }
        }
      }
    ])
  }
}
</script>

<style lang="scss">
  @import "./style.scss";
</style>
