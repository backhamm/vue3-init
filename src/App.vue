<template>
  <nav>
    <router-link to="/">Home{{a}}</router-link> |
    <router-link to="/about">{{ $t('common.lang') }}{{ $t('home.home') }}</router-link>
  </nav>
  <router-view/>
</template>

<script lang="ts" setup>
import {computed, onMounted, reactive} from "vue";
const obj: {a: number} = reactive({a: 1})

onMounted(() => {
  setTimeout(() => {
    obj.a++
  }, 2000)
})
const a = computed(() => obj.a)
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
