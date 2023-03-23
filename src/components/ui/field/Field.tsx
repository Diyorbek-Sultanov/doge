import { forwardRef } from 'react'

import styles from './Field.module.scss'
import { IField } from './field.interface'

const Field = forwardRef<HTMLInputElement, IField>(
	({ error, type = 'text', placeholder, ...rest }, ref) => {
		return (
			<div className={styles.input}>
				<input ref={ref} type={type} placeholder={placeholder} {...rest} />
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
