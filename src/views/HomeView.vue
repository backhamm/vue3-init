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
import {getList} from "@/http/home";

const {commonState, setLang} = useCommonStore()
const {userState, setUserInfo} = useUserStore()
const {t} = useI18n()

const username = computed(() => userState.userInfo.username)

const click = () => {
  setUserInfo({username: t('home.name')})
  setLang(commonState.lang === 'en' ? 'zh' : 'en')
  getList()
}
</script>
