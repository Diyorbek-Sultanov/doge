export interface IAuth {
	tel: string
	password: string
}

export interface IAuthRegister extends IAuth {
	name: string
	email: string
	surname: string
}
