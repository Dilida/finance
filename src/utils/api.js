import http from '../utils/http';
import {responseObj} from '../utils/responseMock'
/**
 * 獲取課程名稱
 */
export function getSubjectList(){
  return new Promise((resolve, reject) => {
    resolve(JSON.parse(responseObj.subject))
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
    resolve(JSON.parse(responseObj.success))
    // http("post",'/postUser', param).then(res => {
    //   resolve (res);
    // },error => {
    //   console.log("internet error~",error);
    //   reject(error)
    // })
  })
}
