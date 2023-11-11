{
  //? conditional type
  //? hello world
  type a1 = null;
  type b1 = string;

  type x = a1 extends null ? true : false; // conditional type

  type y = a1 extends null ? true : b1 extends undefined ? undefined : any; // conditional type with extends

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    tractor: string;
  };

  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  type CheckBorolok = CheckVehicle<"tractor">;
}
