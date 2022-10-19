import {NextPage} from "next";
import useSWR, {Fetcher} from "swr";

import Navbar from "../components/Navbar/Navbar";

const fetcher: Fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const {data: products, error} = useSWR("/api/products", fetcher);

  return (
    <div>
      <Navbar />
      <h1>Hola mundo!</h1>
    </div>
  );
};

export default Home;
