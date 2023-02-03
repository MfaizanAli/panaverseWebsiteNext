const Card=({heading, para}) => {
  return (
    <div class="service-item first-service">
      <div class="icon"></div>
      <h4>{heading}</h4>
      <p>{para}</p>
      <div class="text-button">
        {/* <a href="#">Read More <i class="fa fa-arrow-right"></i></a> */}
      </div>
    </div>
  );
};

export default Card;