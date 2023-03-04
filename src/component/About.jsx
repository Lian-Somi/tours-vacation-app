import aboutimg from "../images/about.jpeg";
import Title from "./Title";

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutimg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            From top ranked hotels, airline tickets, and sight-seeing tours, our
            all-inclusive packages are easy on the pocket, and guaranteed to be
            fabulous fun.
          </p>
          <p>
            Go on an island hopping tour on the land of the Maldives. A country
            in Southeast Asia, the Maldives nurtures the best of resort islands
          </p>
          <a href="#about" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
