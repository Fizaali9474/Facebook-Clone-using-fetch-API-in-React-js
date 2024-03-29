/*import {useEffect,   } from "react";
import { useState } from "react";

function App(){
const [posts , setPosts]=useState([])
useEffect(function(){getFBdata()},[])

function getFBdata(){
fetch('https://dummyjson.com/products')

.then(res=>res.json())
.then((res) =>{
setPosts(res.products);
});

}

return(
    <div>
        {posts.map((function(item){
         return<h1>{item.title}</h1>
        }))}
    </div>
)
    }
export default App

import FaceBook from './Views/FaceBook.js';
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPostFromAPI();
  }, []);

  function getPostFromAPI() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setPosts(res.products);
      });
  }

  return (
    <div className="main-container">
      {posts.map((item, index) => (
        <div key={index} className="card">
      <div/>
      <img  style={{ borderRadius:"200%"  , height:"-8%"  , width:"13%" , float:"left" }}  src=' https://media-mct1-1.cdn.whatsapp.net/v/t61.24694-24/411798478_2149136082096030_960423575008428094_n.jpg?ccb=11-4&oh=01_AdTHAQqGcdCkctiSzrZeS9hIz-9c3csxqy6voYwNaAVWXw&oe=65A3A5C6&_nc_sid=e6ed6c&_nc_cat=102 '  >
    
      </img>
       <h2  style={{ width: "41%" , fontSize:"40px" , fontFamily:"bold"   }}  ><a href='https://www.facebook.com/aries.alian'>Fiza Ali</a></h2>
       <h4  style={{ textAlign:"left" , backgroundColor:"palevioletred"}}   ><a href='https://www.facebook.com/aries.alian'>January 4, 2023 at 3:12 PM</a></h4>
        

          <FaceBook images={item.images} />
          <h1  style={{ fontSize:"300%" , backgroundColor:"violet" , fontFamily:"sans-serif" }}   >{item.title}</h1>
        
         {Object.entries(item).map(([key, value]) => (
            key !== "images" && key !== "thumbnail" && (
              <p   style={{ fontSize:"150%" , backgroundColor:"lightpink", fontFamily:"cursive"   }}   key={key}>
                {key}: {value}
              </p>
            )
          ))}
        </div>
      ))}
    </div>
  );
}

export default App*/

import FBReactions from './Components/FBReactions';
import FbBtn from './Components/FbBtn';
import React, { useEffect, useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faShare} from '@fortawesome/free-solid-svg-icons';


function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPostFromAPI();
  }, []);

  function getPostFromAPI() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setPosts(res.products);
      });
  }

  return (
   

    <div className="main-container">
    {posts.map((item, index) => (
      <div key={index} className="card">
    <div/>
    <img  style={{ borderRadius:"200%"  , height:"-8%"  , width:"13%" , float:"left" }} 
     src=' https://media-mct1-1.cdn.whatsapp.net/v/t61.24694-24/411798478_
     2149136082096030_960423575008428094_n.jpg?ccb=11-4&oh=01_AdTHAQqGcdCkctiSzrZeS9hIz
     -9c3csxqy6voYwNaAVWXw&oe=65A3A5C6&_nc_sid=e6ed6c&_nc_cat=102 '  >
  
    </img>
     <h2  style={{ width: "41%" , fontSize:"40px" , fontFamily:"bold"   }}  >
      <a href='https://www.facebook.com/aries.alian'>Fiza Ali</a></h2>
     <h4  style={{ textAlign:"left" , backgroundColor:"palevioletred"}}   >
      <a href='https://www.facebook.com/aries.alian'>January 4, 2023 at 3:12 PM</a></h4>
      

        <FBReactions images={item.images} />
        <h1  style={{ fontSize:"300%" , backgroundColor:"violet" , fontFamily:"sans-serif" }}   >{item.title}</h1>
      
       {Object.entries(item).map(([key, value]) => (
          key !== "images" && key !== "thumbnail" && (
            <p   style={{ fontSize:"150%" , backgroundColor:"lightpink", fontFamily:"cursive"   }}   key={key}>
              {key}: {value}
            </p>
          )
        ))}



<FbBtn/>
<div className="comment-icon">
 <FontAwesomeIcon icon={faComment} /> Comment 

</div>
<div className="share-icon">
 <FontAwesomeIcon icon={faShare} />Share 

</div>
        </div>
      ))}
    </div>
  );
          }

export default App;
      
