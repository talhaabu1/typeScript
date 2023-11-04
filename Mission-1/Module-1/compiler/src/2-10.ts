{
  //? union types
  //   type ForntendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
  //   type FullStackDeveloper = "forntendDeveloper" | "expartDeveloper";
  //   type Developer = ForntendDeveloper | FullStackDeveloper;
  //   const newDeveloper: Developer = "juniorDeveloper";
  //  type User = {
  //     name: string;
  //     email?: string;
  //     gender: "male" | "female";
  //     bloodGroup: "O+" | "A+" | "AB+";
  //   };
  //   const user1: User = {
  //     name: "Talha",
  //     email: "talha@gmail.com",
  //     gender: "male",
  //     bloodGroup: "AB+",
  //   };

  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullStackDeveloper: FullStackDeveloper = {
    skills: ["javascript", "HTML", "CSS", "PHP"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
