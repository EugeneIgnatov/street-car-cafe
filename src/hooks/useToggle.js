import { useState } from 'react';

function useToggle(initialValue = false) {
	const [value, setValue] = useState(initialValue);
	const toggleValue = () => {
		setValue(!value);
		console.log(value);
	};

	return [value, toggleValue];
}

export default useToggle;
