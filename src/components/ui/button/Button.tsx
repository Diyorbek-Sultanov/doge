import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'

import { IButton } from './button.interface'
import styles from './button.module.scss'

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	...rest
}) => {
	return (
		<button className={clsx(styles.button, className)} {...rest}>
			{children}
		</button>
	)
}

export default Button
