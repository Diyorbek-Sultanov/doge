export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IUser {
	tel: number
	password: string
	email: string
	name: string
	surname: string
}

export interface IAuthResponse extends ITokens {
	user: IUser
}
