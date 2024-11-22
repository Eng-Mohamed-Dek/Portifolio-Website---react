import csHeader from "../../content/csHeader.json";
import cStudies from "../../content/cStudies.json";

const CaseStudies = () => {
  return (
      <div className="case-studies">
          <header>
              <h1>{csHeader.header}</h1>
              <p>{csHeader.subtitle}</p>
          </header>

          <div className="cases">
              {
                  cStudies.map((casestudy) => (
                      <div className="case text-align" key={casestudy.id}>
                          <img src={casestudy.image} alt="" className="case-study-img" />
                          <h3>{casestudy.title}</h3>
                          <p>{casestudy.subtitle}</p>
                    </div>
                ))
              }
          </div>
    </div>
  );
};

export default CaseStudies;
