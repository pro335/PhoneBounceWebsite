import {makeStyles} from '@material-ui/core/styles';
const drawerWidth = 240;
export default makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '5px',
      height: '5px',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.secondary.main,
      borderRadius: '3px',
      width: '5px',
      height: '5px',
      outline: '1px solid slategrey',
    },
  },
  wrapper_all: {
    background: 'linear-gradient(240deg, #16222a 0%, #3a6173 100%)',
  },
  room_wrap: {
    paddingTop: '64px',
  },
  homeHeroSectionWrapper: {
    paddingTop: '49px',
    width: '100%',
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
      margin: '0 !important',
    },
  },
  divider: {
    color: theme.palette.primary.main,
  },
  createRoomForm: {
    width: '90%',
    margin: '0 auto',
    textAlign: 'center',
    color: '#fff',
    '& p': {
      color: '#fff  !important',
    },
    '& .MuiFormLabel-root': {
      color: '#fff  !important',
    },
    '& .form-control': {
      width: '100%',
    },
  },
  headContentWrapper: {
    padding: '15px 0 0 0px',
  },
  createRoomInput: {
    width: '100%',
    // color: '#fff !important',
    marginBottom: '10px',
    '& input:focus': {
      '& .MuiInputLabel-animated': {},
    },
    '& .MuiInput-underline:before': {
      borderBottom: '1px solid #fff !important',
      color: '#fff  !important',
    },
    '& input': {
      color: '#fff !important',
      fontSize: '16px !important',
    },
    '& .MuiInput-underline:after': {
      color: '#fff  !important',
      borderBottom: `2px solid ${theme.palette.secondary.main} !important`,
    },
  },
  phoneInput: {
    width: '100% !important',
    padding: '8px',
    outline: 'none',
  },
  createRoomFormInputLabel: {
    textAlign: 'left',
  },
  formWrapper: {
    textAlign: 'center',
    '& img': {
      maxHeight: '109px',
    },
  },
  phoneBounceButton: {
    color: '#fff',
    borderRadius: '50px',
    lineHeight: '1.75',
    paddingTop: '3px',
    paddingBottom: '3px',
    textTransform: 'uppercase',
    marginTop: '15px',
    backgroundColor: theme.palette.secondary.main,
    color: '#fff',
    cursor: 'pointer !important',
    borderRadius: '50px !important',
    fontSize: '14px',
    width: '15em',
    height: '2.9em',
    position: 'relative',
    letterSpacing: '0.02em',
    fontFamily: 'Open Sans Semibold',
    boxShadow: '0 2px 8px 0 rgba(62, 62, 79, 0.23)',
    webkitTransition: 'all 300ms linear 0ms',
    mozTransition: 'all 300ms linear 0ms',
    msTransition: 'all 300ms linear 0ms',
    transition: 'all 300ms linear 0ms',
    display: 'inline-block',
    textAlign: 'center',
    verticalAlign: 'middle',
    webkitUserSelect: 'none',
    mozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
    border: '1px solid transparent',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      height: 'auto',
      padding: '5px 20px !important',
    },
    '&:hover': {
      background: '#e00653',
    },

    '&:hover': {
      transition: '0.5s',
      backgroundColor: theme.palette.secondary.main,
      boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.3)',
      webkitTransform: 'translateY(-5px)',
      transform: 'translateY(-5px)',
    },
  },
  viewDopdown: {
    lineHeight: '1.75',
    paddingLeft: '5px',
    paddingRight: '5px',
    textTransform: 'uppercase',
    marginTop: '15px',
    textAlign: 'center',
    backgroundColor: theme.palette.secondary.main,
    cursor: 'pointer !important',
    fontSize: '14px',
    position: 'relative',
    letterSpacing: '0.02em',
    fontFamily: 'Open Sans Semibold',
    boxShadow: '0 2px 8px 0 rgba(62, 62, 79, 0.23)',
    webkitTransition: 'all 300ms linear 0ms',
    mozTransition: 'all 300ms linear 0ms',
    msTransition: 'all 300ms linear 0ms',
    transition: 'all 300ms linear 0ms',
    textAlign: 'center',
    verticalAlign: 'middle',
    webkitUserSelect: 'none',
    mozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '15em',
    height: '2.7em',
    paddingLeft: '5px',
    paddingRight: '5px',
    border: 'none',
    color: '#fff',
    borderRadius: '50px',

    '&:hover': {
      transition: '0.5s',
      backgroundColor: theme.palette.secondary.main,
      boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.3)',
      webkitTransform: 'translateY(-5px)',
      transform: 'translateY(-5px)',
    },
    '& .MuiInputBase-input': {
      padding: 0,
      backgroundColor: theme.palette.secondary.main,
      height: '2.9em',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50px',
      color: '#fff',
    },
    '& .MuiSelect-iconFilled': {
      width: '2rem',
      height: '2rem',
      top: '5px',
      color: '#fff',
      right: '15px',
    },
    '&:after': {
      display: 'none',
    },
    '&:before': {
      display: 'none',
    },
    '& .MuiPopover-paper': {
      backgroundColor: theme.palette.secondary.main,
      cursor: 'pointer !important',
      fontSize: '14px',
      borderRadius: '50px',
    },
  },
  dropDownPaper: {
    backgroundColor: theme.palette.secondary.main,
    color: '#fff',
  },
  appStoreLogo: {
    width: '100px',
    height: '100%',
    objectFit: 'contain',
    [theme.breakpoints.down('sm')]: {
      transition: '0.3s',
      width: '106px',
    },
  },

  headIconList: {
    '& i': {
      color: theme.palette.secondary.main,
      paddingRight: '12px',
      fontSize: '18px',
      verticalAlign: 'middle',
    },
    '& li': {
      paddingLeft: '0 !important',
    },
    '& h6': {
      color: '#fff !important',
    },
  },

  // Welcome To Join Room Styles
  welcomeToRoomContent: {
    paddingTop: '2rem',
    color: '#212529 !important',
    backgroundColor: '#efefef',
    marginRight: '48px',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '1rem',
    },
  },
  outerWrapper: {
    padding: '10px 0',
  },
  innerWrapper: {
    backgroundColor: '#fff',
    width: '90%',
    color: '#212529 !important',
    boxShadow: '0 5px 15px 0 rgba(110, 110, 110, .1)',
    borderRadius: '15px',
    position: 'relative',
    padding: '80px 80px',
    [theme.breakpoints.down('sm')]: {
      transition: '0.3s',
      padding: 0,
    },
    '& li': {
      paddingTop: 0,
      paddingBottom: 0,
    },
  },

  // Contact Us Styles
  contactIcon: {
    backgroundColor: '#fff',
    color: theme.palette.common.secondary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '42px',
    lineHeight: '42px',
    textAlign: 'center',
    borderRadius: '15px',
    width: '42px',
    transition: '0.3s',
    boxShadow: ' 0 2px 8px 0 rgba(62, 62, 79, 0.15)',
    [theme.breakpoints.down('sm')]: {
      width: '30px',
      height: '30px',
    },
  },
  boxDecorate: {
    height: '100px',
    width: '1px',
    background: '#ebebeb',
    margin: '0 10px',
  },
  contactFormLinks: {
    textDecoration: 'none',
    color: theme.palette.secondary.main,
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
    },
  },
  formFlag: {
    height: '14px',
    objectFit: 'contain',
    marginRight: '12px',
  },
  formBoxOuterWrapper: {
    width: '98%',
    position: 'relative',
    height: '145px',
    borderRadius: '15px',
    backgroundColor: '#fff',
    boxShadow: '0 5px 15px 0 rgba(110, 110, 110, .1)',
    '&:hover': {
      webkitTransform: 'translateY(-5px)',
      transform: 'translateY(-5px)',
      webkitTransition: 'all 300ms linear 0ms',
      mozTransition: ' all 300ms linear 0ms',
      msTransition: ' all 300ms linear 0ms',
      transition: ' all 300ms linear 0ms',
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '20px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  formBoxMainImage: {
    margin: '0 20px',
    position: 'relative',
    width: '55px',
    height: '55px',
    [theme.breakpoints.down('sm')]: {
      width: '35px',
      height: '35px',
    },
  },
  contactInput: {
    width: '100%',
    '& .MuiInputBase-root': {
      border: 'none',
    },
    '& input': {
      color: '#808080',
      padding: '0 !important',
      '&:hoverplaceholder': {
        color: 'black !important',
      },
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none !important',
    },
    '& i': {
      color: '#d8d8d8',
    },
    padding: '15px 8px 15px 30px',
    borderRadius: '50px',
    fontSize: '14px',
    cursor: 'pointer',
    backgroundColor: '#ffffff !important',
    border: 'solid 1px #d8d8d8 !important',
    appearance: 'none',
    boxShadow: 'none',
  },
  contactTextAreaBox: {
    '& textarea': {
      width: '100%',
      cursor: 'pointer',
      padding: '10px 15px',
      paddingLeft: '30px',
      outline: 'none',
      backgroundColor: '#ffffff !important',
      border: 'solid 1px #d8d8d8',
      appearance: 'none',
      boxShadow: 'none',
      borderRadius: '10px',
      fontSize: '15px',
      fontFamily: 'Open Sans',
      color: '#808080 !important',
    },
  },

  // Slider Style
  sliderImage: {
    height: '92px',
  },
  slideWrapper: {
    marginBottom: '50px',
    [theme.breakpoints.down('md')]: {
      marginTop: '20px',
      marginBottom: '20px',
    },
  },
  carouselWrapper: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  slide: {
    width: '100%',
    minHeight: '300px',
    padding: '0 15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#212529',
    '& i': {
      color: '#f8c703',
      fontSize: '1rem',
    },
  },

  // ALert
  info: {
    background: 'rgb(232, 244, 253)',
    color: 'rgb(13, 60, 97) !important',
    borderRadius: '12px',
    padding: '5px',
  },
  error: {
    background: theme.palette.secondary.main,
    color: 'rgb(97, 26, 21) !important',
    borderRadius: '12px',
    padding: '5px',
  },
  warning: {
    background: 'rgb(255, 244, 229)',
    color: 'rgb(102, 60, 0) !important',
    borderRadius: '12px',
    padding: '5px',
  },

  // Room Styles
  roomWrapper: {
    // minHeight: 'calc(100vh - 60px)',
    transition:'0.1s linear',
    display: 'flex',
    alignItems: 'center',
    paddingRight: '48px',
    [theme.breakpoints.down('sm')]: {
      paddingRight: '34px',
    },
    [theme.breakpoints.down('xs')]: {
      height: '100%',
      minHeight: '100%',
    },
  },
  roomWrapperForVerticleView: {
    width: '100%',
    height: '100%',
    // [theme.breakpoints.up('xl')]: {
    //   height: 'calc(75vh - 60px)',
    //   minHeight: 'calc(75vh - 60px)'
    // },
  },
  // roomWrapperMedia:{
  //   height: 'calc(60vh - 90px)',
  //   minHeight: 'calc(60vh - 60px)',
  //   [theme.breakpoints.down('xs')]: {
  //     height:'100%',
  //     minHeight:'100%'
  //   },
  // },
  fullHeight: {
    height: '100vh !important',
  },
  localParticipantWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    background: `radial-gradient(${theme.palette.secondary.main}, #000000)`,
    '& video': {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    },
  },
  localVideoInnerWrapper: {
    width: '100%',
    height: '100%',
    position: 'relative',
    background: `radial-gradient(${theme.palette.secondary.main}, #000000)`,
  },
  remoteParticipantsWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: `radial-gradient(${theme.palette.secondary.main}, #000000)`,
    // flex: 1,
    '& video': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  remoteParticipantsHorizontalWrapper: {
    minWidth: '30%',
    maxWidth: '30%',
    width: '30%',
    position: 'relative',
    // [theme.breakpoints.down('xs')]: {
    //   maxHeight: '100% !important',
    //   height: 'content-fit !important',
    //   width: '100% !important',
    //   minWidth: '100% !important',
    //   maxWidth: '100% !important',
    // },
  },

  participantDetailWrapper: {
    color: '#ffff !important',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    '& i': {
      background: theme.palette.secondary.main,
      height: ' 32px',
      width: '32px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: ' center',
      borderRadius: '50%',
      fontSize: '21px',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
  participantNameWrapper: {
    background: 'rgba(205,0,83,0.6)',
    // background:'rgba(128,128,128,0.8)',
    minWidth: '70%',
    padding: '5px 10px',
    display: 'flex',
    gridGap: '5px',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  smallBtn: {
    fontSize: '12px',
    '&:hover': {
      background: '#e00653',
      color: '#fff',
    },
  },
  btnDisabled: {
    background: '#d1d1d1 !important',
    color: '#333 !important',
  },
  privateChatButton: {
    background: '#fff !important',
    color: '#f50057 !important',
    '&:hover': {
      background: '#e00653',
      color: '#fff',
    },
  },
  verticleView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  verticalScroll: {
    overflow:'scroll',
    display: 'flex',
    maxWidth: '100%',
    // minHeight: 'calc(100vh - 90px)',
    flexBasis: '30%',
    overflowX: 'auto ',
    overflowY: 'scroll',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    maxHeight: '100%',
    // height: 'calc(100vh - 90px)',
    height: '100%',

    // [theme.breakpoints.up('xl')]: {
    //   height: 'calc(75vh - 90px)',
    //   minHeight: 'calc(75vh - 90px)'
    // },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: '100%',
      minHeight: '100%',
      overflow:'auto',
    },
  },
  // verticalScrollMedia:{
  //   height: 'calc(60vh - 90px)',
  //   minHeight: 'calc(60vh - 90px)',
  //   [theme.breakpoints.down('xs')]: {
  //     width: '100%',
  //     height:'100%',
  //     minHeight:'100%'
  //   },
  // },
  verticalScrollViewForLocal: {
    // maxHeight: '100%',
    // minHeight: '100%',
    // maxHeight: 'calc(100vh - 300px)',
    // height: 'calc(100vh - 90px)',
    // height: 'calc(100%)',
    flexBasis: '70%',
    alignSelf: 'flex-start',
    // [theme.breakpoints.up('xl')]: {
    //   height: 'calc(75vh - 90px)',
    // },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: '100%',
      minHeight: '100%',
    },
  },
  // verticalScrollViewForLocalMedia:{
  //   height: 'calc(60vh - 90px)',
  //   minHeight: 'calc(60vh - 90px)',
  //   [theme.breakpoints.down('xs')]: {
  //     width: '100%',
  //     height:'100%',
  //     minHeight:'100%'
  //   },
  // },
  horizontalView: {
    display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    height: 'calc(100vh - 90px)',
    '& video': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    [theme.breakpoints.down('xs')]: {
      height: '100% !important',
    },
  },
  horizontalScroll: {
    maxWidth: '100%',
    overflowX: 'scroll',
    scrollbarWidth: 0,
    // height: '35%',
    display: 'flex',
    width: '100%',
  },
  horizontalScrollViewForLocal: {
    maxHeight: '75%',
    position: 'relative',
    height: '75%',
    width: '100%',
  },
  gridView: {},
  gridContainer: {
    width: ' 100%',
    display: 'grid',
    maxHeight: 'calc(100vh - 90px)',
    // height: 'calc(100vh - 90px)',
    [theme.breakpoints.down('xs')]: {
      // gridTemplateColumns: 'repeat(1, 1fr) !important',
      // gridTemplateRows: 'repeat(auto, 1fr) !important',
    },
    '& video':{
      width:'100%',
      height:'100%',
      objectFit:'cover'
    }
  },
  fixedGrid:{
    maxHeight:'100% !important',
    minHeight:'100% !important',
    height:'100% !important',
    gridTemplateRows:'auto !important'
  },
  remoteParticipantsGridWrapper: {
    overflow: 'auto',
    position: 'relative',
    '& video': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },

  // Dailog Styles
  dailog: {
    height: 'content-fit',

    '& .MuiDialog-paper': {
      background: '#fff',
    },
  },
  modelTitle: {
    color: theme.palette.secondary.main,
    padding:'8px'
  },
  copyToClipboardWrapper: {
    '& button': {
      opacity: '1 !important',
      background: theme.palette.secondary.main,
      color: '#fff',
      borderRadius: '50px !important',
    },
  },

  // DRAWER STYLES
  root: {
    display: 'flex',
    color: '#fff',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    top: 'unset !important',
    borderLeft: 0,
    overflowY: 'visible',
    zIndex: 9999,
    background: theme.palette.secondary.main,
    position: 'fixed',
    color: '#fff',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    '& .MuiListItemIcon-root': {
      display: 'flex',
      justifyContent: 'unset !important',
    },
  },
  drawerClosed: {
    background: theme.palette.secondary.main,
    color: '#fff',
    borderLeft: 0,
    zIndex: 9999,
    overflowY: 'visible',
    position: 'fixed',
    top: 'unset !important',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // width: theme.spacing(7) + 1,
    width: '14px !important',
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  sidebarClosed: {
    paddingRight: '14px !important',
  },
  drawerClose: {
    background: theme.palette.secondary.main,
    color: '#fff',
    borderLeft: 0,
    zIndex: 9999,
    overflowY: 'visible',
    position: 'fixed',
    top: 'unset !important',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    position: 'absolute',
    top: '-3px',
    left: '-31px',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  networkQualityIcon: {
    fontSize: '27px',
  },
  chevrenIcon: {
    color: theme.palette.background.bgPaper,
    fontSize: '26px',
    background: '#f50057',
    zIndex: 99999,
    color: '#fff',
    '&:hover': {
      background: '#f50057',
      color: '#fff',
    },
  },
  content: {
    flexGrow: 1,
    paddingRight: theme.spacing(3),
    transition:'0.1s linear'
  },
  linksList: {
    marginTop: '-23px',
  },
  drawerList: {
    marginTop: 'unset !important',
  },
  drawerListItem: {
    color: '#fff',
    textAlign: 'center',
    '& .MuiListItemIcon-root': {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  drawerItemText: {
    textAlign: 'left !important',
  },
  drawerListIcon: {
    color: '#fff',
    fontSize: '18px',
    textAlign: 'center',
  },
  leaveRoomButton: {
    color: 'red !important',
  },
  loaderWrapper: {
    minHeight: 'calc(100vh - 60px)',
    width: '100%',
    background: `radial-gradient(${theme.palette.secondary.main}, #000000)`,
  },
  thumbVid: {
    position: 'absolute',
    bottom: '38px',
    right: '5px',
    width: '100px',
    height: '80px',
    borderRadius: '5px',
    zIndex: 1,
    overflow: 'hidden',
  },
  copyStyles: {
    border: '2px solid rgb(255, 255, 255)',
    borderRadius: '30px',
    fontSize: '8px',
    display: 'flex',
    marginLeft: '8px',
    padding: '0px 5px',
    alignItems: 'center',
  },

  padlockIcon: {
    borderRadius: '50%',
    width: '40px',
    minWidth: '40px',
    height: '40px',
    color: '#fff',
    fontSize: '20px',
    background: '#e00653',
  },

  chatBoxWrapper: {
    transition: '0.3s',
    background: '#fff',
    width: '300px',
    position: 'absolute',
    left: '-95%',
    top: '-100px',
    borderRadius: '10px',
    padding: '8px',
    paddingBottom: '10px',
  },
  privateRoomInfoModelBoxWrapper: {
    transition: '0.3s',
    background: '#e00653',
    width: '300px',
    position: 'absolute',
    top: '-100px',
    left: '-28%',
    borderRadius: '10px',
    padding: '8px',
    paddingBottom: '10px',
    color: '#fff !important',
  },
  openPrivateRoomInfoModelBoxDeco: {
    position: 'absolute',
    left: '13%',
    right: '50%',
    transform: 'skew(53deg) rotate(45deg)',
    width: '16px',
    height: '15px',
    bottom: 0,
    bottom: '-8px',
    background: '#e00653',
  },
  transparentBtn: {
    background: 'transparent',
    border: 'none',
    margin: '0',
    color: '#fff',
    padding: '0',
  },
  iconDisabled: {
    background: '#d1d1d1 !important',
    color: '#333 !important',
  },
  textDisabled: {
    color: '#d1d1d1 !important',
  },
  drawerCloseChatBoxWrapper: {
    left: '-305px !important',
    top: '-20px !important',
  },
  drawerClosechatBoxDeco: {
    transform: 'skew(53deg) !important',
    right: '-7px !important',
    bottom: '48% !important',
    left: 'unset !important',
  },
  chatBoxDeco: {
    position: 'absolute',
    left: '50%',
    right: '50%',
    transform: 'skew(-53deg) translateX(50%) rotate(45deg)',
    width: '16px',
    height: '15px',
    bottom: 0,
    bottom: '-8px',
    background: '#fff',
  },
  sidebarChatBoxWrapper: {
    left: '-30%',
  },

  videoOffWrapper: {
    position: 'absolute',
    top: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    background: `radial-gradient(${theme.palette.secondary.main}, #000000)`,
    flexDirection: 'column',
    color: '#fff',
    gridGap: '5px',
  },
  topIconsWrapper: {
    position: 'absolute',
    right: '30px',
    top: '13px',
    fontSize: '20px',
    background: 'rgb(239, 234, 234, 0.6)',
    zIndex: 999,
    minWidth: '28px',
    minHeight: '60px',
    borderRadius: '18px',
    display: 'flex',
    flexDirection: 'column',
    gridGap: '5px',
  },
  fullscreenIcon: {
    backgroundColor: 'transparent',
    color: '#bf0c4c',
    minWidth: '20px',
  },
  topIcon: {
    fontSize: '18px',
  },
  tooltip: {
    fontSize: '15px',
  },
  isRecordingCheckbox:{
    fontSize:'23px',
    color:'#fff'
  },
  recordingCheckboxWrapper:{
    '& .MuiFormControlLabel-label ':{
      fontSize:'15px'
    }
  },

  // Custom Invitaion Model styles
  dailogWrapper:{
    height: 'calc(100vh - 90px)',
    position:'absolute',
    display:'none',
    width:0,
    alignItems:'center',
    justifyContent:'center',
    transition:'0.5s',
    backgroundColor:'rgba(0,0,0,0.6)'
  },
  openInviteModel:{
    display:'flex',
    width:'100%',
  },
  modelBody:{
    width:'400px',
    borderRadius:'8px',
    background:'#fff !important',
    boxShadow:'0 0 5px 0 #d1d1d1',
    transition:'0.3s',
    padding: '10px',
    paddingRight:'5px',
    [theme.breakpoints.down('sm')]:{
      width:'300px'
    }
  },
  modelContent:{
    padding:'0 10px',

  }
}));
