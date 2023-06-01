// 数据持久化配置
export const persist: any = {
    persist: {
        enabled: true,
        strategies: [
            {storage: localStorage}
        ]
    }
}