let Human = function (options) {

  this.pet = function (pet) {
    pet.status = 'happy';
  };

  this.feed = function (feed) {
    feed.hungry = false;
  }

  let option = options || {};
  this.cool = (option.cool === undefined) ? false : option.cool;
}

export default Human;
