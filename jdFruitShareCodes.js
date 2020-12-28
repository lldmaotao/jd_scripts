/*
东东农场互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写京东东农场的好友码。
// github action用户的好友互助码填写到Action->Settings->Secrets->new Secret里面(Name填写 FruitShareCodes(此处的Name必须按此来写,不能随意更改),内容处填写互助码,填写规则如下)
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let FruitShareCodes = [
  '0a74407df5df4fa99672a037eec61f7e@dbb21614667246fabcfd9685b6f448f3@6fbd26cc27ac44d6a7fed34092453f77@61ff5c624949454aa88561f2cd721bf6@56db8e7bc5874668ba7d5195230d067a',//账号一的好友shareCode,不同好友中间用@符号隔开
  '6fbd26cc27ac44d6a7fed34092453f77@61ff5c624949454aa88561f2cd721bf6@9c52670d52ad4e1a812f894563c746ea@8175509d82504e96828afc8b1bbb9cb3',//账号二的好友shareCode，不同好友中间用@符号隔开
]
// 判断github action里面是否有东东农场互助码
if (process.env.FRUITSHARECODES) {
  if (process.env.FRUITSHARECODES.indexOf('&') > -1) {
    console.log(`ff1e3ff271ba4fbc9f9d22190987fd9f@61c82397e0cf403eae5904e46a90514e@edf2baeca94e476496c6eb911a5b57b0@08eee59f433b473eb67779a0dd372ae1@bfb6f0ff95944b6ea4b6246b4bec5f69@d648bc21c62f40c1a406661b66ef664f@c041cad170774d169fa2c6af2c9ff2b8@b074877a6b864f8285d440ccc7f4aa75@1481d813072347f1af8c76a62f01642e@1a51b756f8f3473e922e68d6a412c459\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('&');
  } else if (process.env.FRUITSHARECODES.indexOf('\n') > -1) {
    console.log(`ff1e3ff271ba4fbc9f9d22190987fd9f@61c82397e0cf403eae5904e46a90514e@edf2baeca94e476496c6eb911a5b57b0@08eee59f433b473eb67779a0dd372ae1@bfb6f0ff95944b6ea4b6246b4bec5f69@d648bc21c62f40c1a406661b66ef664f@c041cad170774d169fa2c6af2c9ff2b8@b074877a6b864f8285d440ccc7f4aa75@1481d813072347f1af8c76a62f01642e@1a51b756f8f3473e922e68d6a412c459\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('\n');
  } else {
    FruitShareCodes = process.env.FRUITSHARECODES.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < FruitShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['FruitShareCode' + index] = FruitShareCodes[i];
}
