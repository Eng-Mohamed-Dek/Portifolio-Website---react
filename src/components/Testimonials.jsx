import Testimonial from "../../content/Testimonials.json";
import tsHeader from "../../content/tsHeader.json";

const Testimonials = () => {
  return (
    <div className="case-studies">
      <header>
        <h1>{tsHeader.header}</h1>
        <p>{tsHeader.subtitle}</p>
      </header>

      <div className="cases">
        {Testimonial.map((testimon) => (
          <div className="case testimonials" key={testimon.id}>
            <p>{testimon.oraahda}</p>
            <div className="display">
              <div>
                <img src={testimon.image} alt="" />
              </div>
              <div>
                <h6>{testimon.name}</h6>
                <p>{testimon.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
