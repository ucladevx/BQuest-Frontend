import React from 'react';

import NavBar from 'components/navbar';
import SearchBar from './searchBar';
import Footer from '../../footer';

import SearchResultContainer from './searchResultContainer';
import Results from './results';

class Search extends React.Component {
    render() {
        return(
            <div className="search-container">
                <NavBar />
                <div className="search">
                    <SearchBar
                        handleSearch={this.props.handleSearch}
                    />
                </div>
                <Results
                    mentors={this.props.mentors}
                    count={this.props.count}
                    _internal={this.props._internal} 
                />
                <Footer />
            </div>
        );
    }
}

export default Search;
