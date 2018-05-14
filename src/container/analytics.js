import React from 'react';
import GoogleAnalytics from 'react-ga';

GoogleAnalytics.initialize('UA-118469639-1');

const withTracker = (WrappedComponent, options = {}) => {
    const trackPage = page => {
            GoogleAnalytics.set({
            page,
            ...options,
        });
        GoogleAnalytics.pageview(page);
    };

    const HOC = class extends React.Component {
        componentDidMount() {
            const page = this.props.location.pathname;
            trackPage(page);
        }

        componentWillReceiveProps(nextProps) {
            const currentPage = this.props.location.pathname;
            const nextPage = nextProps.location.pathname;

            if (currentPage !== nextPage) {
                trackPage(nextPage);
            }
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };

    return HOC;
};

export default withTracker;
