export interface IProductDetail {
	name: string
	images: IImages[]
	price: string
	brand: string
	camera: string
	dioganal: string
	id: number
}

interface IImages {
	smallImg: string | undefined
}
