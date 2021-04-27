import React from "react";
import { HashRouter, Route, Switch, Redirect, withRouter } from "react-router-dom";
import {Home} from '../pages/home';
import RoomMeeting from '../pages/RoomMeeting/index';
import {Numbers} from '../pages/numbers'
import {Features} from '../pages/features'
import {Platform} from '../pages/platform'
import {Support} from '../pages/support'
import {Faq} from '../pages/faq'
import {Blog} from '../pages/blog'
import {TermsOfServices} from '../pages/termsofservice'
import {Privacy} from '../pages/privacy'
import {CallRecording} from '../pages/callRecording'
import {CallForwarding} from '../pages/callForwarding'
import {CallBlocking} from '../pages/callBlocking'
import {CallWhisper} from '../pages/callWhisper'  
import {ConferenceCalling} from '../pages/conferenceCalling'
import {PersonalizedVoicemail} from '../pages/personalizedVoicemail'
import {Translation} from '../pages/translation'
import {WebIntegration} from '../pages/webIntegration'
import {Mobile} from '../pages/mobile'
import {LocalNumbers} from '../pages/localNumbers'
import {NationalNumbers} from '../pages/nationalNumbers'
import {TollFree} from '../pages/tollFree'
import {FreeVideoCalls} from '../pages/freeVideoCalls'
import {BuyTelephone} from '../pages/buyTelephone'
import {MakeCallsAndMessages} from '../pages/makeCallAndMessages'
import {HostMeetingsAnywhere} from '../pages/hostMeetingAnywhere'
import {ReviewsCallsAndMessages} from '../pages/reviewsCallsAndMessages'
import {YourBusinessCard} from '../pages/yourBusinessCard'
import {CheapInternationalCalls} from '../pages/cheapInternationalCalls'
import {BenefitsOfVirtualNumbers} from '../pages/benefitsIfVirtualNumbers'
import {FriendsAndFamily} from '../pages/friendsAndFamily'

class AppRouter extends React.Component {
    render() {
      
      return(
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/meeting-room" component={withRouter(RoomMeeting)} /> 
            <Route exact path="/numbers" component={Numbers} />             
            <Route exact path="/features" component={Features} />
            <Route exact path="/platform" component={Platform} />
            <Route exact path="/support" component={Support} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/termsofservices" component={TermsOfServices} />
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/call-recording" component={CallRecording} />
            <Route exact path="/call-forwarding" component={CallForwarding} />
            <Route exact path="/call-blocking" component={CallBlocking} />
            <Route exact path="/call-whisper" component={CallWhisper} />
            <Route exact path="/conference-calling" component={ConferenceCalling} />
            <Route exact path="/personalised-voicemail" component={PersonalizedVoicemail} />
            <Route exact path="/translation" component={Translation} />
            <Route exact path="/web-integration" component={WebIntegration} />
            <Route exact path="/mobile" component={Mobile} />
            <Route exact path="/national" component={NationalNumbers} />
            <Route exact path="/local" component={LocalNumbers} />
            <Route exact path="/tollfree" component={TollFree} />
            <Route exact path="/free-video-calls" component={FreeVideoCalls} />
            <Route exact path="/buy-telephone-numbers" component={BuyTelephone} />
            <Route exact path="/make-calls-and-messages" component={MakeCallsAndMessages} />
            <Route exact path="/host-meeting-anywhere" component={HostMeetingsAnywhere} />
            <Route exact path="/reviews-calls-and-messages" component={ReviewsCallsAndMessages} />
            <Route exact path="/your-business-card" component={YourBusinessCard} />
            <Route exact path="/cheap-international-calls" component={CheapInternationalCalls} />
            <Route exact path="/benefits-of-virtual-numbers" component={BenefitsOfVirtualNumbers} />
            <Route exact path="/friends-and-family" component={FriendsAndFamily} />
            <Route render={() => <Redirect to="/" />} /> 
            </Switch>
        </HashRouter>
      )
    }   
  }
  export default AppRouter;
