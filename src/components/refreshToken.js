import React from 'react'
import { my_app } from './auth.service';
const refreshToken = () => {
    let currUser = JSON.parse(localStorage.getItem("my_app_user"));
    let getUserFormData = new FormData();
    getUserFormData.append("grant_type", "refresh_token");
    getUserFormData.append("refresh_token", currUser.refresh_token);
    return new Promise((resolve, reject) => {
      my_app
      .post(`${URL}/token/url/`, getUserFormData, {
        headers: {
          Authorization: "Basic {secret_key}"
        }
      })
      .then(async response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
    });
  };
export default refreshToken
