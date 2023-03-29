export enum ECatalogSelect {
	RATING = 'Популярности',
	ASC = 'По падения цены',
	DESC = 'По возрастание цены'
}

export interface ICatalogSelect {
	label: ECatalogSelect
	value: string
}
