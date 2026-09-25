import ProjectModel from "../../lib/models/ProjectModel";
import styled from 'styled-components';
import Button from "../global/Button";
import { HorizontalScroll } from '../../lib/HorizontalScroll';

import ArrowLeftIcon from '../../img/arrow-left.svg';
import LinkIcon from '../../img/link.svg';
import RepoIcon from '../../img/repo.svg';
import Img from '../global/Img';

type ProjectCardProps = {
  project: ProjectModel;
  carouselId: number;
  onSelectProject: (project: ProjectModel) => void;
}

const ProjectCard = ({ project, carouselId, onSelectProject }: ProjectCardProps) => {
  return (
    <Wrapper className='project'>
      <div className="project-header">
        <div className="project-header-tag">
          <span>{project.date}</span>
        </div>
        <div className="project-header-images" id={`project-carousel-${carouselId}`}>
          {project.images.map((img, index) =>
            <div className="image" key={img}>
              <Img src={img} text={`${project.title} (${index})`} height={40} />
            </div>)}
        </div>
        <div className="project-header-images-controls">
          <Button className='control control-left'
            onClick={() => { HorizontalScroll({ target: `#project-carousel-${carouselId}`, speed: -300 }) }}>
            <Img src={ArrowLeftIcon} text={`control arrow left`} height={24} showPlaceholder={false} />
          </Button>
          <Button className='control control-right'
            onClick={() => { HorizontalScroll({ target: `#project-carousel-${carouselId}`, speed: 300 }) }}>
            <Img src={ArrowLeftIcon} text={`control arrow right`} height={24} showPlaceholder={false} />
          </Button>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-content-title">{project.title}</h3>
        <div className="project-content-company">{project.company}</div>
        <p className="project-content-excerpt">{project.excerpt}</p>
        <div className="project-content-links">
          <Button onClick={() => { onSelectProject(project) }}><span>Show details...</span></Button>
          <div className="row">
            {project.link?.length &&
              <a href={project.link} title={`${project.title} site`} target="_blank" rel="noreferrer">
                <Img src={LinkIcon} text={`${project.title} site`} height={24} showPlaceholder={false} />
              </a>
            }

            {project.repo?.length &&
              <a href={project.repo} title={`${project.title} repo (Request access)`} target="_blank" rel="noreferrer">
                <Img src={RepoIcon} text={`${project.title} repo`} height={24} showPlaceholder={false} />
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
  background: var(--bg-secondary);
  border: 1px solid rgba(178, 178, 178, 0.18);
  border-radius: 16px;
  display: grid;
  grid-template-rows: auto 1fr;
  overflow: hidden;
  position: relative;
  transform: translateY(0);
  transition: transform 350ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 350ms ease, border-color 350ms ease;

  &:hover {
    border-color: rgba(178, 178, 178, 0.42);
    box-shadow: 0 18px 36px rgba(0, 0, 0, 0.24);
    transform: translateY(-8px);

    .project-header-images .image img {
      transform: scale(1.035);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
  
  @media screen and (max-width: 768px) {
    max-width: 450px;
    margin: 0 auto;
  }
  
  .project {
    &-header {
      align-items: center;
      background: var(--bg-main);
      display: flex;
      height: 220px;
      justify-content: center;
      overflow: hidden;
      position: relative;

      &::after {
        background: linear-gradient(180deg, rgba(32, 36, 44, 0.05), rgba(32, 36, 44, 0.48));
        content: '';
        inset: 0;
        pointer-events: none;
        position: absolute;
        z-index: 1;
      }

      &-tag {
        background: rgba(32, 36, 44, 0.9);
        border: 1px solid rgba(178, 178, 178, 0.24);
        border-radius: 999px;
        left: 1rem;
        padding: 0.45rem 0.8rem;
        position: absolute;
        top: 1rem;
        z-index: 2;

        span {
          color: var(--color-white-smoke);
          font-size: 0.72rem;
          letter-spacing: 0.1rem;
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
        z-index: 0;

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
            transition: transform 600ms cubic-bezier(0.22, 1, 0.36, 1);
            width: 100%;
          }
        }
  
        &-controls {
          position: absolute;
          display: flex;
          bottom: 0.9rem;
          gap: 1rem;
          z-index: 2;

          button {
            align-items: center;
            backdrop-filter: blur(8px);
            background: rgba(32, 36, 44, 0.82);
            border: 1px solid rgba(255, 255, 255, 0.65);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            height: 36px;
            padding: 0;
            transition: background-color 250ms ease, transform 250ms ease;
            width: 36px;
            
            &:hover {
              background: var(--bg-main);
              transform: scale(1.1);
            }

            img {
              height: 28px;
              width: 28px;
            }

          }
        }
      }
    }

    &-content {
      background: var(--bg-secondary);
      display: flex;
      flex-direction: column;
      min-height: 250px;
      padding: 1.35rem 1.4rem 1.25rem;
      text-align: left;

      &-title {
        font-weight: 700;
        font-size: 1.45rem;
        line-height: 120%;
      }

      &-company {
        font-weight: 300;
        color: var(--color-white-smoke);
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.14rem;
        margin-top: 0.35rem;
        text-transform: uppercase;
      }

      &-links {
        display: flex;
        align-items: center;
        gap: 1rem;
        justify-content: space-between;
        margin-top: auto;
        padding-top: 1.25rem;
        border-top: 1px solid rgba(178, 178, 178, 0.14);

        a {
          border: 1px solid rgba(255, 255, 255, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          background: white;
          height: 34px;
          width: 34px;
          opacity: 0.8;
          transition: transform 300ms ease, background-color 300ms ease;

          &:hover {
            opacity: 1;
            transform: scale(1.05);
            background: var(--color-white-smoke);

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
        color: var(--color-white-smoke);
        font-size: 0.98rem;
        line-height: 145%;
        margin: 1.25rem 0;
      }

      button {
        background: var(--bg-main);
        border: 1px solid rgba(178, 178, 178, 0.24);
        font-size: 1rem;
        border-radius: 8px;
        padding: 0.65rem 1.1rem;
        color: white;
        font-weight: 800;
        display: block;
        transition: background-color 250ms ease, transform 250ms ease;

        &:hover {
          background: var(--color-white-smoke);
          color: var(--bg-secondary);
          transform: translateY(-2px);
        }
      }
    }
  }
`;
