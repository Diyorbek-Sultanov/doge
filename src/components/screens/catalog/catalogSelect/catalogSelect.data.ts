import { ECatalogSelect, ICatalogSelect } from './catalog.interface'

export const catalogSelectData: ICatalogSelect[] = [
	{
		label: ECatalogSelect.RATING,
		value: 'rating'
	},
	{
		label: ECatalogSelect.DESC,
		value: 'desc'
	},
	{
		label: ECatalogSelect.ASC,
		value: 'asc'
	}
]
