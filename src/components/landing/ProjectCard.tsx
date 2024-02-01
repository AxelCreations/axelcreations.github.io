import ProjectModel from "../../lib/models/ProjectModel";
import styled from 'styled-components';
import Button from "../global/Button";
import { HorizontalScroll } from '../../lib/HorizontalScroll';

import ArrowLeftIcon from '../../img/arrow-left.svg';
import LinkIcon from '../../img/link.svg';
import RepoIcon from '../../img/repo.svg';

type ProjectCardProps = {
  project: ProjectModel;
  carouselId: number;
}

const ProjectCard = ({ project, carouselId }: ProjectCardProps) => {
  return (
    <Wrapper className='project'>
      <div className="project-header">
        <div className="project-header-tag">
          <span>{project.date}</span>
        </div>
        <div className="project-header-images" id={`project-carousel-${carouselId}`}>
          {project.images.map((img, index) => <div className="image" key={index}><img src={img} alt={`${project.title} (${index})`} height={40} /></div>)}
        </div>
        <div className="project-header-images-controls">
          <Button className='control control-left'
            onClick={() => { HorizontalScroll({ target: `#project-carousel-${carouselId}`, speed: -300 }) }}>
            <img src={ArrowLeftIcon} alt='control arrow left' height={24} />
          </Button>
          <Button className='control control-right'
            onClick={() => { HorizontalScroll({ target: `#project-carousel-${carouselId}`, speed: 300 }) }}>
            <img src={ArrowLeftIcon} alt='control arrow right' height={24} />
          </Button>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-content-title">{project.title}</h3>
        <div className="project-content-company">{project.company}</div>
        <p className="project-content-excerpt">{project.excerpt}</p>
        <div className="project-content-links">
          <Button><span>More...</span></Button>
          <div className="row">
            {project.link?.length &&
              <a href={project.link} title={`${project.title} site`} target="_blank" rel="noreferrer">
                <img src={LinkIcon} alt={`${project.title} site icon`} height={24} />
              </a>
            }

            {project.repo?.length &&
              <a href={project.repo} title={`${project.title} repo`} target="_blank" rel="noreferrer">
                <img src={RepoIcon} alt={`${project.title} repo icon`} height={24} />
              </a>
            }
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default ProjectCard;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  border: 5px solid var(--bg-secondary);
  border-radius: 8px;
  
  @media screen and (max-width: 768px) {
    max-width: 450px;
    margin: 0 auto;
  }
  
  .project {
    &-header {
      align-items: center;
      display: flex;
      height: 200px;
      justify-content: center;
      position: relative;

      &-tag {
        background: var(--bg-secondary);
        border-radius: 0 24px 24px 0;
        left: 0;
        padding: 0.5rem 1rem 0.5rem 0.5rem;
        position: absolute;
        top: 1rem;

        span {
          font-size: 0.9rem;
          letter-spacing: 0.08rem;
          font-weight: 700;
          text-transform: uppercase;
        }
      }

      &-images {
        display: grid;
        gap: 0;
        grid-auto-columns: 100%;
        grid-template-rows: 1fr;
        height: 180px;
        max-width: 350px;
        overflow-x: auto;
        scroll-behavior: smooth;
        scroll-snap-type: x mandatory;
        width: 100%;

        &::-webkit-scrollbar {
          display: none;
        }

        @media screen and (max-width: 578px) {
          max-width: 300px;
          width: 100%;
        }

        .image {
          display: flex;
          grid-row: 1;
          height: 180px;
          overflow: hidden;
          scroll-snap-align: start;

          img {
            object-fit: contain;
            object-position: center center;
            max-height: 100%;
            max-width: 100%;
            height: 100%;
            width: 100%;
          }
        }
  
        &-controls {
          position: absolute;
          display: flex;
          bottom: -0.5rem;
          gap: 1rem;

          button {
            display: flex;
            justify-content: center;
            align-items: center;
            background: var(--bg-secondary);
            height: 40px;
            width: 40px;
            border-radius: 50%;
            padding: 0;
            transition: transform 0.5s ease;
            
            &:hover {
              transform: scale(1.1);
            }

            img {
              height: 35px;
              width: 35px;
            }

          }
        }
      }
    }

    &-content {
      background: var(--bg-secondary);
      padding: 1rem;
      text-align: left;

      &-title {
        font-weight: 700;
        font-size: 1.3rem;
        line-height: 120%;
      }

      &-company {
        font-weight: 300;
        font-size: 1rem;
        letter-spacing: 0.1rem;
      }

      &-links {
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: space-between;

        a {
          border: 1px solid white;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          background: white;
          height: 30px;
          width: 30px;
          opacity: 0.8;
          transition: transform 0.5s ease;

          &:hover {
            opacity: 1;
            transform: scale(1.05);

            img {
              transform: rotate(15deg);
            }
          }

          img {
            transition: transform 0.5s ease;
          }
        }

        .row {
          display: flex;
          gap: 1rem;
        }
      }

      p {
        font-size: 1rem;
        line-height: 125%;
        margin: 1rem 0;
      }

      button {
        background: var(--bg-main);
        font-size: 1rem;
        border-radius: 10px;
        padding: 0.5rem 2rem;
        color: white;
        font-weight: 800;
        display: block;
      }
    }
  }
`;
