import {makeStyles} from '@mui/styles';

export const useStyles = makeStyles({
    flexstart: {
    	display: 'flex',
    	flexDirection: 'column',
    	alignItems: 'flex-start'
    },
    w100: {
    	width: '100%'
    },
    flexcenter: {
    	display: 'flex',
    	flexDirection: 'column',
    	alignItems: 'center'
    },
    flexbet: {
    	display: 'flex',
    	justifyContent: 'space-between',
    	alignItems: 'center'
    },
    flexbetstart: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    flexwrap: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    flexDef: {
        display: 'flex',
        alignItems: 'center'
    },
    flexsh: {
    	flexShrink: 0
    },
    textCenter: {
        textAlign: 'center'
    },
    flex: {
    	display: 'flex',
    	alignItems: 'center',
    	justifyContent: 'center'
    },
    img: {
        width: '100%',
        height: 'auto'
    }
});