//? spread operator
//? rest operator
//? distructuring

// learn spread operator

const brose1: string[] = ["mir", "firoz", "ebrahim"];
const brose2: string[] = ["sabbir", "kamal", "kobir"];

brose1.push(...brose2);

const mentors = {
  typeScript: "Talhan",
  redux: "kalam",
  dbms: "Mizang",
};

const mentors2 = {
  prisma: "Rabbil",
  paython: "Elone Mask",
  java: "Robin Hood",
};

const copy = { ...mentors, ...mentors2 };

// learn rest opeartor

const greetFriends = (
  friend1: string,
  friend2: string,
  ...friend3: string[]
) => {
  friend3.forEach((friend: string) => {
    console.log("hi", friend);
  });
};

greetFriends("abult", "kabul", "koorma", "kosdkrn", "jamal", "jack");
