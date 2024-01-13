import Container from '../../components/Container';
import profileImage from '../../img/profile.webp';

import styled from 'styled-components';

const Hero = () => {
  return (
    <section>
      <StyledContainer>
        <div className="content">
          <p className='content-subtitle'>I'm</p>
          <h1 className='content-title'>Reynel Axel</h1>
          <p className='content-description'>
            A Dominican Developer who loves programming, web design and problem solving.
          </p>
          <p className='content-description'>
            With more than 12 years of experience in the Banking Sector, more than 7 years as a freelancer Full-Stack developer using technologies like C#, EF, Dotnet, Blazor, MVC, HTML/CSS/JS, Bootstrap and 3 years of experience as a Senior Web Developer using WordPress and touching a little bit of Laravel and ReactJS.
          </p>
        </div>
        <div className="image">
          <picture>
            <img src={profileImage} alt="Reynel Axel Profile" />
          </picture>
        </div>
      </StyledContainer>
    </section>
  )
}

export default Hero;

const StyledContainer = styled(Container)`
  display: flex;
  padding: 4rem 0 0;

  @media screen and (max-width: 1140px) {
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    padding-top: 2.5rem !important;
    padding-bottom: 2rem !important;
  }

  .content {
    font-size: 26px;
    font-weight: 300;

    &-subtitle {
      margin: 0;
      font-size: 60px;
      font-weight: 400;

      @media screen and (max-width: 768px) {
        font-size: 40px;
      }
    }
    
    &-title {
      margin: 0 0 32px 0;
      font-size: 145px;
      font-weight: 400;
      line-height: 100%;
      margin-left: -5px;

      @media screen and (max-width: 1350px) {
        font-size: 120px;
      }

      @media screen and (max-width: 768px) {
        font-size: 95px;
      }

      @media screen and (max-width: 576px) {
        font-size: 60px;
        margin-bottom: 24px;
      }
    }

    &-description {
      margin-top: 0;
      max-width: 750px;

      @media screen and (max-width: 1350px) {
        max-width: 100%;
      }

      @media screen and (max-width: 768px) {
        font-size: 22px;
      }

      @media screen and (max-width: 576px) {
        font-size: 20px;
        text-align: center;
        font-weight: 400;
        line-height: 125%;
      }
    }
  }

  .image {
    align-items: center;
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;

    @media screen and (max-width: 1350px) {
      img {
        max-height: 400px;
      }
    }

    @media screen and (max-width: 1140px) {
      justify-content: center;
    }

    @media screen and (max-width: 768px) {
      img {
        max-height: 220px;
      }
    }
  }

`