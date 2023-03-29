export enum ECategory {
	BIT = 'Бытовая техника',
	TEL = 'Телефоны',
	KUX = 'Для кухня',
	AUTO = 'Авто',
	TV = 'ТВ',
	TELACC = 'Телефон акссесуары'
}

export interface ICategoryOption {
	label: ECategory
	value: string
}
