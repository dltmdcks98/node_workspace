/*
    HTTP 모듈을 사용하여 웹 서버를 구축했을대 단점
    이미지와 같은 정정자원 마저도 fs로 읽어서 일일이 처리해야함
    ex)html 컨텐츠에 이미지가 100개 포함되어 있다면, 이 100개에 대한 이미지 응답처리를 해야한다.

    해결책)http모듈보다 개선된 외부 모듈인 express 모듈을 사용해본다.
*/
//var은 변수 선언시 var을 쓰면 중복선언을 허용해줌 let은 중복을 허용하지 않음 
var http = require("http");//내부모듈
let express = require("express");//외부 모듈
let mysql = require("mysql")//외부 모듈

let app = express();//express 객체생성

//express 모듈은 미들웨어라 불리는 함수를 지원하여, 기능을 확장할 수 있다. 
app.use("/static",express.static("res"));//미들웨어 등록, res라는 디렉토리를 정적자원의 위치로 등록 use(가상주소, static파일이 있는 폴더 )
app.use(express.urlencoded({extended:true}));//post방식의 데이터를 받기위한 미들웨어 등록


let con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"javastudy"
});

//express 모듈을 이용할 경우 요청처리도 express 모듈로 처리하면 된다.
app.get("/main",function(request, response){//(주소,)
    console.log("클라이언트 요청 감지")
});

app.post("/board/regist",function(request,response){
    console.log(request.body.title, request.body.writer);
    // cmd창에서 데이터 보내는 법 : curl -d "title=test&writer=batman" -X POST http://localhost:8888/board/regist

    let sql = "insert into board(title, writer, content) values(?,?,?)";
    var title = request.body.title;
    var writer =request.body.writer;
    var content = request.body.content;
    con.query(sql,[title,writer,content ],function(error, fields){
        if(error){
            console.log("insert 실패",error);
        }else{  
            console.log("성공");
        }
    });
});


let server = http.createServer(app);

server.listen(8888,function(){
    console.log("The server is running at 8888 port");
});

