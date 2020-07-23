<template>
  <v-app>
    <Nav-bar></Nav-bar>
    <v-main class="app-content">
      <router-view></router-view>
    </v-main>
    <Footer-bar></Footer-bar>
  </v-app>
</template>

<script>
import Footer from './components/footer'
import Nav from './components/navbar'
export default {
  name: 'App',
  components: {
    'Footer-bar': Footer,
    'Nav-bar': Nav
  },
  data () {
    return {

    }
  },
  created(){
    console.log(this.$vuetify)
    this.appDetector()
  },
  methods:{
    appDetector(){
      //检测当前url,使用语言，设备类型，并且存入sessionStorage
      console.log('检测当前url,使用语言，设备类型，并且存入sessionStorage');
    }
  }
}
</script>
