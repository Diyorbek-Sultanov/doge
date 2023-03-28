import { FC } from 'react'

import Heading from '@/components/ui/heading/Heading'

import Artel from '@/assets/images/artel.svg'
import Bosch from '@/assets/images/bosch.svg'
import HotPoint from '@/assets/images/hotpoint.svg'
import Hp from '@/assets/images/hp.svg'
import Jbl from '@/assets/images/jbl.svg'
import Samsung from '@/assets/images/samsung.svg'
import TpLink from '@/assets/images/tp-link.svg'
import Xiaomi from '@/assets/images/xiaomi.svg'

import styles from './home.module.scss'

const Brands: FC = () => {
	return (
		<>
			<Heading>Brands</Heading>
			<div className={styles.brands}>
				<div className={styles.wrapper}>
					<div>
						<img src={Xiaomi} alt='xiaomi' />
					</div>
					<div>
						<img src={Hp} alt='hp' />
					</div>
					<div>
						<img src={Artel} alt='artel' />
					</div>
					<div>
						<img src={Jbl} alt='jbl' />
					</div>
					<div>
						<img src={HotPoint} alt='hotpoint' />
					</div>
					<div>
						<img src={Bosch} alt='bosch' />
					</div>
					<div>
						<img src={TpLink} alt='tp-ling' />
					</div>
					<div>
						<img src={Samsung} alt='samsung' />
					</div>
				</div>
			</div>
		</>
	)
}

export default Brands
