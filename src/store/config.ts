// 数据持久化配置
export const persist: any = {
    persist: {
        enabled: true,
        strategies: [
            {storage: localStorage}
        ]
    }
}

// 设置state通用方法
export const setState = (state: any, data: any) => {
    Object.keys(data).forEach(el => {
        state[el] = data[el]
    })
}