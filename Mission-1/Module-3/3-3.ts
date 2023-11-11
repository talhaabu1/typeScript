{
  // type guards

  // typeof --> type guard

  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`MY Name is ${user.name}  and my role ${user.role}`);
    } else {
      console.log(`MY Name is ${user.name}`);
    }
  };

  const normalUser: NormalUser = {
    name: "tlaha",
  };
  const adminUser: AdminUser = {
    name: "tlaha",
    role: "admin",
  };

  getUser(adminUser);
}
