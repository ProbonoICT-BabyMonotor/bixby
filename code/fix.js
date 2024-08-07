import http from 'http';
import console from 'console';
import secret from 'secret';

export default function () {
  let options = {
    format: 'json',
    query: {
      memberNumber: secret.get("number"),
    },
    headers: {
      'Connection': 'keep-alive'
    },
  }

  var response = http.getUrl(secret.get("url")+"/chatbot/bed/fix", options);
  if (response['status'] == 500){
    return "현재 침대 연결 상태가 좋지 않아요."
  }
  console.log(response['message']);
  return response['message'];
}
