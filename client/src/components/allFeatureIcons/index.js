import React from 'react'
import FeatureIcon from '../FeatureIcons'
import './index.css'
import {Grid} from "@material-ui/core"
import callBlock200 from '../../assets/images/14_Call_Blocking-200px.png'
import callForward200 from '../../assets/images/15_Call_Forwarding-200px.png'
import conference200 from '../../assets/images/18_Conference_Calling-200px.png'
import callRecord200 from '../../assets/images/16_Call_Recording-200px.png'
import translation200 from '../../assets/images/21_Translation-200px.png'
import callWhispering200 from '../../assets/images/17_Call_Whisper-200px.png'
import voiceMail200 from '../../assets/images/19_Personalised_Recording-200px.png'
import webIntegrations200 from '../../assets/images/22_Web_Integration-200px.png'


const AllFeatureIcon = (props) => {
    return (
        <React.Fragment>
                
                <Grid item xs={12} md={3} lg={3} >  
                    <FeatureIcon link='/call-blocking' image={callBlock200} title="Call Blocking" />                           
                </Grid>
                <Grid item xs={12} md={3} lg={3} >
                <FeatureIcon link='/call-forwarding' image={callForward200} title="Call Forwarding" />                         
                </Grid>
                <Grid item xs={12} md={3} lg={3} > 
                <FeatureIcon link='/conference-calling' image={conference200 } title="Conference Calling" />                            
                </Grid>
                <Grid item xs={12} md={3} lg={3} > 
                <FeatureIcon link='/call-recording' image={callRecord200} title="Call Recording" />                        
                </Grid>
                <Grid item xs={12} md={3} lg={3} >  
                <FeatureIcon link='/translation' image={translation200 } title="Translation" />                           
                </Grid>
                <Grid item xs={12} md={3} lg={3} >  
                <FeatureIcon link='/call-whisper' image={callWhispering200 } title="Call Whispering" />                       
                </Grid>
                <Grid item xs={12} md={3} lg={3} >  
                <FeatureIcon link='/personalised-voicemail' image={voiceMail200 } title="Personalised Voicemail" />                           
                </Grid>
                <Grid item xs={12} md={3} lg={3} >  
                <FeatureIcon link='/web-integration' image={webIntegrations200} title="Web Integration" />                       
                </Grid>
            
        </React.Fragment>
    )
}

export default AllFeatureIcon;
