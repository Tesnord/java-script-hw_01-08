const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

let arr = Object.keys(user)

for (let key of arr) {
  console.log(
    `${key}: ${user[key]}`
  );
}
