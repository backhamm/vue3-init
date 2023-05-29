<template>
  <nav><router-link to="/">Home</router-link>{{ getArr }}</nav>
  <router-view />
</template>

<script lang="ts" setup>
import { computed, onMounted, reactive } from "vue";
const count = reactive<{ a: number }>({ a: 1 });

onMounted(() => {
  setTimeout(() => {
    count.a++;
  }, 2000);
});

const getArr = computed(() => {
  return count.a + 1;
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
