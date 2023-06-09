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

const getZero = (num: number) => {
    let zero = ''
    for (let i = 0; i < num; i++) {
        zero += '0'
    }
    return zero
}

// 千分符格式化货币不四舍五入
export const currencyFormat = (value: number | string, decimal = 2) => {
    if (isNaN(Number(value))) {
        return value
    }
    const num = String(value).split('.')
    const num1 = num[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    let num2 = ''
    num[1] && (num2 = num[1].slice(0, decimal))
    num2.length < decimal && (num2 += getZero(decimal - num2.length))
    return num1 + '.' + num2
}