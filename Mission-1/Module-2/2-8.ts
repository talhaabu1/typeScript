{
  // promise

  const getTodo = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
    const data = await res.json();
    return data;
  };

  // Use async/await to call the function and log the result
  async function logTodo() {
    const todo = await getTodo();
    console.log(todo);
  }

  logTodo();

  //   type Comon = {
  //     something: string;
  //   };
  //   const createPromise = (): Promise<Comon> => {
  //     return new Promise<Comon>((resolve, reject) => {
  //       const data: Comon = { something: "something" };
  //       if (data) {
  //         resolve(data);
  //       } else {
  //         reject("Failed to load data");
  //       }
  //     });
  //   };

  //   const showData = async () => {
  //     const data: Comon = await createPromise();
  //     console.log(data);
  //   };

  //   showData();
}
