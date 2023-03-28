export enum ECategory {
	BIT = 'Бытовая техника',
	TEL = 'Телефоны',
	KUX = 'Для кухня',
	AUTO = 'Авто акссесуары',
	TV = 'ТВ',
	TELACC = 'Телефон акссесуары'
}

export interface ICategoryOption {
	label: ECategory
	value: ECategory
}
