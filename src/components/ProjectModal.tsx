import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import styled from 'styled-components';
import ProjectModel from '../lib/models/ProjectModel';
import Button from './global/Button';
import closeIcon from '../img/close.svg';
import Img from './global/Img';
import { useBodyScrollLock } from '../lib/useBodyScrollLock';

type ProjectModalProps = {
  selectedProject: ProjectModel | null;
  onClose: () => void;
}

const ProjectModal = ({ selectedProject, onClose }: ProjectModalProps) => {
  const [selectedImage, setSelectedImage] = useState<string>(selectedProject?.images[0] ?? '');

  useBodyScrollLock(Boolean(selectedProject));

  useEffect(() => {
    setSelectedImage(selectedProject?.images[0] ?? '');
  }, [selectedProject]);

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, selectedProject]);

  return (
    <>
      {selectedProject && createPortal(
        <Modal role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) onClose();
        }}>
          <div className="modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
            <div className="modal-close">
              <Button type="button" aria-label="Close project details" onClick={onClose}>
                <Img src={closeIcon} text={`close-button`} height={40} showPlaceholder={false} />
              </Button>
            </div>
            <div className="modal-body">
              <div className="modal-body-info">
                <h4 id="project-modal-title">{selectedProject.title}</h4>
                <div className="modal-body-info-meta">
                  <span>{selectedProject.company}</span>
                  <span>{selectedProject.date}</span>
                </div>
                <p>{selectedProject.description}</p>
              </div>
              <div className="modal-body-gallery">
                {selectedImage && (
                  <picture>
                    <img src={selectedImage} alt={`selected preview`} height={100} />
                  </picture>
                )}
                <ul className="modal-body-gallery-options">
                  {selectedProject.images.map((image) => (
                    <li className={(selectedImage === image ? 'current' : '')}
                      onClick={() => { setSelectedImage(image) }}
                      key={image}>
                      <Img src={image} text={`project preview option`} height={100} showPlaceholder={false} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="modal-footer">
              <h5>Created With</h5>
              <div className="project-skills">
                {selectedProject.skills?.map((skill) => (
                  <div key={skill.title} className='skill-icon'>
                    <Img src={skill.icon} text={skill.title} height={50} showPlaceholder={false} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Modal>
        , document.body // Second param of createPortal
      )}
    </>
  )
}

export default ProjectModal;

const Modal = styled.div`
  align-items: center;
  backdrop-filter: blur(5px);
  background: linear-gradient(30deg, var(--bg-main-50) 50%, var(--bg-secondary-50) 60%);
  display: none;
  height: 100vh;
  justify-content: center;
  left: 0;
  padding: 0 1rem;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 999;

  &.show {
    display: flex;
  }

  .modal {
    background-color: var(--bg-secondary-80);
    border-radius: 0.5rem;
    border: 1px solid var(--bg-main-50);
    box-shadow: 0 0 10px 5px rgba(0,0,0,0.2);
    max-height: 85vh;
    max-width: 1440px;
    overflow-y: auto;
    padding: 6rem 4rem 4rem;
    position: relative;
    width: 100%;

    &::before {
      content: '';
      background: var(--bg-secondary-80);
      border-radius: 0.5rem;
      display: block;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
      z-index: -1;

      @media screen and (max-width: 992px) {
        position: fixed;
      }
    }

    @media screen and (max-width: 768px) {
      padding: 2rem 2rem;
    }

    @media screen and (max-width: 578px) {
      &::-webkit-scrollbar {
        overflow: hidden;
        border-radius: 2rem;
        box-shadow: 0 0 1px 1px rgba(0,0,0,0.25);
        width: 3px;
      }
      
      &::-webkit-scrollbar-thumb {
        background-color: var(--bg-main);
        border-radius: 0.5rem;
      }
    }

    &-close {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      
      @media screen and (max-width: 768px) {
        top: 0.8rem;
        right: 0.8rem;

        img {
          height: 28px;
        }
      }
    }

    &-body {
      display: flex;
      gap: 2rem;
      justify-content: center;
      
      @media screen and (max-width: 1200px) {
        flex-direction: column;
      }
      
      @media screen and (max-width: 992px) {
        margin-bottom: 1.5rem;
        gap: 1rem;
      }

      &-info, &-gallery {
        width: 50%;
      
        @media screen and (max-width: 1200px) {
          width: 100%;
        }
      }

      &-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 2rem 2rem;

        @media screen and (max-width: 768px) {
          padding: 0;
        }
        
        h4 {
          font-size: 2.5rem;
          margin-bottom: 1.25rem;
      
          @media screen and (max-width: 768px) {
            font-size: 1.5rem;
          }
        }

        p {
          font-size: 1.25rem;
          line-height: 125%;
          letter-spacing: 0.025rem;
          font-weight: 400;
      
          @media screen and (max-width: 768px) {
            font-size: 1rem;
          }
        }

        &-meta {
          display: flex;
          justify-content: space-between;
          padding: 1.25rem 0;
          border-top: 1px solid var(--bg-main);
          margin-bottom: 1rem;
      
          @media screen and (max-width: 768px) {
            padding-bottom: 0.25rem;
          }

          span {
            color: var(--color-white-smoke);
            font-size: 1.5rem;
      
            @media screen and (max-width: 768px) {
              font-size: 1rem;
            }
          }
        }
      }

      &-gallery {
        position: relative;

        picture {
          display: block;
          height: 350px;
      
          @media screen and (max-width: 768px) {
            height: 250px;
          }
      
          @media screen and (max-width: 578px) {
            height: 180px;
          }

          img {
            object-fit: contain;
            object-position: center;
            height: 100%;
            width: 100%;
          }
        }
        
        &-options {
          display: flex;
          justify-content: space-around;
          list-style: none;
          flex-wrap: wrap;
          padding: 0.75rem 0;
          gap: 0.75rem 0;
          margin: 0;

          li {
            cursor: pointer;
            overflow: hidden;
            height: 50px;
            width: 80px;
            border-radius: 8px;
            border: 4px solid var(--color-black);

            &.current {
              border-color: white;

              img {
                transform: scale(1.3);
              }
            }

            img {
              object-fit: cover;
              object-position: center center;
              height: 100%;
              transition: transform 0.25s ease-in;
              width: 100%;
            }
          }
        }
      }
    }

    &-footer {
      padding-top: 1.5rem;
      position: relative;
      text-align: center;
      z-index: 0;
      
      h5 {
        display: inline-block;
        font-size: 1.5rem;
        letter-spacing: 0.125rem;
        line-height: 100%;
        padding: 0.5rem 1rem;
        position: relative;
        text-transform: uppercase;
        z-index: 0;
      }

      .project-skills {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
        justify-content: space-around;
        min-height: 100px;
        padding-top: 2rem;
        
        .skill-icon {
          height: 50px;
          width: 100px;

          img {
            object-fit: contain;
            object-position: center center;
            height: 100%;
            width: 100%;
          }
        }
      }
    }
  }
`;

