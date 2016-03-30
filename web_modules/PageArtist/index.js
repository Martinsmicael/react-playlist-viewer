import React, { Component, PropTypes } from 'react';
import {connect} from "react-redux"
import fetchJSON from "app/fetchJSON";
import consts from "app/consts"

import { get as getArtist } from "app/reducers/artist"
import { get as getAlbum } from "app/reducers/albums"


import ItemDetails from "ItemDetails"

@connect(
    (state) => ({
        artist : state.artist,
        albums : state.albums
    }),
    (dispatch) => ({
        getArtist : (value) => dispatch(getArtist(value)),
        getAlbum : (value) => dispatch(getAlbum(value)),

    }),
)
export default class PageArtist extends Component {

  static propTypes = {
      params: PropTypes.shape({
        artistId:PropTypes.string,
      }),
      artists : PropTypes.object,
      getArtist : PropTypes.func,
      // getAlbum : PropTypes.func,
  };

  static defaultProps = {
      params: {},
      artist : null,
      albums : null,
      getArtist : () => {},
      getAlbum : () => {}
  };
  componentDidMount(){

      const {
        params,
        getArtist,
        getAlbum,
      } = this.props

      if(params.artistId) {
        getArtist(params.artistId) 
        getAlbum(params.artistId)
      }
  }

  componentWillReceiveProps(nextProps){
    const {
      params,
      getArtist,
      getAlbum,
    } = this.props

    if(nextProps.params.artistId!=params.artistId){
      getArtist(nextProps.params.artistId)
      getAlbum(nextProps.params.artistId)
    }
  }

  render() {
    const {
      params,
      artist,
      albums,
    } = this.props

    console.log(albums)

    return (
      <div>
            {
                artist && !artist.loading && albums && !albums.loading &&
                <ItemDetails name={artist.name}
                             image={artist.picture ? artist.picture.url : null}
                             kinds={artist.genres}
                             songs={[{name:"..."},{name:"..."},{name:"..."}]}
                             album={albums} />
            }
    
      </div>
    )
  }
}
