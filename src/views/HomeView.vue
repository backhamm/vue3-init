<template>
  <div class="home">
    {{commonState.lang}}
    <button @click="click">click</button>
    {{userState.username}}
  </div>
</template>

<script lang="ts" setup>
import {useCommonStore} from "@/store/common";
import {useUserStore} from "@/store/user";

const {commonState, setLang} = useCommonStore()
const {userState, setUserState} = useUserStore()

const click = () => {
  setUserState({username: commonState.lang})
  setLang(commonState.lang === 'en' ? 'zh' : 'en')
}
</script>
