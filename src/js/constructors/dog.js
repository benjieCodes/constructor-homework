let Dog = function (properties) {

  let property = properties || {};

  this.hungry = (property.hungry === undefined) ? true : property.hungry;

  this.color = property.color;

  this.status = property.status || "normal";
}

export default Dog;
