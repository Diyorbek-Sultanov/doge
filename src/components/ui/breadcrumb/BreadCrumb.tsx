import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import useBreadcrumbs from 'use-react-router-breadcrumbs'

import styles from './breadCrumb.module.scss'

const BreadCrumb: FC = () => {
	const breadcrumbs = useBreadcrumbs()

	return (
		<div className={styles.bread}>
			{breadcrumbs.map(({ breadcrumb, match }, index) => (
				<div key={match.pathname}>
					<NavLink
						to={match.pathname || ''}
						className={({ isActive }) => (isActive ? 'bread-active' : 'bread')}
					>
						{breadcrumb}
					</NavLink>
					{index < breadcrumbs.length - 1 && '|'}
				</div>
			))}
		</div>
	)
}

export default BreadCrumb
