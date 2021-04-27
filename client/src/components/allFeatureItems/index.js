import React from 'react'
import {FeatureItem} from '../FeatureItem'
import './index.css'
import {Grid} from "@material-ui/core"
import callBlocking100 from '../../assets/images/14_Call_Blocking-100px.png'
import callForwarding100 from '../../assets/images/15_Call_Forwarding-100px.png'
import callRecording100 from '../../assets/images/16_Call_Recording-100px.png'
import callWhisper100 from '../../assets/images/17_Call_Whisper-100px.png'
import conference100 from '../../assets/images/18_Conference_Calling-100px.png'
import personalized100 from '../../assets/images/19_Personalised_Recording-100px.png'
import translation100 from '../../assets/images/21_Translation-100px.png'
import webIntegrations100 from '../../assets/images/22_Web_Integration-100px.png'

const AllFeatureItems = (props) => {
    return (
        <React.Fragment>
                    <Grid item xs={12} md={6} lg={6}>
                        <FeatureItem link="/call-blocking" image={callBlocking100} title="Call Blocking" />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                            <FeatureItem link='/call-forwarding' image={callForwarding100} title="Call Forwarding" />
                    </Grid>             
               
                    <Grid item xs={12} md={6} lg={6}>
                        <FeatureItem link='/call-recording' image={callRecording100} title="Call Recording" />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                            <FeatureItem link='/call-whisper' image={callWhisper100} title="Call Whispering" />
                    </Grid>                
               
                    <Grid item xs={12} md={6} lg={6}>
                        <FeatureItem link='/conference-calling' image={conference100} title="Conferencing" />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                            <FeatureItem link='/personalised-voicemail' image={personalized100} title="Personalised Voicemails" />
                    </Grid>               
               
                    <Grid item xs={12} md={6} lg={6}>
                        <FeatureItem link='/translation' image={translation100} title="Real-time Translation" />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                            <FeatureItem link='/web-integration' image={webIntegrations100} title="Web Integration" />
                    </Grid>               
            
        </React.Fragment>
    )
}

export default AllFeatureItems;








