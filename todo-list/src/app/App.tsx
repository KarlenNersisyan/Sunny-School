//* Components
import { Button } from '@/components/ui/button';

//* Style
import styles from './app.module.css';

const App = () => {
	return (
		<div className={styles.flex_center}>
			<span className='text-3xl font-bold underline text-red-500'>Hello World!</span>
			<span className={`${styles.name_block} text-2xl font-medium underline text-red-500`}> USER </span>

			<div>
				<Button>Click me</Button>
			</div>
		</div>
	);
};

export default App;
