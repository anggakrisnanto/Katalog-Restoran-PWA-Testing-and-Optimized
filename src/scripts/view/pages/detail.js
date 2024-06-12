import UrlParser from '../../routes/url-parser';
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import {
  createDetailTemplate,
  createMenusMakanan,
  createMenusMinuman,
  createReview,
  createLikeButtonTemplate,
} from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div class="container"></div>
      <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    likeButtonContainer.innerHTML = createLikeButtonTemplate();
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await TheRestaurantDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('.container');
    restaurantContainer.innerHTML = createDetailTemplate(restaurant);
    const foodContainer = document.querySelector('.food-menu ul');
    const { foods } = restaurant.menus;
    foods.forEach((food) => {
      foodContainer.innerHTML += createMenusMakanan(food);
    });
    const drinkContainer = document.querySelector('.drink-menu ul');
    const { drinks } = restaurant.menus;
    drinks.forEach((drink) => {
      drinkContainer.innerHTML += createMenusMinuman(drink);
    });
    const reviewContainer = document.querySelector('.review-container');
    const reviews = restaurant.customerReviews;
    reviews.forEach((review) => {
      reviewContainer.innerHTML += createReview(review);
    });
    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        address: restaurant.address,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
