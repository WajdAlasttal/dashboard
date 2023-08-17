<template>
  <h2>{{ header }}</h2>
  <p>{{ body }}</p>
</template>

<script>
export default {
    props:{
        header:String,
        body:String
    }
};
</script>

<style>
</style>