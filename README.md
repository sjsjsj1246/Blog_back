## blog-backend

## about

- Node Koa
- MongoDB

### Rest API

| 종류                                    | 기능                         |
| :-------------------------------------- | :--------------------------- |
| `POST /posts`                           | 포스트 작성                  |
| `GET /posts`                            | 포스트 목록 조회             |
| `GET /posts/:id`                        | 특정 포스트 조회             |
| `DELETE /posts/:id`                     | 특정 포스트 삭제             |
| `PATCH /posts/:id`                      | 특정 포스트 업데이트         |
| `POST /posts/:id/comments`              | 특정 포스트에 댓글 등록      |
| `GET /posts/:id/comments`               | 특정 포스트의 댓글 목록 조회 |
| `DELETE /posts/:id/comments/:commentID` | 특정 포스트의 특정 댓글 삭제 |

### 스키마

#### Posts

| 필드 이름     | 데이터 타입 | 설명      |
| ------------- | ----------- | --------- |
| title         | 문자열      | 제목      |
| body          | 문자열      | 내용      |
| tags          | 문자열 배열 | 태그 목록 |
| publishedDate | 날짜        | 작성날짜  |

## tools

- nodemon : 코드 변경 시 자동으로 서버 재시작
  - "start:dev": "nodemon --watch src/ src/index.js"
- koa-router : 라우팅하기
- koa-bodyparser : 라우트 미들웨어 컨트롤러를 만들기위한 파싱툴
- dotenv : 환경변수 도구
- esm : import/export로 코드 정리할 것
- joi : Request Body 검증 라이브러리

## 스프린트

10분 목표설정, 90분 스프린트 20분 휴식

| 일시                         |          목표          | 성과                             |
| :--------------------------- | :--------------------: | :------------------------------- |
| 1차 : 2021.05.10 04:00~06:00 |        Koa공부         | Koa 라우팅, 컨트롤러 틀 작성완료 |
| 2차 : 2021.05.10 06:00~08:00 | Mongoose, MongoDB 공부 |                                  |

## 기록

- Node Koa : Express 개발팀이 만든 가벼운 웹서버 프레임워크
- Koa는 next()가 프로미스이다.
- Koa는 async/await를 정식 지원한다.
- MongoDB : 문서지향적 NoSQL 데이터베이스
  - 서버 하나에 여러 DB를 가질 수 있으며 각 데이터베이스에는 여러 컬렉션이 있고 컬랙션 내부에는 여러 문서가 있다.
  - RDBMS에서는 테이블을 따로 만들어 JOIN해서 쓰지만 NoSQL에서는 모든 것을 문서 하나에 넣는다.
