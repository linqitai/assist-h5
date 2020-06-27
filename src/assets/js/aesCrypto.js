import CryptoJS from "crypto-js";

var ivStr = "iloveyouamituofo";
var keyStr = "amituofoloveyoui";

// 默认的 KEY 与 iv 如果没有给
/* const KEY = CryptoJS.enc.Utf8.parse("amituofoloveyoui");//""中与后台一样  密码
const IV = CryptoJS.enc.Utf8.parse("iloveyouamituofo");//""中与后台一样 */
export default {
	/**
	 * AES加密 ：字符串 key iv  返回base64
	 */
	
	/**
	 * AES 解密 ：字符串 key iv  返回base64
	 *
	 */
	aesDecode(encodePassword) {
		var d = encodePassword.substr(9);
		var key = CryptoJS.enc.Latin1.parse('abcdef0123456789');//需要与后台保持一致
		var iv = CryptoJS.enc.Latin1.parse('0123456789abcdef');//需要与后台保持一致
		var decrypted = CryptoJS.AES.decrypt(d, key, {
			iv : iv,
			padding : CryptoJS.pad.ZeroPadding
		});
		var password = decrypted.toString(CryptoJS.enc.Utf8);
		return password;
	}
}

/* export default {
  // 加密
  encrypt(word) {
    let key = CryptoJS.enc.Utf8.parse(keyStr);
    let iv = CryptoJS.enc.Utf8.parse(ivStr);
    let srcs = CryptoJS.enc.Utf8.parse(word);

    let encrypted = CryptoJS.AES.encrypt(srcs, key, {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    });
    return encrypted.toString();
  },
  // 解密
  decrypt(word) {
    var key = CryptoJS.enc.Utf8.parse(keyStr);
    let iv = CryptoJS.enc.Utf8.parse(ivStr);

    var decrypt = CryptoJS.AES.decrypt(word, key, {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    });
    return decrypt.toString(CryptoJS.enc.Utf8);
  }
}; */