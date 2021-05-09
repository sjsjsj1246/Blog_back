const Router = require('koa-router');
const api = new Router();
const posts = require('./posts');

api.use('/posts', posts.routes());

module.exports = api;
