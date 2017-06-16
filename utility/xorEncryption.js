/**
* 获得 xor 的加密 key
*/
// 给定范围随机整数
var randomInt = function(min, max){
	return Math.floor(Math.random() * (max - min + 1) + min);
}
// 随机16进制数
var randomHex = function(){
	var res = 0;
	for(var i=4; i>0; i--){
		res += randomInt(0,1)<<(i-1);
	}
	return res.toString(16);
}

var randomHex2 = function(){
	return randomInt(0,15).toString(16);
}
// 获取制定长度的key
var getKey = function(len){
	var arr = [];
	len = len || 32;
	for(var i=0; i<len; i++){
		arr.push( randomHex() );
	}
	return arr.join("");
}

/* xor加密解密
*/ 
var xorEncryption = function( message, key ){
	var arr = [];
	for(var i=0; i<32; i++){
		var m = parseInt( message.substr(i,1) , 16);
		var k = parseInt( key.substr(i,1) , 16);
		arr.push( (m^k).toString(16) );
	}
	return arr.join("");
}

// test
var message = getKey();
console.log("message=", message);
var key = getKey(); // getKey()
console.log("key=", key);
var encryMsg = xorEncryption(message, key);
var decryMsg = xorEncryption(encryMsg, key);
console.log("encryMsg=", encryMsg);
console.log("decryMsg=", decryMsg);