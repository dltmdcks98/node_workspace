/*
모듈을 파일이다.
모듈 사용 이유?  코드의 재사용 성을 높이기 위함
모듈 안에 뭘 넣나 : 클래스, 함수, 변수
*/
//모듈 내의 함수 정의 방법
exports.gugu=function(dan){
    for(var i=0; i<=9; i++){
        console.log(dan+"*"+i+" ="+(dan*i));
    }
    
}