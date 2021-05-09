## blog-backend

## 기록

- Koa는 next()가 프로미스이다.
- Koa는 async/await를 정식 지원한다.

## tools

- nodemon : 코드 변경 시 자동으로 서버 재시작
  "start:dev": "nodemon --watch src/ src/index.js"

- koa-router : 라우팅하기
- koa-bodyparser : 라우트 미들웨어 컨트롤러를 만들기위한 파싱툴

## about

### Rest API

| 종류                                    | 기능                                                     |
| :-------------------------------------- | :------------------------------------------------------- |
| `POST /posts`                           | 포스트 작성                                              |
| `GET /posts`                            | 포스트 목록 조회                                         |
| `GET /posts/:id`                        | 특정 포스트 조회                                         |
| `DELETE /posts/:id`                     | 특정 포스트 삭제                                         |
| `PATCH /posts/:id`                      | 특정 포스트 업데이트(구현 방식에 따라 PUT으로 사용 가능) |
| `POST /posts/:id/comments`              | 특정 포스트에 댓글 등록                                  |
| `GET /posts/:id/comments`               | 특정 포스트의 댓글 목록 조회                             |
| `DELETE /posts/:id/comments/:commentID` | 특정 포스트의 특정 댓글 삭제                             |

## 스프린트

10분 목표설정, 90분 스프린트 20분 휴식

| 일시                         |          목표          | 성과                             |
| :--------------------------- | :--------------------: | :------------------------------- |
| 1차 : 2021.05.10 04:00~06:00 |        Koa공부         | Koa 라우팅, 컨트롤러 틀 작성완료 |
| 2차 : 2021.05.10 06:00~08:00 | Mongoose, MongoDB 공부 |                                  |
