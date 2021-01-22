import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./Main.css";
import InfoContainer from "./InfoContainer";
import axios from 'axios'

export default function Main() {
  const [contentfuls, setContentfuls] = useState([]);
  const [showInfos, setShowInfos] = useState(-1); //index of item in contentfuls array, -1 -> disable Infocontainer

  //get Data from Contentful
  useEffect(() => {
       axios
      .get(
        `http://localhost:5000/books`
      )
      .then((res) => {
        setContentfuls(res.data.data)
        })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="main-container">
          {/* <div className="logo">
            <b>
              G<span>ro</span>up<span>2</span>
              <span> </span>Lib<span>ra</span>ry
            </b>
          </div> */}
          <div className="book-container">
            <ul className="list-inline">
              {contentfuls.map((book, idx) => {
                return (
                  <li className="book">
                    <img
                      onClick={() => setShowInfos(idx)}
                      src={book.bookInfo.thumbnail}
                    />
                  </li>
                );
              })}
              {showInfos > -1 ? (
                <InfoContainer book={contentfuls[showInfos]} setShowInfos={setShowInfos}/>
              ) : (
                ""
              )}
            </ul>
          </div>
      </div>
    </>
  );
}
