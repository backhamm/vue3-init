import {_this} from "@/utils/vueUse";

export const copy = (data: any) => {
    return JSON.parse(JSON.stringify(data))
}

// 获取localStorage中的pinia数据
export const getStorageStore = (path: string) => {
    const arr = path.split('.')
    let data: any = JSON.parse(localStorage.getItem(arr[0]) || 'null')
    data && arr.slice(1).forEach(el => data = data[el])
    return data
}

export const setPageTitle = () => {
    const {meta: {title}, name} = _this.$route

    document.title = _this.$t(`navTitle.${title || name}`)
}