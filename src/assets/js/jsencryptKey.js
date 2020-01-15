import Vue from 'vue'
import JsEncrypt from 'jsencrypt'

Vue.prototype.$encryption = function(obj){
	let publicKey = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAgSjCttX/jUBHyK1UtJOWvckHHNtbJICMRysZWg9/pZ8TuXPODIJ+wSyV4PbaLImvalf60iRdbCY96qlZamF/BEvcScChHweJ/pf/AT6KUDjFwXTnCj18i+Fzck3MqSm7+3kdUYsJz5Et7GGlHmnwvTDFibRAM4UbSrer+KCdRlagX0zY4sjLwjP88yY9jmqQQ+0CKr2GubYeFlRkAcNiQpAByDWxNsTx/M2FG1Bog5Ee3kAqZKKrMOaf5E9wN8QT7JDqTIUs9QV066YLH553h9w5ntSjG7Jqt8WWkgufeepvNAi2njHJ6f1mEKstAkywjo7N17eowu3I7BT/atqoLwIDAQAB";
	let encrypt = new JsEncrypt();
	encrypt.setPublicKey(publicKey);
	return encrypt.encrypt(obj);
}