import React from 'react';

import $ from 'jquery';

import {useStyles} from '../../gstyle.js';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import TourCard from './TourCard/TourCard.jsx';
import Filter from '../../common/Filter/Filter.jsx';

const tours = [
	{
		name: 'BELDIBI BEACH HOTEL',
		desc: 'Отель для экономичного отдыха расположен в поселке Бельдиби, через дорогу от моря. Вид из номера на море или горы. Персонал владеет английским и русским языками. Для гостей — питание по системе «Все включено», открытый бассейн, бар и ресторан.',
		price: 53859,
		rating: 4.5,
		img: '/assets/tour1.jpeg',
		date: '20 января',
		country: 'Турция',
		nights: 1
	},
	{
		name: 'SUNTALIA HOTEL',
		desc: 'Небольшой городской отель для экономичного отдыха. Расположен в городе Анталья, в районе Коньяалты, в 250 м от пляжа. К услугам гостей — 40 номеров с ванными комнатами, кондиционерами, спутниковом ТВ. Wi-Fi предоставляется на всей территории отеля бесплатно.',
		price: 12140,
		rating: 3.5,
		img: '/assets/tour2.jpg',
		date: '21 января',
		country: 'Египет',
		nights: 2
	},
	{
		name: 'KEMER PARADISE',
		desc: 'Небольшой отель с маленькой уютной территорией находится в центральной части города Кемер. Прогулка до побережья займет 10 минут. Минимальный набор услуг, простые номера. Отдохнуть можно у открытого бассейна, где выделена детская зона.',
		price: 32542,
		rating: 4,
		img: '/assets/tour3.jpg',
		date: '25 января',
		country: 'Дубай',
		nights: 3
	},
	{
		name: 'PARK AVRUPA HOTEL',
		desc: 'Небольшой бюджетный отель расположен в Кемере. Прогулка до центра города и пляжа займет 10–15 минут. Отель предлагает своим гостям размещение в стандартных номерах, открытый бассейн с водной горкой, ресторан и бар, Wi-Fi.',
		price: 75840,
		rating: 5,
		img: '/assets/tour4.jpg',
		date: '26 января',
		country: 'Кипр',
		nights: 4
	},
	{
		name: 'BODENSEE HOTEL',
		desc: 'Небольшой отель расположен в Анталии, в 23 км от аэропорта. Общественный галечный пляж находится в 150 м, через дорогу от отеля. К услугам отдыхающих — открытый бассейн, ресторан, бары. Номера оснащены кондиционером, телевизором. Торгово-развлекательные заведения находятся в пешей доступности от отеля.',
		price: 7580,
		rating: 2.5,
		img: '/assets/tour5.jpg',
		date: '21 января',
		country: 'Мальдивы',
		nights: 5
	},
	{
		name: 'ARSI HOTEL',
		desc: 'Отель в Аланье предлагает своим гостям размещение в комфортабельных номерах, открытый бассейн для взрослых и детей, питание по концепции «Все включено», близкое расположение к пляжу. Вблизи отеля расположено множество кафе, ресторанов, дискотек.',
		price: 14200,
		rating: 3.5,
		img: '/assets/tour6.jpg',
		date: '26 января',
		country: 'Таиланд',
		nights: 6
	},
	{
		name: 'CARMEN SUITE',
		desc: 'Апарт-отель расположен в городе Алания, в 600 м от аквапарка. Состоит из главного 9-этажного здания и дополнительного 5-этажного корпуса. К услугам гостей — апартаменты с бесплатным Wi-Fi, кондиционером и выходом в сад с открытым бассейном.',
		price: 10340,
		rating: 3,
		img: '/assets/tour7.jpg',
		date: '20 января',
		country: 'Египет',
		nights: 3
	}
]

const whereArr = [{label: 'Москва'}, {label: 'Тюмень'}, {label: 'Томск'}, {label: 'Новосибирск'}];
const fromArr = [{label: 'Турция'}, {label: 'Египет'}, {label: 'Дубай'}, {label: 'Кипр'}, {label: 'Мальдивы'}, {label: 'Таиланд'}];
const datesArr = [{label: '20 января'}, {label: '21 января'}, {label: '25 января'}, {label: '26 января'}];
const nightsArr = [{label: '1'}, {label: '2'}, {label: '3'}, {label: '4'}, {label: '5'}, {label: '6'}];
const peoplesArr = [{label: '1'}, {label: '2'}, {label: '3'}, {label: '4'}, {label: '5'}, {label: '6'}];
const childsArr = [{label: '0'}, {label: '1'}, {label: '2'}, {label: '3'}, {label: '4'}, {label: '5'}];

const Main = () => {
	const gstyle = useStyles();

	const [where, setWhere] = React.useState(null);
	const [from, setFrom] = React.useState(null);
	const [date, setDate] = React.useState(null);
	const [nights, setNights] = React.useState(null);
	const [people, setPeople] = React.useState(null);
	const [child, setChild] = React.useState(null);
	const [error, setError] = React.useState(false);
	const [searched, setSearched] = React.useState(false);
	const [toursArr, setToursArr] = React.useState(tours);

	const [currentCountry, setCurrentCountry] = React.useState('');
	const [currentDate, setCurrentDate] = React.useState('');
	const [currentNight, setCurrentNight] = React.useState('');
	const [currentPrice, setCurrentPrice] = React.useState('');
	const [currentPeople, setCurrentPeople] = React.useState('');
	const [currentChild, setCurrentChild] = React.useState('');
	const [currentCity, setCurrentCity] = React.useState('');
	const [phone, setPhone] = React.useState('');
	const [mail, setMail] = React.useState('');
	const [success, setSuccess] = React.useState(false);

	const search = () => {
	    if(where && from && date && nights && people && child){
	    	setToursArr(tours.filter(n => ((n.country === from.label) && (n.date === date.label)
	    		&& (n.nights === parseInt(nights.label)))));
	        setSearched(true);
	        scrollBottom();
	    }
	    else{
	        setError(true);
	    }
	}

	const clear = () => {
		setWhere(null);
		setFrom(null);
		setDate(null);
		setNights(null);
		setPeople(null);
		setChild(null);
		setError(false);
		setSearched(false);
	}

	const searchAll = () => {
		setToursArr(tours);
		setSearched(true);
		scrollBottom();
	}

	const scrollBottom = () => {
		$('html, body').animate({scrollTop: '+=400'}, 400);
	}

	const resetSuccess = () => {
		setSuccess(false);
	}

	return(
		<Box sx={{maxWidth: 1240, m: '0 auto', justifyContent: 'center', minHeight: '100vh', p: '30px 20px'}}
		className={`${gstyle.flexcenter} ${gstyle.w100}`}>
			{success
			? <>
				<Typography variant="p" component="h3">
				    Заказ номер #{Math.floor(Math.random() * 10000)}
				</Typography>

				<Typography sx={{mt: 1}} variant="p" component="h4">
				    Страна: {currentCountry}
				</Typography>

				<Typography sx={{mt: 1}} variant="p" component="h4">
				    Дата вылета: {currentDate}
				</Typography>

				<Typography sx={{mt: 1}} variant="p" component="h4">
				    Количество ночей: {currentNight}
				</Typography>

				<Typography sx={{mt: 1}} variant="p" component="h4">
				    Оплаченная сумма: {currentPrice} руб.
				</Typography>

				<Typography sx={{mt: 1}} variant="p" component="h4">
				    Количество взрослых: {currentPeople}
				</Typography>

				<Typography sx={{mt: 1}} variant="p" component="h4">
				    Количество детей: {currentChild}
				</Typography>

				<Typography sx={{mt: 1}} variant="p" component="h4">
				    Город отправления: {currentCity}
				</Typography>

				<Typography sx={{mt: 1}} variant="p" component="h4">
				    Ваш контактный адрес электронной почты: {mail}
				</Typography>

				<Typography sx={{mt: 1}} variant="p" component="h4">
				    Ваш номер телефона: {phone}
				</Typography>

				<Typography sx={{mt: 1}} variant="p" component="p">
				    В течении 15 минут с вами свяжется наш оператор!
				</Typography>

				<Typography sx={{mt: 1}} variant="p" component="p">
				    Билеты так же высланы вам на почту
				</Typography>

				<Button onClick={resetSuccess} sx={{mt: 2, width: {sm: 'auto', xs: '100%'}, p: '8px 30px'}} variant="outlined">
				    Смотреть другие туры
				</Button>
			</>
			: <>
			    <Typography onClick={clear} sx={{textAlign: 'center', cursor: 'pointer', textTransform: 'uppercase'}} variant="p" component="h1">
			        Travel company
			    </Typography>

			    <Filter search={search} where={where} setWhere={setWhere} from={from} setFrom={setFrom}
			    	dateD={date} setDate={setDate} nightsD={nights} setNights={setNights} people={people} setPeople={setPeople} child={child}
			    	setChild={setChild} error={error} whereArr={whereArr} fromArr={fromArr} datesArr={datesArr} nightsArr={nightsArr}
			    	peoplesArr={peoplesArr} childsArr={childsArr} />

			    <Box sx={{mt: 3, justifyContent: 'center', flexDirection: {sm: 'row', xs: 'column'}}} className={`${gstyle.w100} ${gstyle.flexDef}`}>
			        <Button onClick={search} sx={{width: {sm: 'auto', xs: '100%'}, p: '8px 50px', m: {sm: '0 20px 0 0', xs: '0 0 15px 0'}}}
			        variant="outlined">
			            Найти туры
			        </Button>

			        <Button onClick={searchAll} sx={{width: {sm: 'auto', xs: '100%'}, p: '8px 50px'}} variant="outlined">
			            Посмотреть все туры
			        </Button>
			    </Box>

			    {searched && <Box sx={{mt: 4, display: 'grid', gap: 2.5, gridTemplateColumns: {md: 'repeat(auto-fill, minmax(590px, 1fr))', xs: '1fr'}}}
			    className={`${gstyle.w100} ss`}>
			    	{toursArr.length > 0
			    	? toursArr.map((d, id) => <TourCard setCurrentCity={setCurrentCity} setCurrentPeople={setCurrentPeople} setCurrentChild={setCurrentChild} setCurrentCountry={setCurrentCountry} setCurrentDate={setCurrentDate} setCurrentNight={setCurrentNight} setCurrentPrice={setCurrentPrice} setSuccess={setSuccess} phone={phone} setPhone={setPhone} mail={mail} setMail={setMail} clear={clear} key={id} data={d} where={where} setWhere={setWhere} from={from} setFrom={setFrom}
			    	dateD={date} setDate={setDate} nightsD={nights} setNights={setNights} people={people} setPeople={setPeople} child={child}
			    	setChild={setChild} error={error} whereArr={whereArr} fromArr={fromArr} datesArr={datesArr} nightsArr={nightsArr}
			    	peoplesArr={peoplesArr} childsArr={childsArr} />)
			    	: <Typography variant="p" component="p">
				        По данным критериям туры не найдены
				    </Typography>}
			    </Box>}
			</>}
		</Box>
	)
}

export default Main;