<template>
    <div class="about">
        <!-- <v-header />
        <v-sidebar /> -->
        <div class="content-box" :class="{ 'content-collapse': collapse }">
            <v-tags></v-tags>
            <div class="content">
                <router-view v-slot="{ Component }">
                    <transition name="move" mode="out-in">
                        <keep-alive :include="tagsList">
                            <component :is="Component" />
                        </keep-alive>
                    </transition>
                </router-view>
            </div>
        </div>
    </div>
</template>
<script>
import { computed } from "vue";
import  dataService  from "../utils/request"; // 直接引用axios 测试下
// import vHeader from "../components/Header.vue";
// import vSidebar from "../components/Sidebar.vue";
// import vTags from "../components/Tags.vue";
export default {
    components: {
      //   vHeader,
      //   vSidebar,
      //   vTags,
    },
    setup() {
        const tagsList = computed(() =>{}
            // store.state.tagsList.map((item) => item.name)
        );
        const collapse = computed(() => {});
        dataService.get('/mytest').then(data=>
        {
               console.log(data);
        }).catch(err=>{
               console.error(err);

        });



        return {
            tagsList,
            collapse,
        };
    },
};
</script>
