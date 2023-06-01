export interface CommonStateT {
    lang: string
}

export interface UserInfoT {
    username?: string
}

export interface UserStateT {
    userInfo: UserInfoT
    [key: string]: any
}