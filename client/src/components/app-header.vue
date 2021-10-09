<template> 
   <header>
      <section>
         <router-link to="/">
         	<figure><img src="/src/assets/Logo.png" alt=""></figure>
         </router-link>
         <div id="SearchBar">
            <input v-model="nomeSerie" type="search" value="dada" >
            <i class="material-icons" v-on:click="Procurar">search</i>
         </div>
      </section>
   </header>
</template> 
<script>
export default {
   data:() => ({
      nomeSerie:""
   }),
   methods:{
      Procurar(){
			this.$router.push({
            path:`/pesquisa`,
            query:{
               nome:this.nomeSerie
            }
         });
      }
   }
}
</script>
 