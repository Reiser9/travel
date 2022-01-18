import React from 'react';

import {useStyles} from '../../../gstyle.js';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import {IMaskInput} from 'react-imask';

import AutoInput from '../../../common/AutoInput/AutoInput.jsx';
import Ticket from '../Ticket/Ticket.jsx';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const TextMaskPhone = React.forwardRef(function TextMaskCustom(props, ref) {
	const {onChange, ...other} = props;
    return (
	    <IMaskInput {...other} mask="+7 (000) 000 00-00" inputRef={ref} onAccept={(value) => onChange({target: {name: props.name, value}})}
	    overwrite
	    />
    );
});

const TourCard = ({setCurrentCity, setCurrentPeople, setCurrentChild, setSuccess, phone, setPhone, mail, setMail, data, open, where, setWhere, from, setFrom, dateD, setDate, nightsD, setNights, people, setPeople, child, setChild, error,
whereArr, fromArr, datesArr, nightsArr, peoplesArr, childsArr, clear, setCurrentPrice, setCurrentNight, setCurrentDate, setCurrentCountry}) => {
	const gstyle = useStyles();
	const {name, desc, img, rating, price, date, country, nights} = data;
	const [modal, setModal] = React.useState(false);
	const [dataEmpty, setDataEmpty] = React.useState(true);
	const [currentsPrice, setCurrentsPrice] = React.useState(price);
	const [buy, setBuy] = React.useState(false);
	const [humans, setHumans] = React.useState([]);

	const [validContact, setValidContact] = React.useState(false);

	React.useEffect(() => {
		if(where && people && child){
			setDataEmpty(false);
		}
		else{
			setDataEmpty(true);
		}
		closeBuy();
	}, [where, people, child]);

	React.useEffect(() => {
		if(child !== 0){
			setCurrentsPrice(parseInt(price) * parseInt(people?.label) + parseInt(child?.label) * (parseInt(price)/2));
		}
		else{
			setCurrentsPrice(parseInt(price) * parseInt(people?.label));
		}
	}, [people, child, price]);

	const modalOpen = () => {
		setModal(true);
	}

	const modalClose = () => {
		setModal(false);
	}

	const chooseTour = () => {
		modalOpen();
	}

	const buyTiket = () => {
		const countPeople = parseInt(people?.label) + parseInt(child?.label);
		let tempArr = [];
		for(let i = 0; i < countPeople; i++){
			tempArr.push(i);
		}
		setHumans(tempArr);
		setBuy(true);
	}

	const closeBuy = () => {
		setBuy(false);
	}

	const totalBuy = () => {
		if(phone.length > 17 && mail){
			setCurrentPrice(currentsPrice);
			setCurrentDate(date);
			setCurrentNight(nights);
			setCurrentCountry(country);
			setCurrentPeople(people?.label);
			setCurrentChild(child?.label);
			setCurrentCity(where.label);
			setValidContact(false);
			modalClose();
			clear();
			setSuccess(true);
		}
		else{
			setValidContact(true);
		}
	}

	return(
		<Box sx={{border: '1px solid #d7d7d7', p: '15px', borderRadius: 2, flexDirection: {md: 'row', xs: 'column'}}}
		className={`${gstyle.flexbetstart}`}>
			<Box sx={{width: 170, mr: 3, display: 'flex'}} className={`${gstyle.flexsh}`}>
				<img alt="Картинка" src={img} className={`${gstyle.img}`} />
			</Box>

			<Box className={`${gstyle.w100} ${gstyle.flexstart}`}>
				<Typography sx={{fontWeight: 600, mt: {md: 0, xs: 2}}} component="p" variant="h5">
					{name}
				</Typography>

				<Typography sx={{mt: 1}} component="p" variant="p">
					{desc}
				</Typography>

				<Typography sx={{mt: 2}} component="p" variant="p">
					Цена от: <Typography component="span" variant="h6">{price}</Typography> руб.
				</Typography>

				<Typography sx={{mt: 1}} component="p" variant="p">
					Страна: <Typography component="span" variant="h6">{country}</Typography>
				</Typography>

				<Typography sx={{mt: 1}} component="p" variant="p">
					Дата: <Typography component="span" variant="h6">{date}</Typography>
				</Typography>

				<Typography sx={{mt: 1}} component="p" variant="p">
					Ночей: <Typography component="span" variant="h6">{nights}</Typography>
				</Typography>

				<Rating sx={{mt: 1}} value={rating} readOnly precision={0.5} />

				<Button onClick={chooseTour} sx={{mt: 2, p: '8px 30px'}} variant="outlined">
					Выбрать
				</Button>
			</Box>

			<Dialog fullScreen open={modal} onClose={modalClose} TransitionComponent={Transition}>
				<Box className={`${gstyle.w100} ${gstyle.flexstart}`}>
					<IconButton sx={{m: '5px 0 0 5px', color: '#000'}} onClick={modalClose}>
					    <CloseIcon />
					</IconButton>

					<Box sx={{maxWidth: 1240, mt: 3, m: '0 auto', p: '20px'}} className={`${gstyle.w100} ${gstyle.flexstart}`}>
						<Box sx={{p: '30px 20px', borderRadius: 2, background: '#f2f5ff', display: 'grid', gap: 2,
						gridTemplateColumns: {md: '3fr 3fr 3fr 2fr 2fr 2fr', sm: '1fr 1fr 1fr', xs: '1fr'}}} className={`${gstyle.w100}`}>
						    <AutoInput error={error} value={where} setValue={setWhere} options={whereArr} label="Откуда" />
						    <AutoInput error={error} value={people} setValue={setPeople} options={peoplesArr} label="Взрослых" />
						    <AutoInput error={error} value={child} setValue={setChild} options={childsArr} label="Детей" />
						</Box>

						<Box sx={{width: 250, mt: 2}}>
							<img alt="Картинка" src={img} className={`${gstyle.img}`} />
						</Box>

						<Typography sx={{fontWeight: 600, mt: 2}} component="p" variant="h5">
							{name}
						</Typography>

						<Typography sx={{mt: 1}} component="p" variant="p">
							{desc}
						</Typography>

						<Rating sx={{mt: 1}} value={rating} readOnly precision={0.5} />

						{dataEmpty
						? <Typography sx={{mt: 2}} color="error.main" component="p" variant="p">
							Заполните все поля!
						</Typography>
						: <>
							{!buy && <Button onClick={buyTiket} sx={{mt: 2, p: '8px 30px'}} variant="outlined">
								Купить
							</Button>}

							{buy && <Box sx={{mt: 3, display: 'grid', gap: 1.5}} className={`${gstyle.w100}`}>
								{humans.map((d, id) => <Ticket key={id} />)}
							</Box>}

							{buy && <Box sx={{mt: 2}} className={`${gstyle.w100} ${gstyle.flexstart}`}>
								<Typography sx={{color: '#a7a7a7'}} component="p" variant="p">
									По желанию данные можете заполнить позже, когда позвонит оператор*
								</Typography>

								<FormControl sx={{mt: 2}} className={`${gstyle.w100}`}>
								    <InputLabel>Номер телефона</InputLabel>
									<OutlinedInput error={validContact && phone.length < 18 && true} className={`${gstyle.w100}`}
									variant="contained" label="Номер телефона" value={phone}
									onChange={(e) => setPhone(e.target.value)} inputComponent={TextMaskPhone} />
								</FormControl>

								<FormControl sx={{mt: 2}} className={`${gstyle.w100}`}>
								    <InputLabel>Электронная почта</InputLabel>
									<OutlinedInput error={validContact && !mail && true} className={`${gstyle.w100}`}
									variant="contained" label="Электронная почта" value={mail}
									onChange={(e) => setMail(e.target.value)} />
								</FormControl>

								{validContact && <Typography sx={{mt: 1}} color="error.main" component="p" variant="p">
									Не все данные заполнены
								</Typography>}

								<Typography sx={{mt: 2}} component="p" variant="h6">
									Итоговые данные:
								</Typography>

								<Typography sx={{mt: .5}} component="p" variant="p">
									Сумма к оплате: <Typography component="span" variant="h6">{currentsPrice}</Typography> руб.
								</Typography>

								<Typography sx={{mt: .5}} component="p" variant="p">
									Страна: <Typography component="span" variant="h6">{country}</Typography>
								</Typography>

								<Typography sx={{mt: .5}} component="p" variant="p">
									Дата: <Typography component="span" variant="h6">{date}</Typography>
								</Typography>

								<Typography sx={{mt: .5}} component="p" variant="p">
									Ночей: <Typography component="span" variant="h6">{nights}</Typography>
								</Typography>

								<Button onClick={closeBuy} sx={{mt: 3, p: '8px 30px'}} variant="outlined">
									Закрыть
								</Button>

								<Button onClick={totalBuy} sx={{mt: 2, p: '8px 30px'}} variant="outlined">
									Оформить путевку
								</Button>
							</Box>}
						</>}
					</Box>
				</Box>
			</Dialog>
		</Box>
	)
}

export default React.memo(TourCard);