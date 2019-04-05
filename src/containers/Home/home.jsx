import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Actions
import * as authTokenActions from "../../authToken/actions/auth-token.actions";
import * as homeActions from "./actions/home.actions";

// Components
import { Logo, Search, ListItems } from "../../components";

class Home extends Component {
  componentDidMount() {
    const { actions } = this.props;

    let hashParams = {};
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    if (!hashParams.access_token) {
      window.location.href =
        "https://accounts.spotify.com/authorize?client_id=f39fc3627742404a994315bd374549f0&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=http://localhost:8080/callback";
    } else {
      actions.setToken(hashParams.access_token);
    }
  }

  render() {
    return (
      <div className="container">
        <Logo />

        <div className="content">
          <Search />

          <ListItems />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  token: PropTypes.string
};

function mapStateToProps(state) {
  return {
    token: state.token,
    home: state.home
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        ...authTokenActions,
        ...homeActions
      },
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
