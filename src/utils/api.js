import http from '../utils/http';
import {subject,success} from '../utils/responseMock'
/**
 * 獲取課程名稱
 */
export function getSubjectList(){
  return new Promise((resolve, reject) => {
    resolve(subject)
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
    resolve(success)
    // http("post",'/postUser', param).then(res => {
    //   resolve (res);
    // },error => {
    //   console.log("internet error~",error);
    //   reject(error)
    // })
  })
}
