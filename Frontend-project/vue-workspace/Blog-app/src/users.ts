export interface NewUser {
    name: string,
    password: string
}

export interface User extends NewUser {
    id: string
}