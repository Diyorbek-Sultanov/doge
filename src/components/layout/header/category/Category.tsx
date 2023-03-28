import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'

import { categoryOption } from './category.data'

const Category: FC = () => {
	const navigate = useNavigate()

	const onChange = (newValue: any) => {
		navigate(`/catalog/${newValue.value}`)
	}

	return (
		<Select
			options={categoryOption}
			classNamePrefix='category-select'
			placeholder='Категория'
			isSearchable={false}
			onChange={onChange}
		/>
	)
}

export default Category
