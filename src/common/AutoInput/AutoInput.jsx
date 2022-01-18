import React from 'react';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const AutoInput = ({options, label, value, setValue, error}) => {
	const changeData = (e, data) => {
		setValue(data);
	}

	return(
		<Autocomplete value={value}
		onChange={(e, d) => changeData(e, d)} options={options} renderInput={(params) => <TextField {...params}
		label={label} error={!value && error && true} />} />
	)
}

export default React.memo(AutoInput);