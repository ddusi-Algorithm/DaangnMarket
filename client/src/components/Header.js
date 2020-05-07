import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Category from "./Category";
import MyDrop from "./MyDropMenu";
const Headers = styled.header`
  width: 100%;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  top: 0;
  position: fixed;
  background-color: #fff;
  z-index: 100;
  .container {
    img {
      display: inline-block;
      margin-top: 12px;
      padding: 10px 0;
      width: 132px;
    }
    div {
      display: inline-block;
    }
    .inputBox {
      margin: 20px 0 20px 20px;
      width: 470px;
      height: 20px;
      position: relative;
      padding: 12px;
      border: 1px solid #ff8a3d;
      border-radius: 5px;
      input {
        position: absolute;
        top: 13px;
        left: 10px;
        width: 440px;
        font-size: 17px;
        border: 0;
      }
      div {
        display: inline-block;
      }
      .inputBox {
        margin: 20px 0 20px 20px;
        width: 470px;
        height: 20px;
        position: relative;
        padding: 12px;
        border: 1px solid #ff8a3d;
        border-radius: 5px;
        input {
          position: absolute;
          top: 13px;
          left: 10px;
          width: 440px;
          font-size: 17px;
          border: 0;
        }
        label {
          position: absolute;
          top: 10px;
          right: 10px;
          img {
            padding: 0;
            width: 26px;
            margin-top: 0px;
          }
        }
      }
      section {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        > a {
          display: inline-block;
          > div {
            width: 140px;
            border: 1px solid #ff8a3d;
            border-radius: 20px;
            color: #ff8a3d;
            font-weight: bold;
            text-align: center;
            height: 40px;
            position: relative;
            margin: 0;
            &:hover {
              background-color: #ff8a3d;
              color: white;
            }
            div {
              position: absolute;
              width: 100%;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
        }
        div:first-child {
          margin-right: 10px;
        }
      }
    }
  }
`;
let localID, localPW ;
const Header = () => {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    localID = localStorage.getItem("id");
    localPW = localStorage.getItem("pw");

    if (localID  && localPW ) {
        console.log(localID,localPW);
        setLogin(true);
    }
  }, []);

  const logOut = () => {
    setLogin(false);
    localStorage.setItem("id", "");
    localStorage.setItem("pw", "");
  };

  
    return (
    <Headers>
      <Category />
      <div className="container">
        <Link to="/">
          {
            // 로고 클릭시 메인으로 이동
          }
          <img src="./img/logo.svg" alt="로고" />
        </Link>
        <div className="inputBox">
          <input
            type="text"
            name="search"
            id="searchItem"
            placeholder="지역, 상품, 업체등을 검색해보세요."
          />
          <label htmlFor="searchItem">
            <img src="./img/search-icon.svg" alt="search" />
          </label>
        </div>

        {login ? ( //로그인 여부확인
          <MyDrop localID={localID} logOut={logOut}></MyDrop>
        ) : (
          <section>
            <Link to="/register">
              <div className="signIn">
                <div>회원가입</div>
              </div>
            </Link>
            <Link to="/login">
              <div className="logIn">
                <div>로그인</div>
              </div>
            </Link>
          </section>
        )}
      </div>
    </Headers>
  );
};

export default Header;