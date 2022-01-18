import React from 'react';

import {useStyles} from '../../gstyle.js';

import Box from '@mui/material/Box';

import AutoInput from '../AutoInput/AutoInput.jsx';

const Filter = ({error, where, setWhere, from, setFrom, dateD, setDate, nightsD, setNights, people, setPeople, child, setChild,
whereArr, fromArr, datesArr, nightsArr, peoplesArr, childsArr}) => {
	const gstyle = useStyles();

	return(
		<Box sx={{p: '30px 20px', borderRadius: 2, background: '#fff', display: 'grid', gap: 2,
		gridTemplateColumns: {md: '3fr 3fr 3fr 2fr 2fr 2fr', sm: '1fr 1fr 1fr', xs: '1fr'}, mt: 4}} className={`${gstyle.w100}`}>
		    <AutoInput error={error} value={where} setValue={setWhere} options={whereArr} label="Откуда" />
		    <AutoInput error={error} value={from} setValue={setFrom} options={fromArr} label="Куда" />
		    <AutoInput error={error} value={dateD} setValue={setDate} options={datesArr} label="Дата" />
		    <AutoInput error={error} value={nightsD} setValue={setNights} options={nightsArr} label="Ночей" />
		    <AutoInput error={error} value={people} setValue={setPeople} options={peoplesArr} label="Взрослых" />
		    <AutoInput error={error} value={child} setValue={setChild} options={childsArr} label="Детей" />
		</Box>
	)
}

export default React.memo(Filter);