<template>
    <div class="m-nav">
        <v-dialog v-model="mNav" max-width="80%" overlay-opacity=".8"  origin='top right' fullscreen>
            <v-app-bar
            flat
            color='rgba(19, 19, 19, 0.966)'
            dark
            >
      <v-toolbar-title class="ml-5 center">导航菜单</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon @click="closeMnav">mdi-close</v-icon>
      </v-btn>
    </v-app-bar>
         <v-tabs
    fixed-tabs
    background-color="rgba(19, 19, 19, 0.966)"
    dark
    vertical
  >
     <v-tab >
                            首页
                        </v-tab>
                        <v-tab>
                            新基建
                        </v-tab>
                        <v-tab>
                            产品展示
                        </v-tab>
                        <v-tab>
                            区块链培训
                        </v-tab>
                        <v-tab>
                            新闻
                        </v-tab>
                        <v-tab>
                            关于我们
                        </v-tab>
                        <v-tab>
                            开发者平台
                        </v-tab>      
  </v-tabs>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data(){
        return{
            mNav:false
        }
    },
    methods:{
        closeMnav(){
            console.log('关闭弹出导航');
        }
    }
}
</script>

<style lang='scss' scoped>


</style>