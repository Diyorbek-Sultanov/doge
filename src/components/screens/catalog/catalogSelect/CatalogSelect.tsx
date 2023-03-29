import { FC } from 'react'
import Select from 'react-select'

import { catalogSelectData } from './catalogSelect.data'

const CatalogSelect: FC = () => {
	return (
		<Select
			isSearchable={false}
			options={catalogSelectData}
			classNamePrefix='catalog-select'
			placeholder='Сортировка'
		/>
	)
}

export default CatalogSelect
