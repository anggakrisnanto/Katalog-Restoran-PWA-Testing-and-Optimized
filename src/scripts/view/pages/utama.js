import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Utama = {
  async render() {
    return `
      <section class="hero">
      <div class="hero-content">
        <marquee><h1>
          WELCOME ANGGA'S FOOD
        </h1></marquee>
      </div>
      <picture>
        <source media="(max-width: 600px)" srcset="./images/heros/hero-image_1-small.jpg">
       <img class="lazyload" data-src="./images/heros/hero-image_1-large.jpg" alt="Hero Image">
      </picture>
    </section>
    <div class="post-judul">
      <h1>Explore Restaurant</h1>
    </div>
    <div class="posts" id="posts"></div>
      `;
  },

  async afterRender() {
    const restaurants = await TheRestaurantDbSource.listRestaurant();
    const restaurantContainer = document.querySelector('.posts');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Utama;
