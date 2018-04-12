import React from 'react';

import Header from './header';

import ThreadPreview from './threadPreview';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <Header
                    numMessages={this.props.count}
                    numUnread={5}
                />
                <div className="thread-previews">
                    {this.props.threads.map(thread => {
                        const isProfileViewing = this.props.profileViewing.get('profileID') == thread.getIn(['other_profile', 'id']);
                        return (
                            <ThreadPreview
                                onClick={this.props.changeProfileViewing}
                                self={this.props.profile}
                                thread={thread}
                                isProfileViewing={isProfileViewing}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Sidebar;
