import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import styles from "./index.css"

const Item = ({name="", image=null, album_track=[], artist=[], date=[], populariter=[], total=[]   }) =>

(<div className={styles.AlbumInfo}>
  <h2 className={styles.title}>{name}</h2>
  {
    image &&
    <img src={image} className={styles.image} />
  }
  {
    date &&
    <span>Date de sortie : {date}</span>
  }
    <div>Populariter : {populariter}</div>
    <div>Titres : {total}</div>
  { 
    album_track && !album_track.loading &&
    Object.keys(album_track.tracks.items).map((album_trackKey, index) =>{
      return <li><span> {album_track.tracks.items[album_trackKey].track_number})  </span> 
                 <span> {album_track.tracks.items[album_trackKey].name}</span>
                 <span> <Link to={`/lecteur/${album_track.tracks.items[album_trackKey].preview_url}`}>Preview : </Link></span>
                 lezoc
                 <div className="track-container">
                  <div className="album-cover">
                    <img src={album_track[album_trackKey].images[2].url}/>
                  </div>
                    <div className="track-header">
                      <p><{album_track.tracks.items[album_trackKey].name}</p>
                      <br/>
                      <span>{{name}}</span>
                    </div>
                  <div className="track-player">
                      <audio controls>
                        <source src={album_track.tracks.items[album_trackKey].preview_url +".mp3"} type="audio/mpeg"/>
                        Your browser does not support the audio element.
                      </audio>
                  </div>
                </div></li> 
    })
  }
</div>)


export default Item
