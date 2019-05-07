import React from 'react';
import { withRouter } from "react-router-dom";

import { Slide } from 'react-slideshow-image';
import TopBar from '../../util/TopBar';
import Button from 'components/util/Button';

import image1 from '../../../../images/onboarding/1.png';
import image2 from '../../../../images/onboarding/2.png';
import image3 from '../../../../images/onboarding/3.png';
import image4 from '../../../../images/onboarding/4.png';
import image5 from '../../../../images/onboarding/5.png';
import image6 from '../../../../images/onboarding/6.png';
import image7 from '../../../../images/onboarding/7.png';
import image8 from '../../../../images/onboarding/8.png';
import image9 from '../../../../images/onboarding/9.png';
import image10 from '../../../../images/onboarding/10.png';
import image11 from '../../../../images/onboarding/11.png';
import image12 from '../../../../images/onboarding/12.png';
import image13 from '../../../../images/onboarding/13.png';
import image14 from '../../../../images/onboarding/14.png';
import image15 from '../../../../images/onboarding/15.png';
import image16 from '../../../../images/onboarding/16.png';
import image17 from '../../../../images/onboarding/17.png';
import image18 from '../../../../images/onboarding/18.png';

const properties = {
    duration: 5000,
    transitionDuration: 200,
    infinite: true,
    indicators: true,
    arrows: true,
    autoplay: false
}

class Onboarding extends React.Component {
    render() {
        return (
            <div className="onboarding-container">
                <TopBar />
                <div className="slide-container">
                    <Slide {...properties}>
                        <div className="each-slide">
                            <div className="image-container">
                                <img src={image1} />
                            </div>
                            <br /><br /><br /><br /><br />
                            <span>Welcome the BQUEST! We'll be showing you how to navigate our site.</span>
                            <br /><br />
                            <span>Feel free to skip this and explore on your own if you wish by</span>
                            <br />
                            <span>clicking on the green button at the bottom left corner.</span>
                            <br />
                        </div>
                        <div className="each-slide">
                            <div className="image-container">
                                <img src={image2} />
                            </div>
                            <br /><br /><br /><br /><br />
                            <span>This is BQUEST's homepage, and what all old users see upon logging in.</span>
                            <br /><br />
                            <span>To return to it, click "Home" in the nav bar up top, or the BQUEST logo in the footer.</span>
                            <br />
                        </div>
                        <div className="each-slide">
                            <div className="image-container">
                                <img className="change" src={image3} />
                                <img src={image4} />
                            </div>
                            <br /><br /><br /><br /><br />
                            <span>Now the important part - finding an ambassador. You can look for an ambassador by</span>
                            <br />
                            <span>clicking on the main button or "Ambassadors" on the top nav bar,</span>
                            <br />
                            <span>which directs you to the search function.</span>
                            <br />
                        </div>
                        <div className="each-slide">
                            <div className="image-container">
                                <img src={image5} />
                                <img src={image6} />
                            </div>
                            <br /><br /><br /><br /><br />
                            <span>Click on "Search for a major" and type away! Hit Enter to find</span>
                            <br />
                            <span>ambassadors within that major or related ones.</span>
                            <br />
                        </div>
                        <div className="each-slide">
                            <div className="image-container">
                                <img src={image7} />
                            </div>
                            <br /><br /><br /><br /><br />
                            <span>Ambassadors with the major or related ones will pop up below.</span>
                            <br />
                            <span>Click on any ambassadors below to get started.</span>
                            <br />
                        </div>
                        <div className="each-slide">
                            <div className="image-container">
                                <img src={image8} />
                            </div>
                            <br /><br /><br /><br /><br />
                            <span>This is the Ambassador profile! It tells you a bit more</span>
                            <br />
                            <span>about the ambassador, and also the classes they've taken.</span>
                            <br /><br />
                            <span>The other ambassadors from your search can be found to the left of the profile.</span>
                            <br />
                        </div>
                        <div className="each-slide">
                            <div className="image-container">
                                <img src={image9} />
                                <img className="change" src={image10} />
                            </div>
                            <br /><br /><br /><br /><br />
                            <span>Don't think they're quite the right one? You can return to search by clicking "Ambassadors"</span>
                            <br />
                            <span>in the nav bar up top, or by clicking "Search" at the top left corner of the ambassador profile.</span>
                            <br />
                        </div>
                        <div className="each-slide">
                            <div className="image-container">
                                <img className="change" src={image11} />
                                <img src={image12} />
                            </div>
                            <br /><br /><br /><br /><br />
                            <span>Think they're the right one? Hit the "Send a message" button to start chatting!</span>
                            <br /><br />
                            <span>Once a conversation has been started, it can be accessed through the</span>
                            <br />
                            <span>"Messages" button in the nav bar up top.</span>
                            <br />
                        </div>
                        <div className="each-slide">
                            <div className="image-container">
                                <img src={image13} />
                            </div>
                            <br /><br /><br /><br /><br />
                            <span>If any point there is any inappropriate behavior or something isn't</span>
                            <br />
                            <span>quite right, use the "Report Ambassador" button below it and our team will investigate.</span>
                            <br />
                        </div>
                        <div className="each-slide">
                            <div className="image-container">
                                <img src={image14} />
                                <img src={image15} />
                            </div>
                            <br /><br /><br /><br /><br />
                            <span>Once you've sent your message, you'll arrive here.</span>
                            <br /><br />
                            <span>All conversations with other users will appear to the left.</span>
                            <br />
                            <span>See your conversation history and send more messages on the right.</span>
                            <br />
                        </div>
                        <div className="each-slide">
                            <div className="image-container">
                                <img src={image16} />
                                <img src={image17} />
                            </div>
                            <br /><br /><br /><br /><br />
                            <span>Finally, you can access Settings from the nav bar at the top. To edit any</span>
                            <br /><br />
                            <span>information, simply type it in and it will save it automatically.</span>
                            <br />
                        </div>
                        <div className="each-slide">
                            <div className="image-container">
                                <img src={image18} />
                            </div>
                            <br /><br /><br /><br /><br />
                            <span>You can logout from BQUEST anytime!</span>
                            <br />
                            <span>Just hit the "Logout" button in the top right corner.</span>
                            <br />
                        </div>
                        <div className="each-slide">
                            <div className="image-container">
                                <img src={image1} />
                            </div>
                            <br /><br /><br /><br /><br />
                            <span>And that's BQUEST! If you forget this stuff, no worries. Just go to the Homepage and</span>
                            <br />
                            <span>click the link under "Find an Ambassador", and we'll guide you through it again.</span>
                            <br /><br />
                            <span>Now go out and find the answers you seek.</span>
                            <br />
                        </div>
                    </Slide>
                </div>
                <div className="onboarding-button">
                    <Button onClick={() => this.props.history.push("/home")} color="green">I'm good, let me explore!</Button>
                </div>
            </div>
        );
    }
}

export default withRouter(Onboarding);
