<template>
  <div class="home">
    {{commonState.lang}}
    <button @click="setLang(commonState.lang === 'en' ? 'zh' : 'en')">click</button>
  </div>
</template>

<script lang="ts" setup>
import {useCommonStore} from "@/store/common";
const {commonState, setLang} = useCommonStore()
</script>
