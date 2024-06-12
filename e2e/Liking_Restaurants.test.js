/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorit');
});
Scenario('showing empty liked restaurants', ({ I }) => {
  I.see('', '#posts');
});
Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('#posts', 10);
  I.seeElement('#posts');
  const restaurantName = locate('.post-item_title').first();
  const getRestaurantName = await I.grabTextFrom(restaurantName);

  const restaurantButton = locate('#posts a').first();
  I.click(restaurantButton);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorit');
  I.seeElement('#posts');
  const likedRestaurantTitle = await I.grabTextFrom('.post-item_title');

  assert.strictEqual(getRestaurantName, likedRestaurantTitle);
});
