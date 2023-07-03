import http from '../utils/http';

/**
 * 獲取課程名稱
 */
export function getArticleList(){
  return new Promise((resolve, reject) => {
    http("get",'/article/home/index').then(res => {
      resolve (res);
    },error => {
      console.log("internet error~",error);
      reject(error)
    })
  })
}

export function postUser(param){
  return new Promise((resolve, reject) => {
    http("post",'/postUser', param).then(res => {
      resolve (res);
    },error => {
      console.log("internet error~",error);
      reject(error)
    })
  })
}
