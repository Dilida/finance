import http from '../utils/http';
import {subject, subjectContent, success} from '../utils/responseMock'
/**
 * 獲取課程名稱
 */
export function getSubjectList(){
  return new Promise((resolve, reject) => {
    resolve(subject.data)
    // http("get",'/getSubject').then(res => {
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

export function postSubject(param){
  return new Promise((resolve, reject) => {
    resolve(subjectContent.data)
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
