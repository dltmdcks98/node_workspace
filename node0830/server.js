//기본 모듈이라 할수 있는 기능이 별로 없다 express)
var http = require("http");
var fs = require("fs");//filesystem 모듈


//서버 구축
var server = http.createServer(function(request, response){
    //요청 처리 코드 
    console.log("클라이언트의 요청 감지");

    //html파일 읽기
   /* fs.readFile("./index.html","utf-8",function(error,data){//("파일명",문서인경우(인코딩 타입)),익명함수(에러, 읽어드린 데이터)
        console.log(data );
        response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});//헤더 정보
        response.end(data);//body정보, 데이터 전달
    });*/
    fs.readFile("./static/7188639_happy_face_emoji_emotion_smile_icon.png",function(error,data){
        response.writeHead(200,{"Content-Type":"image/png"});
        response.end(data);
    });

    //현재 서버에서는 html과 이미지를 동시에 처리할 수 없다.
});


//서버 가동
server.listen(8989,function(){
    //가동되었을 때 동작할 코드 
    console.log("The server is running at port 8989");
});
