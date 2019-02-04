import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ProfilePicture from '../../profilePicture';

import { FormGroup, Input, Label } from 'reactstrap';

class GeneralProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: this.props.user.email,
            name: `${this.props.user.first_name} ${this.props.user.last_name}`,
            year: this.props.user.year,
        };
    };

    componentWillReceiveProps(props) {
        this.setState({
            email: props.user.email,
            name: `${props.user.first_name} ${props.user.last_name}`,
            year: props.user.year,
        });
    }

    validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    render() {
        return(
            <MuiThemeProvider>
                <div className="profile">
                    <div className="general-profile-vsplit">
                        <div className="general-profile-image left">
                            <ProfilePicture
                                picture={this.props.profile.getIn(['user', 'picture'])}
                                editable={true}
                                setProfilePic={this.props.setProfilePic}
                            />
                        </div>
                        <div className="right">
                            <div>
                                <FormGroup>
                                    <Label for="name-field">Full Name</Label>
                                    <Input
                                        id="name-field"
                                        name="name-field"
                                        value={this.state.name}
                                        onChange={({ target }) => this.setState({ name: target.value })}
                                        onKeyUp={(event) => {
                                            if (event.key === 'Enter') {
                                                event.target.blur();
                                            }
                                        }}
                                        onBlur={({ target }) => {
                                            let name = target.value.toString().trim();
                                            let nameArr = name.split(/\ +/);
                                            let firstName = '';
                                            let lastName = '';
                                            if (nameArr.length === 0) {
                                                return; // does nothing
                                            } else if (nameArr.length === 1) {
                                                firstName = nameArr[0];
                                                lastName = ''; // in case someone does not have a last name (rare but occurs)
                                            } else {
                                                firstName = nameArr.slice(0, nameArr.length-1).join(' ');
                                                lastName = nameArr[nameArr.length-1];
                                            }
                                            this.props.updateMultipleProfile(['first_name', firstName], ['last_name', lastName]);
                                        }}
                                    />
                                </FormGroup>
                            </div>
                            <div>
                                <FormGroup>
                                    <Label for="year-field">Year</Label>
                                    <Input type="select" name="year-field" id="year-field"
                                           value={this.state.year}
                                           onChange={({ target }) => {
                                               this.setState({ year: target.value });
                                               this.props.updateProfile('year', target.value);
                                           }}>
                                        <option value="1st">1st</option>
                                        <option value="2nd">2nd</option>
                                        <option value="3rd">3rd</option>
                                        <option value="4th">4th</option>
                                    </Input>
                                </FormGroup>
                            </div>
                            <div>
                                <FormGroup>
                                    <Label for="email-field">Preferred Email</Label>
                                    <Input
                                        type="email"
                                        id="email-field"
                                        name="email-field"
                                        value={this.state.email}
                                        onChange={({ target }) => this.setState({ email: target.value })}
                                        onKeyUp={(event) => {
                                            if (event.key === 'Enter') {
                                                event.target.blur();
                                            }
                                        }}
                                        onBlur={({ target }) => {
                                            if (!this.validateEmail(target.value)) {
                                                this.setState({ email: this.props.user.email }); // discard user entered value
                                                // TODO: add an alert here
                                            } else {
                                                this.props.updateProfile('email', target.value);
                                            }
                                        }}
                                    />
                                    <p className="hint">You will receive email notifications when you have a new contact.</p>
                                </FormGroup>
                            </div>
                        </div>
                    </div>
                    <div className="guide">
                        <h4>How to use BQUEST</h4>
                        <ul>
                            <li>If you don’t use your UCLA email or check it often, make sure you update your preferred email.</li>
                            <li>If you signed up to be an ambassador, activate and fill out your Ambassador Profile.</li>
                            <li>If you’re looking for an ambassador, click “Ambassadors” up top, and send out a request to meet with an ambassador on campus.</li>
                            <li>Please remember ambassadors are just students who wants to help you. You should buy them a cup of coffee as a thank you for their time.</li>
                            <li>If you want to see the ambassadors you have contacted, click “Messages” up top. These will also be send to your email at the address you specified above.</li>
                        </ul>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default GeneralProfile;
