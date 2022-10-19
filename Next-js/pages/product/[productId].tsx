import {NextPage} from "next";
import {useRouter} from "next/router";

const ProductItemPage: NextPage = () => {
  const {
    query: {productId},
  } = useRouter();

  return (
    <div>
      <h1>Product Item Page: {productId}</h1>
    </div>
  );
};

export default ProductItemPage;
