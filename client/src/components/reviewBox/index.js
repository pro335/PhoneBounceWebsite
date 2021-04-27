import React from 'react'
import './index.css'
import Carousel from 'react-material-ui-carousel'
import {Box, Container, Grid, Paper} from '@material-ui/core'
import android from '../../assets/images/android-app-icon.png'
import apple from "../../assets/images/apple-app-icon.svg"
import StarRateIcon from '@material-ui/icons/StarRate';
import { BrowserView, MobileView, isBrowser, isMobile  } from "react-device-detect";

var reviews = [
    {
        name: "Mike Ne-yo hay",
        description: "I got manythings from this app! its greatest app ever! I have seen!! call and text is best! video its very nice images and very good sound! every body need this app to call every where around the world! and I think you can call to another planet if you have friend there!!",
        rating:[],
    },
    {
        name: "johnbosco chukwuemeka",
        description: "This app is more than 5 star ✨, For me i give it 800 star ✨ ✨ ✨ ✨ ✨, this app is fantastic,.",
        rating:[],
    },
    {
        name: "Rob Lee",
        description: "This application is a game changer have been waiting for something like this for ages.",
        rating:[],
    },
    {
        name: "Abdulrahman Saad",
        description: "wow it amazing.",
        rating:[],
    },
    {
        name: " Jessie Jeff",
        description: "phone bounce is the best virtual phone number app, the customer care is 100%, services are 100% and it works with anything",
        rating:[],
    },
       
]

function Item(props)
{
    return (
        <Paper className="ShadowNone px-1 text-center">   
                <div className="d-inline-block mb-2" >
                    <StarRateIcon className="rating text-center " />           
                    <StarRateIcon className="rating text-center" />           
                    <StarRateIcon className="rating text-center " /> 
                </div>          
            <h5 className="text-center">{props.item.name}</h5>
            <p className="text-center">{props.item.description}</p> 
               
        </Paper>
    )
}


const ReviewBox = () => {
    return (
        <div>
            <div className="">
            <Box className={isMobile ? "review-section py-4 px-1" : "review-section py-4 px-5"} >
                    <Container className="review-container">
                        <Grid container spacing={2} >
                            <Grid item xs={12} md={6} lg={6}>   
                                <a href="https://play.google.com/store/apps/details?id=com.phonebounce" target="Android"><img className="img-fluid px-5 mb-5" src={android} alt="Android" /> </a>                
                                    <Carousel className={isMobile ? "px-2" : "px-5"} navButtonsAlwaysInvisible={true} animation="slide" indicators={false}> 
                                    {
                                        reviews.map( (item, i) => <Item key={i} item={item} /> )
                                    }
                                </Carousel>

                                
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                            <a href="https://apps.apple.com/us/app/phonebounce/id1468937598" target="Apple"><img className="img-fluid px-5 mb-5" src={apple} alt="Apple" /></a>               
                                    <Carousel className={isMobile ? "px-2" : "px-5"} navButtonsAlwaysInvisible={true} animation="slide" indicators={false}> 
                                    {
                                        reviews.map( (item, i) => <Item key={i} item={item} /> )
                                    }
                                </Carousel>
                            </Grid>
                        </Grid>
                        
                    </Container>
                 </Box>
                
            </div>
            
        </div>
    )
}
export default ReviewBox;


