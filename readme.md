# Server Side JavaScript

## 서버 측 자바스크립트와 nodejs 소개

자바스크립트는 웹이라는 테두리 안에 있던 언어 였다.

자바스크립트의 큰 변화
* 2004 Google GMAIL
* 2004 Google GMAP
* 2008 Google V8 (오픈소스 공개)
* 2009 Nodejs (v8엔진을 사용, event-driven, non-blocking IO)

PURE WEB 어떤 사용자든 웹 브라우저만 있으면 웹 애플리케이션을 쓸 수 있음.

자바스크립트는 웹이 아닌 부분에서도 사용 됨 (탈웹화)

웹에서 사용되는 기술은 자바스크립트 밖에 없다. 그리고 다른 분야에서도 사용된다.

자바스크립트의 팔자는 정말 큰 변화를 맞이하게 됨.

Node.js는 서버 쪽에서 동작하는 자바스크립트로 확장되는 결정적 계기를 마련함.

Web Browser vs Nodejs의 차이??

language = JavaScript
RunTime = Web Browser, Nodejs

alert('Hello world') -> 자바 스크립트가 웹 브라우저에서 실행될때. 이 문법은 자바스크립트의 문법

만약에 alert를 Nodejs에서 실행하면 에러가 남.

자바스크립트만 할줄 알면 웹 브라우저와 Nodejs를 제어할 수 있음.

Nodejs의 경쟁자?? 

* Python
* Ruby
* PHP
* JAVA

이런 기술들이 서버 쪽에서 동작하면 Nodejs의 경쟁자라 할 수 있음

Nodejs의 장점?? 

* 속도.. 성능이 상당히 괜찮음. 
* 자바스크립트로 하나의 언어로 완결된 애플리케이션을 만들 수 있음

## nodejs 설치 및 실행

이번 수업에서는 Nodejs 설치하고, 간단한 프로그램을 만들어서 실행시키는 방법을 알아봅니다.

Nodejs 홈페이지
-----------
[nodejs](https://nodejs.org/en/)

아톰 에디터 사용방법
----------
[atom 수업](https://opentutorials.org/module/1579)

아톰에디터를 사용하지만 필수가 아님. 선호하는 에디터를 사용하면 됨.

맥 기준.

ls -al = 현재 디렉토리의 내용을 보여줌.

pwd = 현재 경로

node hello.js

## 간단한 웹 애플리케이션 만들기

본 수업에서는 Nodejs를 이용해서 간단한 서버 애플리케이션을 만들어보겠습니다.

nodejs의 홈페이지의 about의 코드를 복사 붙여넣기 하자.

```
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

인터넷의 동작 방법

우리 수업에서 다룰 것
* 서버
* 클라이언트
* ip
* port

컴퓨터와 컴퓨터가 인터넷을 통해서 연결되서 여러가지 협력적인 작업을 처리하게 되었다.

클라이언트 = 고객, 갑

서버 = 을

요청하고 응답하는 요청하고 제공하는 관계에 있다. (갑을 관계)

우리 컴퓨터의 기준에서는 웹브라우저가 설치된 곳이 클라이언트

http://a.com 에 해당되는 것은 서버.

실제로 컴퓨터는 ip를 통해서 접속한다.

서버 = http://a.com

서버에는 여러가지 다른 서버가 설치 되있을수 있음.
* 데이터베이스 서버
* 채팅 서버
* 게임 서버
* 웹 서버

사용자가 a.com 에 들어왔을때 누가 응답할지를 어떻게 결정하는가?

컴퓨터에는 포트가 있음. 0번부터 65535개의 포트가 있음.

우리는 웹서버를 80번 포트에 실행함. 80번 포트를 웹서버에 리스닝 하게됨.

그리고 사용자가 이 서버에 접속할때.. http://a.com:80 이라고 입력하면

a.com을 찾고 a.com에 80번 포트를 연결 하게 되고. 80번 포트에 리스닝 된 웹서버에 요청하게 됨.

하지만 웹서버에 접속할때는 80번 포트를 생략할 수 있음. (기본적으로 포트를 입력하지 않으면 80번 포트에 연결됨)

http://a.com:1337 이라고 주소에 웹서버를 실행하려면 우리의 웹서버를 1337번에 연결해야됨.

이것이 포트라는 개념.

## 모듈과 NPM

## 콜백(callback) 함수

## 동기와 비동기 프로그래밍

## Express-도입

## Express-설치

## Express-간단한 웹에플리케이션 만들기

## 연결성

## Express-정적파일을 서비스하는 법

## Express-웹페이지를 표현하는 방법

## Express-템플릿 엔진 (Jade)