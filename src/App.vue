<template>
  <v-app>
    <v-main>
      <top @menu="drawer=true"/>
      <top-menu v-if="$vuetify.breakpoint.mdAndUp"/>
      <mobile-menu v-else :value="drawer" @close="drawer=false"/>
      <week-deals class="mt-8"/>
    </v-main>
  </v-app>
</template>

<script>
import top from '@/views/top';
import topMenu from '@/views/menu';
import weekDeals from '@/views/weekDeals';
import mobileMenu from '@/views/mobileMenu';

export default {
  name: 'App',

  data(){
    return{
      drawer: false
    }
  },

  components: {
    top,
    topMenu,
    weekDeals,
    mobileMenu
  },
  

};
</script>
<style>
#app{font-family: 'Proxima Nova', sans-serif;}
input:focus{outline:none;}
.v-main{background:#F9F9F9;}

/* vuetify */
.v-btn{letter-spacing: normal;text-transform: none;}
.v-btn:before{background-color: none !important;}
@media (min-width: 1904px){.container {max-width: 1400px;}}
/* vuetify */
</style>