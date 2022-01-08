import Image from "next/image";
export const getStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  const paths = data.map((pat) => {
    return {
      params: { id: pat.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://fakestoreapi.com/products/" + id);
  const data = await res.json();
  return {
    props: { detail: data },
  };
};

const Detail = ({ detail }) => {
  console.log(detail);
  return (
    <>
      <div className="container  my-5    ">
        <div className="card mb-3 border-0 shadow-lg p-5 ">
          <div className="row g-0 ">
            <div className="col-md-4 ">
              <img
                src={detail.image}
                className="img-fluid rounded-start"
                width={300}
                height={200}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{detail.title}</h5>
                <hr />
                <small>{detail.category}</small>
                <p className="card-text my-5">{detail.description}</p>
                <div className="text-center">
              
                  <h4 className="text-danger">  Price : {detail.price}$</h4>
                </div>
                <div className="row my-5 justify-content-start" >
                <p className="card-text my-5  col-5" >
                  <h6 className="text-muted">Stock :{detail.rating.count}</h6>
                </p>
                <a className=" col-6 my-5 btn btn-success " style={{maxWidth : "200px"}} >
                  <h6 className="text-dark">Buy</h6>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
