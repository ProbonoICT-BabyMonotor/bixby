import http from 'http';
import console from 'console';
import secret from 'secret';

export default function () {
  let options = {
    format: 'json',
    headers: {
      'Content-Type': 'application/json'
    },
  }

  let params = {
    memberPhone: secret.get("id"),
    memberPassword: secret.get("pw")
  }

  var response = http.postUrl(secret.get("url"), params, options);

  console.log(response['message']);
  return response['message'];
}
