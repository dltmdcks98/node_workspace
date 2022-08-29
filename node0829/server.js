/* node.js는 자바스크립트 기반의 응용 프로그램이고, 주 용도는 백앤드 서버개발이다.*/
var http=require("http");
var fs = require("fs");//FileSystem module - 파일을 제어할 수 있고, 읽을 수 있다. 
var qs = require("querystring");//전송된 query를 분석할때 사용하는 모듈
//서버 객체 생성 
var server = http.createServer(function(request,response){
    // console.log("client requeset was recieved");

    //클라이언트의 요청을 구분할 줄 알아야 해당 요청마다 적절한 응답처리를 할 수 있다.
    console.log("url은",request.url);

    switch(request.url){
        case "/board/registform":
            //원칙적으로는 response.end() tag를 한줄씩 문자열로 전송해야 하지만, 너무 효율성이 떨어지므로
            //fs를 이용하여 파일의 내용을 모두 읽은 후, 변수에 담아서 한꺼번에 출력
            fs.readFile("./board/regist.html","utf-8",function(error, data){
            // console.log("읽어들인 파일 데이터는",data);
        
            //요청에 대한 응답처리
            response.writeHead(200,{"Content-type":"text/html;charset=utf-8"});//헤더 정보 구성
        
            //응답 바디 구성
            response.end(data);
            });
            //response.end("<!DOCTYPE.html>");
            break;
        
        case "/board/regist": 
            console.log("글 등록할 예정");//글쓰기 요청 처리(post 파라미터 받고 db에 insert)
            
            //파라미터 받기
            var postData="";
            request.on("data",function(param){//클라이언트의 데이터가 도착하면
                // console.log("param is ", ""+param);
                postData  = postData+param;
            });

            request.on("end",function(){//모든 데이터를 다 받은 후 마지막 동작
                console.log("최종 요청 데이터는", postData); 
                var result = qs.parse(postData);
                console.log(result.title,result.writer, result.content);//최종 데이터 파싱
            });
            break;
    }
    

});

//서버 가동
server.listen(7979,function(){
    console.log("The Server is Running at 7979 port");
});
