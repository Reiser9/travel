import React from 'react';

import {useStyles} from '../../../gstyle.js';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import {IMaskInput} from 'react-imask';

const TextMaskDate = React.forwardRef(function TextMaskCustom(props, ref) {
	const {onChange, ...other} = props;
    return (
	    <IMaskInput {...other} mask="$0/%0/#000" definitions={{
	        '#': /[1-2]/,
	        '$': /[0-3]/,
	        '%': /[0-1]/,
	      }} inputRef={ref} onAccept={(value) => onChange({target: {name: props.name, value}})} overwrite
	    />
    );
});

const TextMaskSeries = React.forwardRef(function TextMaskCustom(props, ref) {
	const {onChange, ...other} = props;
    return (
	    <IMaskInput {...other} mask="0000" inputRef={ref} onAccept={(value) => onChange({target: {name: props.name, value}})} overwrite
	    />
    );
});

const TextMaskNumber = React.forwardRef(function TextMaskCustom(props, ref) {
	const {onChange, ...other} = props;
    return (
	    <IMaskInput {...other} mask="000 000" inputRef={ref} onAccept={(value) => onChange({target: {name: props.name, value}})} overwrite
	    />
    );
});

const Ticket = () => {
	const gstyle = useStyles();

	const [name, setName] = React.useState('');
	const [surname, setSurname] = React.useState('');
	const [fathername, setFathername] = React.useState('');
	const [sex, setSex] = React.useState('');

	const [birthday, setBirthday] = React.useState('');
	const [country, setCountry] = React.useState('Россия');

	const [series, setSeries] = React.useState('');
	const [number, setNumber] = React.useState('');
	const [dateGet, setDateGet] = React.useState('');
	const [term, setTerm] = React.useState('');
	const [issued, setIssued] = React.useState('');

	return(
		<Box sx={{border: '1px solid #d7d7d7', p: 2, flexDirection: {sm: 'row', xs: 'column'}}} className={`${gstyle.w100} ${gstyle.flexbetstart}`}>
			<Box sx={{width: {sm: '45%', xs: '100%'}}} className={`${gstyle.flexstart}`}>
				<Typography variant="h6" component="p">
					Данные туриста:
				</Typography>

				<TextField sx={{mt: 2}} className={`${gstyle.w100}`} label="Фамилия" value={surname}
				onChange={(e) => setSurname(e.target.value)} />

				<TextField sx={{mt: 2}} className={`${gstyle.w100}`} label="Имя" value={name} onChange={(e) => setName(e.target.value)} />

				<TextField sx={{mt: 2}} className={`${gstyle.w100}`} label="Отчество" value={fathername}
				onChange={(e) => setFathername(e.target.value)} />

				<FormControl sx={{mt: 2}} className={`${gstyle.w100}`}>
				    <InputLabel>Пол</InputLabel>
					<Select sx={{minWidth: 120}} value={sex} label="Пол" onChange={(e) => setSex(e.target.value)} >
					    <MenuItem value={10}>Мужской</MenuItem>
					    <MenuItem value={20}>Женский</MenuItem>
					</Select>
				</FormControl>

				<FormControl sx={{mt: 2}} className={`${gstyle.w100}`}>
				    <InputLabel>Дата рождения</InputLabel>
					<OutlinedInput className={`${gstyle.w100}`} variant="contained" label="Дата рождения" value={birthday}
				onChange={(e) => setBirthday(e.target.value)} inputComponent={TextMaskDate} />
				</FormControl>

				<TextField sx={{mt: 2}} className={`${gstyle.w100}`} label="Гражданство" value={country}
				onChange={(e) => setCountry(e.target.value)} />
			</Box>

			<Box sx={{width: {sm: '45%', xs: '100%'}, mt: {sm: 0, xs: 2}}} className={`${gstyle.flexstart}`}>
				<Typography variant="h6" component="p">
					Заграничный паспорт:
				</Typography>

				<FormControl sx={{mt: 2}} className={`${gstyle.w100}`}>
				    <InputLabel>Серия</InputLabel>
					<OutlinedInput className={`${gstyle.w100}`} variant="contained" label="Серия" value={series}
					onChange={(e) => setSeries(e.target.value)} inputComponent={TextMaskSeries} />
				</FormControl>

				<FormControl sx={{mt: 2}} className={`${gstyle.w100}`}>
				    <InputLabel>Номер</InputLabel>
					<OutlinedInput className={`${gstyle.w100}`} variant="contained" label="Номер" value={number}
					onChange={(e) => setNumber(e.target.value)} inputComponent={TextMaskNumber} />
				</FormControl>

				<FormControl sx={{mt: 2}} className={`${gstyle.w100}`}>
				    <InputLabel>Дата выдачи</InputLabel>
					<OutlinedInput className={`${gstyle.w100}`} variant="contained" label="Дата выдачи" value={dateGet}
					onChange={(e) => setDateGet(e.target.value)} inputComponent={TextMaskDate} />
				</FormControl>

				<FormControl sx={{mt: 2}} className={`${gstyle.w100}`}>
				    <InputLabel>Действует до</InputLabel>
					<OutlinedInput className={`${gstyle.w100}`} variant="contained" label="Действует до" value={term}
				onChange={(e) => setTerm(e.target.value)} inputComponent={TextMaskDate} />
				</FormControl>

				<TextField sx={{mt: 2}} className={`${gstyle.w100}`} label="Кем выдан" value={issued}
				onChange={(e) => setIssued(e.target.value)} />
			</Box>
		</Box>
	)
}

export default React.memo(Ticket);