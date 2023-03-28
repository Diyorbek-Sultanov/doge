import { FC } from 'react'
import { useParams } from 'react-router-dom'

const Catalog: FC = () => {
	const { name } = useParams<{ name?: string }>()

	console.log(name)

	return <div>Catalog</div>
}

export default Catalog
