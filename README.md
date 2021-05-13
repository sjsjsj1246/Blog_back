## blog-backend

## about

- Node Koa
- MongoDB

## Rest API

### /api/posts/

| 포스트 관련 API                         | 기능                         |
| :-------------------------------------- | :--------------------------- |
| `POST /posts`                           | 포스트 작성                  |
| `GET /api/posts?username=&tag=&page=`   | 포스트 목록 조회             |
| `GET /posts/:id`                        | 특정 포스트 조회             |
| `DELETE /posts/:id`                     | 특정 포스트 삭제             |
| `PATCH /posts/:id`                      | 특정 포스트 업데이트         |
| `POST /posts/:id/comments`              | 특정 포스트에 댓글 등록      |
| `GET /posts/:id/comments`               | 특정 포스트의 댓글 목록 조회 |
| `DELETE /posts/:id/comments/:commentId` | 특정 포스트의 특정 댓글 삭제 |

### /api/auth/

| 인증 API들            | 기능             |
| :-------------------- | :--------------- |
| `POST /auth/register` | 사용자 등록      |
| `POST /auth/login`    | 로그인           |
| `GET /auth/check`     | 토큰 검증/재발급 |
| `POST /auth/logout`   | 로그아웃         |

## 스키마

### posts

| 필드 이름     | 데이터 타입 | 설명      |
| ------------- | ----------- | --------- |
| title         | 문자열      | 제목      |
| body          | 문자열      | 내용      |
| tags          | 문자열 배열 | 태그 목록 |
| publishedDate | 날짜        | 작성날짜  |

### users

| 필드 이름      | 데이터 타입 | 설명     |
| -------------- | ----------- | -------- |
| username       | 문자열      | 유저이름 |
| hashedPassword | 문자열      | 비밀번호 |

## tools

- nodemon : 코드 변경 시 자동으로 서버 재시작
  - "start:dev": "nodemon --watch src/ src/index.js"
- koa-router : 라우팅하기
- koa-bodyparser : 라우트 미들웨어 컨트롤러를 만들기위한 파싱툴
- dotenv : 환경변수 도구
- esm : import/export로 코드 정리할 것
- joi : Request Body 검증 라이브러리
- bcrypt : 해시를 만들고 검증하는 함수
- jsonwebtoken : JWT만들기 위한 모듈
- sanitize-html : HTML을 작성하고 보여주는 서비스에서 유용함, HTML을 필터링해줌

## 스프린트

10분 목표설정, 90분 스프린트 20분 휴식

| 일시                         |          목표          | 성과                                     |
| :--------------------------- | :--------------------: | :--------------------------------------- |
| 1차 : 2021.05.10 04:00~06:00 |        Koa공부         | Koa 라우팅, 컨트롤러 틀 작성완료         |
| 2차 : 2021.05.10 06:00~08:00 | Mongoose, MongoDB 공부 | MongoDB연동 완료, api 작성 완료          |
| 3차 : 2021.05.11 01:00~03:00 | 페이지네이션, JWT개념  | user스키마, 모델, api(등록,로그인)       |
| 4차 : 2021.05.12 01:00~03:00 |     인증 구현 완료     | 인증 시스템 POST API에 등록, POST 필터링 |

## 기록

- Node Koa : Express 개발팀이 만든 가벼운 웹서버 프레임워크
- Koa는 next()가 프로미스이다.
- Koa는 async/await를 정식 지원한다.
- MongoDB : 문서지향적 NoSQL 데이터베이스
  - 서버 하나에 여러 DB를 가질 수 있으며 각 데이터베이스에는 여러 컬렉션이 있고 컬랙션 내부에는 여러 문서가 있다.
  - RDBMS에서는 테이블을 따로 만들어 JOIN해서 쓰지만 NoSQL에서는 모든 것을 문서 하나에 넣는다.
- 페이지네이션을 위한 더미 데이터 생성 스크립트 작성 필요
  - https://www.lipsum.com/
- JWT: 데이터가 Json으로 이루어진 토큰, 두 개체가 서로 안전하게 정보를 주고받을 수 있도록 웹 표준으로 정의된 기술이다.
- 세션 기반 인증 : 서버가 사용자가 로그인중임을 기억하고 있음
  - `사용자` -로그인-> `서버` -정보저장-> `세션저장소`
  - `서버` -세션id발급-> `사용자(쿠기저장)` -요청-> `서버` -세션조회-> `세션저장소`
  - `서버` -응답-> `사용자`
  - 서버를 확장하기가 번거로워질수도 있음, 서버끼리 같은 세션을 공유해야 하므로 세션 전용 DB를 만들어야 하고 신경쓸게 많음
- 토큰 기반 인증 : 로그인 이후 서버가 만들어주는 문자열로 이루어진 토큰을 이용하여 인증
  - `사용자` -로그인-> `서버` -토큰발급-> `사용자` -토큰과함께 요청-> `서버` -토큰 검사후 응답-> `사용자`
  - 토큰에는 사용자의 로그인 정보가 들어있다
  - 해싱 알고리즘을 통해 만들어짐, 무결성 보장, 서버에서 사용자가 로그인 정보를 기억하기 위해 사용하는 리소스가 적다. 사용자쪽에서 로그인 상태를 지닌 토큰을 가지고 있으므로 서버의 확장성이 좋다.
  - 토큰을 사용할 때는 브라우저의 쿠기에 담아서 사용하거나 브라우저의 localStorage또는 sessionStorage에 담아서 사용한다.
  - storage에 담으면 악성 스크립트 공격인 XSS공격에 취약하다.
  - 쿠키에 담으면 httpOnly속성으로 악성 스크립트는 피할 수 있지만 CSRF공격에 취약하다. 하지만 CSRF는 토큰 검증으로 막을 수 있음.
- JWT만들때 비밀키 생성
  - openssl rand -hex 64
  - .env에 JWT_SECRET
