import http from '../utils/http';
import {question, classApi, success, subjectContent, suggestionValue} from "./responseMock";

function showError(err) {
  if (err.code !== "200" ){
    alert("error:"+ err.msg)
  }
}



/**
 * 獲取課程名稱
 */
export function getClassList(){
  return new Promise((resolve, reject) => {
    resolve(classApi.data)
    /*
	http("get",'/getClassList').then(res => {
      showError(res)
      resolve (res.data);
    },error => {
      console.log("internet error~",error);
      reject(error)
    })
	*/
  })
}

export function getClassValue(param){
  return new Promise((resolve, reject) => {
    // resolve(question.data)
    http("get",'/quiz/'+param).then(res => {
      showError(res)
      resolve (res.data);
    },error => {
      console.log("internet error~",error);
      reject(error)
    })
  })
}

export function getSuggestionValue(){
  return new Promise((resolve, reject) => {
    // resolve(suggestionValue.data)
      http("get",'/getClassValue').then(res => {
        showError(res)
        resolve (res.data);
      },error => {
        console.log("internet error~",error);
        reject(error)
      })
  })
}



export function postUser(param){
  return new Promise((resolve, reject) => {
    resolve(success)
    //http("post",'/postUser', param).then(res => {
    //  showError(res)
    //  resolve (res);
    //},error => {
    //  console.log("internet error~",error);
    //  reject(error)
    //})
  })
}

export function getFilmUrl(param){
  return new Promise((resolve, reject) => {
    // 呼叫 http://www.itez.com.tw:7070/elearn/api/url/{folderId} 時 會回傳 HTML5 課程檔案的實際 URL
    // resolve(subjectContent)
    http("get",'/url/'+param).then(res => {
      showError(res)
      resolve (res);
    },error => {
      console.log("internet error~",error);
      reject(error)
    })
  })
}

export function postSubjectSuggestion(param){
  return new Promise((resolve, reject) => {
    // resolve(success)
    http("post",'/postClass', param).then(res => {
      resolve (res);
    },error => {
      console.log("internet error~",error);
      reject(error)
    })
  })
}

export function postSuggestion(param){
  return new Promise((resolve, reject) => {
    // resolve(success)
    http("post",'/postSuggest', param).then(res => {
      showError(res)
      resolve (res);
    },error => {
      console.log("internet error~",error);
      reject(error)
    })
  })
}
