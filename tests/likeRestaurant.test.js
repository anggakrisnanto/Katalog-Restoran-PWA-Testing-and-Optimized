import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 's1knt6za9kkfw1e867' });
    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavoriteRestaurantIdb.putRestaurant({ id: 's1knt6za9kkfw1e867' });
    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 's1knt6za9kkfw1e867' }]);
    await FavoriteRestaurantIdb.deleteRestaurant('s1knt6za9kkfw1e867');
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 's1knt6za9kkfw1e867' });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 's1knt6za9kkfw1e867' });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 's1knt6za9kkfw1e867' });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Memastikan film berhasil disukai
    const restaurant = await FavoriteRestaurantIdb.getRestaurant('s1knt6za9kkfw1e867');
    expect(restaurant).toEqual({ id: 's1knt6za9kkfw1e867' });

    await FavoriteRestaurantIdb.deleteRestaurant('s1knt6za9kkfw1e867');
  });
});
