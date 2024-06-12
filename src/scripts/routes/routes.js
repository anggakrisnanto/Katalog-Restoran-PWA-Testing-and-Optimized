import Utama from '../view/pages/utama';
import Detail from '../view/pages/detail';
import Favorit from '../view/pages/favorit';

const routes = {
  '/': Utama, // default page
  '/utama': Utama,
  '/detail/:id': Detail,
  '/favorit': Favorit,
};

export default routes;
