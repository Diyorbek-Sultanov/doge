import { forwardRef } from 'react'

import { IField } from './field.interface'
import styles from './field.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
	({ error, type = 'text', className, placeholder, ...rest }, ref) => {
		return (
			<div className={styles.input}>
				<input
					className={className}
					ref={ref}
					type={type}
					placeholder={placeholder}
					{...rest}
				/>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
