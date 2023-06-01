<template>
  <div class="home">
    lang：{{commonState.lang}}
    <button @click="click">click</button>
    username：{{username}}
  </div>
</template>

<script lang="ts" setup>
import {useCommonStore} from "@/store/common";
import {useUserStore} from "@/store/user";
import {computed} from "vue";
import {useI18n} from "vue-i18n";

const {commonState, setLang} = useCommonStore()
const {userState, setUserInfo} = useUserStore()
const {t} = useI18n()

const username = computed(() => userState.userInfo.username)

const click = () => {
  setLang(commonState.lang === 'en' ? 'zh' : 'en')
  setUserInfo({username: t('home.name')})
}
</script>
