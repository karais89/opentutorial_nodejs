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

본 수업은 애플리케이션에서 부품으로 사용할 로직인 모듈에 대해서 알아보고 모듈을 편리하게 관리하는 기술인 NPM을 사용하는 기본적인 방법을 알아봅니다.

const = 자바스크립트에 새로 추가된 상수.

모듈이라는게 존재.

모듈 = 부품

모듈을 가져올때 require를 사용.

NPM = Node Package Manager

HTTP, OS 등의 모듈을 사용했음 (Nodejs가 제공하는 모듈)

Date, String, Array (JavaScript가 제공하는 모듈)

기본적인 기능을 토대로 해서 엄청나게 다양한 무언가를 만들 수 있음.

타인의 모듈을 사용하는 방법. NPM

NPM = Node계의 앱스토어

NPM 역활
* 설치
* 삭제
* 업그레이드
* 의존성관리

[NPM사이트](https://www.npmjs.com)

[uglify-js](https://www.npmjs.com/package/uglify-js)

g를 붙이면 전역으로 독립적인 소프트웨어로 동작

g를 안붙이면 현재 프로젝트의 부품으로 사용.

사용법
* uglifyjs pretty.js
* uglifyjs pretty.js -m
* uglifyjs pretty.js -o pretty.min.js -m

[underscore](https://www.npmjs.com/package/underscore)

underscore를 우리껄로 가져오려고 함.

우리것도 패키지이므로 npm 상에서 현재의 디렉토리를 패키지로 지정해야됨(npm init)

npm init은 package.json을 만들어줌.

npm install underscore

npm install underscore --save = 온전하게 포함. 

cat package.json으로 내용을 표시하면 depenencies가 추가됨.

depenencies가 있으면 언제든지 여기 있는 모듈을 쉽게 가져올 수 있음.

## 콜백(callback) 함수

누군가에 의해서 호출되는 함수.

## 동기와 비동기 프로그래밍

동기와 비동기 (Synchronous & Asynchronous)

스마트폰의 동기화라는 뜻이 포괄적이로 비슷한 뜻.

빨래를 하고 설거지를 하고 청소를 해야 된다.

비동기 = 빨래하는 업체, 설거지하는 업체, 청소하는 업체가 있다면. 업체한테 전화해서 끝나면 알려달라고 함. 다른 업체에게도 마찬가지로.

전화하는데 1분이 걸리면 3분만에 모든 작업에게 전달은 가능함. 그리고 나중에 그 업체들에게 연락이 오게됨.

이메일을 발송하는 시스템을 만들었다. 동기적으로 발생하는 시스템이면 한명한명에게 이메일을 보냄. 한사람당 1초가 걸리면 만명이면 만초가 걸림.

하지만 비동기 시스템으로 만들면. 시스템에게 명령만 보내고 모든 업무가 끝나면 백그라운드에서 처리되고 완료되면 나에게 알려줌

파일읽기 readFile, readFileSync 

nodejs는 비동기적으로 어떤일을 처리한다가 nodejs의 철학이고 기본임.

## Express-도입

이렇게 하는건 편하긴한데.. 더 편한 방법이 있음.

프레임워크.. korea도 있음.

[Express](http://expressjs.com)

## Express-설치

홈페이지에 시작-설치하기에 보면 설치방법이 있음.

http://expressjs.com/ko/starter/installing.html

## Express-간단한 웹에플리케이션 만들기

메뉴얼을 자주 바야됨.

HelloWorld

http://expressjs.com/ko/starter/hello-world.html

app.js 같은 파일은 익스프레스에서 권장하는 메인 애플리케이션 이름

get이라는 메서드를 라우터라고 함. (라우팅 = 길을찾는다)

Routing (사용자, Router, Controller)

사용자의 요청과 controller을 중계해주는 역활

## 연결성

단어의 역활 의미

하나의 단어가 여러가지 의미를 가지게 됨. (유하사지만 다양한..)

단어 + 단어를 결합하여 새로운 의미를 만듬 (문장)

명사 10개 = 단어 10개

명사 10개 + 동사 10개 = 단어 20개 = 의미 100개

명사 10개 + 동사 10개 + 명사 10개 = 단어 20개 = 의미 1000개

무언가를 결합하고 조합하는건 정말 대단한 것이다.

JavaScript, Nodejs 관계

Nodejs 기본적으로 제공하는 기능
* FS
* HTTP
* OS

이 기능들을 자바스크립트와 결합해서 우리가 의도하는 프로그램을 만듬.

Module와 NPM의 관계

Router와 Controller의 관계

JavaScript, NPM, Router은 정말 중요하다.

## Express-정적파일을 서비스하는 법

## Express-웹페이지를 표현하는 방법

## Express-템플릿 엔진 (Jade)