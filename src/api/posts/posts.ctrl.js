let postId = 1;

const posts = [
  {
    id: 1,
    title: '제목',
    body: '내용',
  },
];

/**포스트 작성
 * POST /api/postsz
 * {title, body}
 *  */
exports.write = (ctx) => {
  const { title, body } = ctx.request.body;
  postId += 1;
  const post = { id: postId, title, body };
  posts.push(post);
  ctx.body = post;
};

/**포스트 목록 조회
 * GET /api/posts
 */
exports.list = (ctx) => {
  ctx.body = posts;
};

/**특정 포스트 조회
 * GET /api/posts/:id
 */
exports.read = (ctx) => {
  const { id } = ctx.params;
  //파라미터로 받아온 값은 문자열 형식이므로 p.id를 문자열로 변경합니다.
  const post = posts.find((p) => p.id.toString() === id);
  if (!post) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }
  ctx.body = post;
};

/**특정 포스트 제거
 * DELETE /api/posts/:id
 */
exports.remove = (ctx) => {
  const { id } = ctx.params;
  const index = posts.findIndex((p) => p.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }
  posts.splice(index, 1);
  ctx.status = 204;
};

/**포스트 수정(교체)
 * PUT /api/posts/:id
 * {title, body}
 */
exports.replace = (ctx) => {
  //PUT은 전체 포스트 정보를 입력하고 데이터를 통째로 교체
  const { id } = ctx.params;
  const index = posts.findIndex((p) => p.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }
  //전체 객체를 덮어 씌운다. id를 제외한 기존 정보를 날리고 객체를 새로 만든다
  posts[index] = {
    id,
    ...ctx.request.body,
  };
  ctx.body = posts[index];
};

/**포스트 수정(교체)
 * PATCH /api/posts/:id
 * {title, body}
 */
exports.update = (ctx) => {
  //PATCH는 주어진 필드만 교체한다.
  const { id } = ctx.params;
  const index = posts.findIndex((p) => p.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }
  //기존 값에 정보를 덮어 씌운다
  posts[index] = {
    ...posts[index],
    ...ctx.request.body,
  };
  ctx.body = posts[index];
};
