<template>
  <nav>
    <v-app-bar absolute color="grey darken-4" dark collapse-on-scroll class="px-9">
        <v-app-bar-nav-icon>33</v-app-bar-nav-icon>
           <v-spacer></v-spacer>
        <div class="hidden-md-and-down">
            <v-card class="d-flex align-end mr-5" flat>
                <v-tabs
                    show-arrows
                    centered
                    dark
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
            </v-card>   
        </div>
        <div class="d-lg-none">
            <v-icon @click="toggleMenu">mdi-menu</v-icon>    
        </div> 
    </v-app-bar>
  </nav>
</template>

<script>
export default {
    methods:{
        toggleMenu(){
            console.log('弹出移动端菜单')
        }
    }
}
</script>

<style>

</style>
