function Products1({ artwork1 }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 card-box mb-5">
      <div className="card">
        <img
          src={process.env.PUBLIC_URL + "/" + artwork1.imgUrl} // PUBLIC_URL 적용
          className="card-img-top"
          alt={artwork1.name}
          width="100%"
        />
        <div className="card-body">
          <h5 className="card-title">{artwork1.name}</h5>
          <p className="card-text">{artwork1.title}</p>
        </div>
      </div>
    </div>
  );
}

export default Products1;
