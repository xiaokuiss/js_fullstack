// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const got = require('got')

let appid = '	wx4deef67b98026f38';
let secret = '63d675ce99cd8711de71594ce0f7acd2';

let msgCheckUrl = 'https://api.weixin.qq.com/wxa/msg_sec_check?access_token=';
let tokenUrl = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid= ' + appid + '&secret=' + secret;
//https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx4deef67b98026f38&secret=63d675ce99cd8711de71594ce0f7acd2
// 云函数入口函数
exports.main = async (event, context) => {
  // 令牌许可
  // let tokenResponse = await got(tokenUrl);
  // console.log(tokenResponse);
  // let token = JSON.parse(tokenResponse.body).access_token;
  // console.log(token);
  // let checkResponse = await got (msgCheckUrl + token, {
  //   body: JSON.stringify({
  //     content: event.text
  //   })
  // });
  // console.log(checkResponse)
  // return checkResponse.body;
  return event.a + event.b;
 
}