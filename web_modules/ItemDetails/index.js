import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import styles from "./index.css"

const Item = ({name ="", image=null, kinds=[], songs=[], album=[] }) =>

(<div className={styles.itemDetails}>
    {
      image &&
      <img src={image} className={styles.image} />
    }
    <h2 className={styles.title}>{name}</h2>
    <div className={styles.kinds}>
      {
        kinds &&
        kinds.map((item, index) => {
          const isLastItem = index<kinds.length-1;
          return <span key={index}>{item}{isLastItem && ", "}</span>
        })
      }
    </div>
      <ul className={styles.list}>
        {
          songs &&
          songs.map((song, index) => {
            return <li className={styles.song} key={index}>{song.name}</li>
          })
        }
      </ul>
    <div>
      {
        album && !album.loading &&
        Object.keys(album).map((albumKey, index) =>{
          //console.log(album[albumKey].images[0].url)
          return <div key={index}>
            <div> <Link to={`/album/${album[albumKey].id}`}>
              {album[albumKey].name}
              {album[albumKey].album_type}
              <img src={album[albumKey].images[1].url}   className={styles.image} />
            </Link></div>
            
          </div>
        })
      }
    </div>
</div>)


export default Item
