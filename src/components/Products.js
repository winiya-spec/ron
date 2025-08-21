function Products({ artwork }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 card-box">
      <div className="card">
        <img
          src={process.env.PUBLIC_URL + "/" + artwork.imgUrl}
          className="card-img-top"
          alt={artwork.title}
          width="100%"
        />
        <div className="card-body">
          <h5 className="card-title">{artwork.title}</h5>
          <p
            className="card-text"
            dangerouslySetInnerHTML={{ __html: artwork.content }}
          ></p>
        </div>
      </div>
    </div>
  );
}

export default Products;
