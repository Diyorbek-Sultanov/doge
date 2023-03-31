export interface IProductDetail {
	name: string
	img: string
	images: IImages[]
	price: string
	brand: string
	camera: string
	dioganal: string
}

interface IImages {
	smallImg: string | undefined
}
