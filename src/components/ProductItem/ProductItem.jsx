/* eslint-disable react/prop-types */


export default function ProductItem({product}) {
  return (

    <div key={product.id} className="col-md-3">
      <div className="bg-white text-dark p-3 rounded-3">
        <img

          src={product.image}

          alt={product.title}
          className="img-fluid w-100"
          style={{ height: "300px" }}
        />
        <h2>{product.title.split(" ").splice(0, 2).join("")}</h2>
        <span>{product.category}</span>
        <div className="d-flex justify-content-between">
          <p>{product.price} LE</p>
          <p>
            <i className="fa fa-star text-warning"></i> {product.rating.rate}
          </p>
        </div>
      </div>
    </div>
  );
}
