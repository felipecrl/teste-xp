import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

// Actions
import * as authTokenActions from "../../authToken/actions/auth-token.actions";
import * as albumActions from "./actions/album.actions";

// Components
import { Logo, Tracks } from "../../components";

class Album extends Component {
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
          <div className="back mb-2">
            <Link to="/">&lt; Voltar</Link>
          </div>

          <div className="album">
            <div className="info">
              <div className="cover mb-3" />
              <span className="fonte-18 fonte-light-gray mb-1">
                Nome do album grande duas linhas
              </span>
              <span className="fonte-14 fonte-gray">
                Nome do artista grande duas linhas
              </span>
            </div>
            <div className="list-tracks">
              <Tracks number="1." name="Nome da música" time="2:32" />
              <Tracks number="1." name="Nome da música" time="2:32" />
              <Tracks number="1." name="Nome da música" time="2:32" />
              <Tracks number="1." name="Nome da música" time="2:32" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Album.propTypes = {
  token: PropTypes.string
};

function mapStateToProps(state) {
  return {
    token: state.token,
    album: state.album
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        ...authTokenActions,
        ...albumActions
      },
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);
