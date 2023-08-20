<template>
  <h2 class="mb-4">{{ header }}</h2>
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

<style scoped>
h2{
  font-size: 48px;
}
p{
  color: #A0AEC0;
}
</style>