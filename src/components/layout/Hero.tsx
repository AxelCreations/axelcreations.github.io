import Container from '../Container';
import profileImage from '../../img/profile.webp';

const Hero = () => {
  return (
    <section>
      <Container>
        <div className="content">
          <p>I'm</p>
          <h1>Reynel Axel</h1>
          <p>
            A Dominican Developer who loves programming, web design and problem solving.
          </p>
          <p>
            With more than 12 years of experience in the Banking Sector, more than 7 years as a freelancer Full-Stack developer using Microsoft technologies like C#, EF, Dotnet, Blazor, MVC, HTML/CSS/JS, Bootstrap and 3 years of experience as a Senior Web Developer using WordPress and Laravel.
          </p>
        </div>
        <div className="image">
          <picture>
            <img src={profileImage} alt="Reynel Axel Profile" />
          </picture>
        </div>
      </Container>
    </section>
  )
}

export default Hero;
