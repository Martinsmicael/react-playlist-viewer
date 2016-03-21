import React, { Component } from 'react';

import styles from "./index.css"

const Item = ({name ="", image=null, kinds=[], songs=[], album_list=[] }) =>

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


    <div className={styles.kinds}>
      {
        album_list&&
        album_list.map((album, index) =>{
          return <li className={styles.song} key={index}>{album.name}</li>
        })
      }
      </div>

</div>)


export default Item
