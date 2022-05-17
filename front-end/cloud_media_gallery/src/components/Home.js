import dummy from "../dummy.png";

const Home = () => {
  return (
    <div>
      <div className="container">
        <p>Day, Date Month</p>
        <div className="row">
          <div className="col-sm-4">
            <img
              src={require("../logo.svg").default}
              className="rounded img-fluid"
              alt="pic1"
            />
          </div>
          <div className="col-sm-4">
            <img
              src={dummy}
              className="rounded img-fluid mx-auto d-block"
              alt="pic2"
            />
          </div>
          <div className="col-sm-4">
            <img
              src={require("../logo.svg").default}
              className="rounded img-fluid"
              alt="pic3"
            />
          </div>
        </div>
        <p className="float-left">Day, Date Month</p>
      </div>
    </div>
  );
};

export default Home;
