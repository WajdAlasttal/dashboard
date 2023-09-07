<template>
  <div class="tabs">
    <ul class="tabs-header">
        <li v-for="title in tabTitles" :key="title" :class="{selected : title == selectedTab}" @click="selectedTab=title" >{{ title }}</li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
import {provide, ref} from 'vue';
export default {
    setup(props,{slots}){
        const tabTitles = ref(slots.default().map((tab)=>tab.props.title))
        const selectedTab = ref(tabTitles.value[0])

        provide('selectedTab',selectedTab)
        return{
            selectedTab,
            tabTitles
        }
    }
}
</script>

<style scoped>
.tabs-header{
    list-style: none;
    display: flex;
    justify-content: space-between;

}
.tabs-header li{
    padding: 1rem 0;
}
.tabs-header li.selected{
    color: #27A376;
    border-bottom: 2px solid #27A376;
}
</style>