let message="Hello!";
let phrase=message;


//
let user = {name: "john"};

let premission1= {canView: true};
let premission2 = { canEdit: true};

Object.assign(user, premission1, premission2);

console.log(user.name);
console.log(user.premission1);
console.log(user.premission2);


//nested cloning
let User = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

console.log( User.sizes.height ); // 182