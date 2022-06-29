(() => {
  // Type
  type UserID = string | number | boolean;

  function greeting(userID: UserID) {
    if (typeof userID === "string") {
      return `string: ${userID.toLowerCase()}`;
    }

    if (typeof userID === "number") {
      return `number: ${userID.toFixed()}`;
    }

    if (typeof userID === "boolean") {
      return `boolean: ${userID}`;
    }
  }

  greeting("hola");
  greeting(2);
  greeting(true);

  // Literal types
  type Sizes = "XS" | "S" | "M" | "L" | "XL";

  // Null !== undefined
  let myNumber: number;
  let myString: string;

  const createProductToJson = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  };
  const productOne = createProductToJson("p1", new Date(), 12);

  const calcTotal = (prices: number[]): number => {
    let total: number = 0;
    prices.forEach((price) => (total += price));

    return total;
  };

  const getTotal = calcTotal([1, 2, 3, 4]);

  // Object and functions

  const login = (data: { email: string; password: string }) => {
    console.log(data.email, data.password);
  };

  login({
    email: "bvp@gmail.com",
    password: "1234",
  });

  const products: any[] = [];
  const addProduct = (data: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
    products.push(data);
  };

  addProduct({
    title: "remera",
    createdAt: new Date(),
    stock: 12,
  });
})();
