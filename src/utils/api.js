import http from '../utils/http';
import {classApi, subjectContent, success} from '../utils/responseMock'
/**
 * 獲取課程名稱
 */
export function getClassList(){
  return new Promise((resolve, reject) => {
    resolve(classApi.data)
    // http("get",'/getClassList').then(res => {
    //   resolve (res);
    // },error => {
    //   console.log("internet error~",error);
    //   reject(error)
    // })
  })
}

export function postUser(param){
  return new Promise((resolve, reject) => {
    resolve(success)
    // http("post",'/postUser', param).then(res => {
    //   resolve (res);
    // },error => {
    //   console.log("internet error~",error);
    //   reject(error)
    // })
  })
}

export function getFilmUrl(param){
  return new Promise((resolve, reject) => {
    // 呼叫 http://www.itez.com.tw:7070/elearn/api/url/{folderId} 時 會回傳 HTML5 課程檔案的實際 URL

    resolve(subjectContent.url)
    // http("post",'/postUser', param).then(res => {
    //   resolve (res);
    // },error => {
    //   console.log("internet error~",error);
    //   reject(error)
    // })
  })
}

export function postSubjectSuggestion(param){
  return new Promise((resolve, reject) => {
    resolve(success)
    // http("post",'/postUser', param).then(res => {
    //   resolve (res);
    // },error => {
    //   console.log("internet error~",error);
    //   reject(error)
    // })
  })
}

export function postSuggestion(param){
  return new Promise((resolve, reject) => {
    resolve(success)
    // http("post",'/postUser', param).then(res => {
    //   resolve (res);
    // },error => {
    //   console.log("internet error~",error);
    //   reject(error)
    // })
  })
}
