import Head from "next/head";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import Script from "next/script";
import Link from "next/link";
import Products from "../components/products";
import Pagination from "../components/paginate";

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return {
    props: { products: data },
  };
};

export default function Home({ products }) {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(3);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts =
    products && products.slice(indexOfFirstPost, indexOfLastPost);
  console.log(products);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="container ">
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      ></Script>

      <h1 className="my-4">Products</h1>
      <hr />
      <Products products={currentPosts} />

      <Pagination
        paginate={paginate}
        postsPerPage={postPerPage}
        totalPosts={products && products.length}
      />
    </div>
  );
}
