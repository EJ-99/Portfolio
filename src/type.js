'use strict';

new TypeIt('.home__title--strong', { loop: true, speed: 100 })
  .pause(1000)
  .delete()
  .type('Front-end Engineer.')
  .pause(1000)
  .delete()
  .go();
