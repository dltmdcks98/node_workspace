/* node.js는 자바스크립트이므로, 지금까지 사용해왔던 js의 문법을 그대로 사용하여 개발하면된다.
단, 브라우저 제어 목적이 아닌 일반 응용프로그램개발이 목적이므로, DOM API는빠져있다.
대신 전역변수, 모듈 등이 추가되어있다.
사신 node.js 자체적으로는 기능이 별로 없기 때문에 주로 모듈을 이용하여 개발한다.
*/
console.log("나의 첫 노드 어플리케이션");
console.log("현재 내가 실행중인 node.js 파일의 경로를 반환해주는 전역변수",__filename)
console.log("현재 내가 실행중인 node.js 파일의 디렉토리 경로를 반환해주는 전역변수",__dirname)

/*내장 객체 
console, process, exports*/
console.log(process.version,process.platform);

var md = require("./custom/mymodule.js")//모듈 불러오기

md.gugu(5);