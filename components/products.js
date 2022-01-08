import Link from "next/link";
import { useEffect } from "react";

const Products = ({ products }) => {
  return (
    <>
      {products === undefined ? (
        <h3>loading...</h3>
      ) : (
        <div className="row justify-content-center  justify-content-md-start">
          {products.map((product) => {
            return (
              <>
                <Link href={"/product/" + product.id}>
                  <div
                    className="col-7 col-md-4 my-5  "
                    key={product.id}
                    style={{ cursor: "pointer" }}
                  >
                    <div
                      className="card border-0 shadow-lg mx-2 my-4 h-100   "
                      key={product.id}
                    >
                      <div className="text-center my-5">
                        <img src={product.image} width="200px" height="200px" />
                      </div>
                      <div className="card-title text-center pe-3 ps-3  ">
                        <h5>{product.title}</h5>
                      </div>
                      <div className="card-subtitle text-center my-auto">
                        <span className="text-muted">{product.category}</span>
                      </div>
                      <div className="card-text text-center ">
                        <h4 className="text-danger">{product.price}$</h4>
                      </div>
                      <div className="card-text text-center my-auto ">
                        in Stock :{" "}
                        <h4 className="text-muted">{product.rating.count}</h4>
                      </div>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Products;
