import React, { Component, PropTypes } from 'react';
import {connect} from "react-redux"
import fetchJSON from "app/fetchJSON";
import consts from "app/consts"

import { get as getArtist } from "app/reducers/artist"
import { get as getAlbum } from "app/reducers/albums"
import { get as getAlbums_tracks } from "app/reducers/albums_tracks"


import AlbumInfo from "AlbumInfo"

@connect(
    (state) => ({

        albums : state.albums,
        albums_tracks : state.albums_tracks
    }),
    (dispatch) => ({

        getAlbum : (value) => dispatch(getAlbum(value)),
        getAlbums_tracks : (value) => dispatch(getAlbums_tracks(value))

    }),
)
export default class PageAlbum extends Component {

  static propTypes = {
      params: PropTypes.shape({
        artistId:PropTypes.string,
      }),
      artists : PropTypes.object,

  };

  static defaultProps = {
      params: {},
      artist : null,
      albums : null,
      album_track : null,
 
      getAlbums_tracks : () => {}
  };
  componentDidMount(){

      const {
        params,
    
        getAlbums_tracks,
      } = this.props

      if(params.albumId) {
       
        getAlbums_tracks(params.albumId)
      }
  }

  componentWillReceiveProps(nextProps){
    const {
      params,
    
      getAlbums_tracks,
    } = this.props

    if(nextProps.params.albumId!=params.albumId){

      getAlbums_tracks(params.albumId)

    }
  }

  render() {
    const {
      params,
      artist,
      albums_tracks,
    } = this.props
    
    //console.log(albums_tracks.popularity)

    return (
      <div>
            {
                albums_tracks && !albums_tracks.loading &&
                <AlbumInfo name={albums_tracks.artists[0].name}
                album_track={albums_tracks}
                image={albums_tracks.images ? albums_tracks.images[1].url : null}
                date={albums_tracks.release_date}
                populariter={albums_tracks.popularity}
                total={albums_tracks.tracks.total}/>
            }
      </div>
    )
  }
}
