const Card=(heading:any, para:any) => {
  return (
    <div className="service-item first-service">
      <div className="icon"></div>
      <h4>{heading}</h4>
      <p>{para}</p>
      <div className="text-button">
        {/* <a href="#">Read More <i className="fa fa-arrow-right"></i></a> */}
      </div>
    </div>
  );
};

export default Card;