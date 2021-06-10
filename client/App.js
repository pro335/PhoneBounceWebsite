import React from "react";
import { HashRouter, Route, Switch, Redirect} from "react-router-dom";
import Home from './src/Pages/Home';
import RoomMeeting from './src/Pages/RoomMeeting';
import Numbers from './src/Pages/Numbers';
import Features from './src/Pages/Features/index.js';
import Platform from './src/Pages/Platform/index.js';
import Support from './src/Pages/Support/index.js';
import Faq from './src/Pages/Faq/index.js';
import Blog from './src/Pages/Blog/index.js';
import TermsOfServices from './src/Pages/Termsofservice/index.js';
import Privacy from './src/Pages/Privacy/index.js';
import CallRecording from './src/Pages/CallRecording/index.js';
import CallForwarding from './src/Pages/CallForwarding/index.js';
import CallBlocking from './src/Pages/CallBlocking/index.js';
import CallWhisper from './src/Pages/CallWhisper/index.js';
import ConferenceCalling from './src/Pages/ConferenceCalling/index.js';
import PersonalizedVoicemail from './src/Pages/PersonalizedVoicemail/index.js';
import Translation from './src/Pages/Translation/index.js';
import WebIntegration from './src/Pages/WebIntegration/index.js';
import Mobile from './src/Pages/Mobile/index.js';
import LocalNumbers from './src/Pages/LocalNumbers/index.js';
import NationalNumbers from './src/Pages/NationalNumbers/index.js';
import TollFree from './src/Pages/TollFree/index.js';
import FreeVideoCalls from './src/Pages/FreeVideoCalls/index.js';
import BuyTelephone from './src/Pages/BuyTelephone/index.js';
import MakeCallsAndMessages from './src/Pages/MakeCallAndMessages/index.js';
import HostMeetingsAnywhere from './src/Pages/HostMeetingAnywhere/index.js';
import ReviewsCallsAndMessages from './src/Pages/ReviewsCallsAndMessages/index.js';
import YourBusinessCard from './src/Pages/YourBusinessCard/index.js';
import CheapInternationalCalls from './src/Pages/CheapInternationalCalls/index.js';
import BenefitsOfVirtualNumbers from './src/Pages/BenefitsIfVirtualNumbers/index.js';
import FriendsAndFamily from './src/Pages/FriendsAndFamily/index.js';
import './App.css';

class App extends React.Component {
    render() {
      
      return(
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/meeting-room" component={RoomMeeting} /> 
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
  export default App;