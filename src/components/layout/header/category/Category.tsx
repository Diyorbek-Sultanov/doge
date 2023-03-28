import { FC } from 'react'
import Select from 'react-select'

import { categoryOption } from './category.data'

const Category: FC = () => {
	return (
		<Select
			options={categoryOption}
			classNamePrefix='category-select'
			placeholder='Категориесь'
			isSearchable={false}
		/>
	)
}

export default Category
