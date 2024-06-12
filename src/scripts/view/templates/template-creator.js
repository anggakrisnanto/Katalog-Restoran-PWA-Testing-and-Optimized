const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
  </button>
`;

const createReview = (review) => `
<div class="review">
        <p>${review.name}</p>
        <p>${review.review}</p>
        <p>${review.date}</p>
    </div>
    `;

const createMenusMakanan = (food) => `
    <li>${food.name}</li>
`;

const createMenusMinuman = (drink) => `
    <li>${drink.name}</li>
`;

const createDetailTemplate = (restaurant) => `<div class="restaurant-details">
<h1 class="restaurant-name">${restaurant.name}</h1>
<img class="restaurant-image lazyload" data-src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" alt="Gambar Restoran">
<div class="restaurant-info">
    <p><strong>Alamat:</strong>${restaurant.address}</p>
    <p><strong>Kota:</strong>${restaurant.address}</p>
    <p><strong>Deskripsi:</strong>${restaurant.description}</p>
</div>
<div class="menus">
    <div class="food-menu">
    <h2>Menu Makanan</h2>
    <ul>
    </ul>
    </div>
    <div class="drink-menu">
        <h2>Menu Minuman</h2>
        <ul>
        </ul>
    </div>
</div>
<div class="customer-reviews">
    <h2>Customer Reviews</h2>
      <div class="review-container">
      </div>
</div>
</div>
`;
const createRestaurantItemTemplate = (restaurant) => `
<a href="/#/detail/${restaurant.id}">
<article class="post-item">
<div class="post-item_image">
  <img class="lazyload" data-src="https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId}" alt="${restaurant.name}">
  <div class="post-item_loc">${restaurant.city}</div>
</div>
<div class="post-item_content">
<p class="post-item_rating">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="18px" height="14px"><path fill="#FFD43B" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
    ${restaurant.rating}
  </p>
  <h1 class="post-item_title">${restaurant.name}</h1>
  <p class="post-item_desc">${restaurant.description}</p>
</div>
</article>
</a>
`;

export {
  createRestaurantItemTemplate,
  createDetailTemplate,
  createMenusMakanan,
  createMenusMinuman,
  createReview,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
