import Router from 'koa-router';
import checkLoggedIn from '../../lib/checkLoggedin';
import * as postsCtrl from './posts.ctrl';

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIn, postsCtrl.write);
posts.get('/:id', postsCtrl.getPostById, postsCtrl.read);
posts.delete(
  '/:id',
  checkLoggedIn,
  postsCtrl.getPostById,
  postsCtrl.checkOwnPost,
  postsCtrl.remove,
);
posts.patch(
  '/:id',
  checkLoggedIn,
  postsCtrl.getPostById,
  postsCtrl.checkOwnPost,
  postsCtrl.update,
);

export default posts;
