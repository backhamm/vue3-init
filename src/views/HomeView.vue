<template>
  <div class="home">
    {{commonState.lang}}
    <button @click="changeLang">click</button>
  </div>
</template>

<script lang="ts" setup>
import { useCommonStore } from "@/store/common";
const {commonState, setLang} = useCommonStore()

const changeLang = () => {
  setLang(commonState.lang === 'en' ? 'zh' : 'en')
}
</script>
