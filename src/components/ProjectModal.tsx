import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import styled, { keyframes } from 'styled-components';
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
    if (!selectedProject || selectedProject.images.length < 2) return;

    const intervalId = window.setInterval(() => {
      setSelectedImage((currentImage) => {
        const currentIndex = selectedProject.images.indexOf(currentImage);
        const nextIndex = (currentIndex + 1) % selectedProject.images.length;

        return selectedProject.images[nextIndex];
      });
    }, 4000);

    return () => window.clearInterval(intervalId);
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
        <Modal className="show" role="presentation" onMouseDown={(event) => {
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
                    <img key={selectedImage} className="preview-image" src={selectedImage} alt={`selected preview`} height={100} />
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

const modalBackdropIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const modalContentIn = keyframes`
  from { opacity: 0; transform: translateY(16px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const previewImageIn = keyframes`
  from { opacity: 0; transform: scale(1.025); }
  to { opacity: 1; transform: scale(1); }
`;

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
    animation: ${modalBackdropIn} 250ms ease both;
  }

  .modal {
    background: linear-gradient(145deg, rgba(49, 54, 64, 0.98), rgba(32, 36, 44, 0.98));
    border: 1px solid rgba(178, 178, 178, 0.2);
    border-radius: 18px;
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.38);
    max-height: 88vh;
    max-width: 1180px;
    overflow-y: auto;
    padding: 4rem 2.75rem 2rem;
    position: relative;
    width: 100%;
    animation: ${modalContentIn} 300ms ease both;

    &::before {
      background: linear-gradient(90deg, var(--color-white-smoke), transparent);
      content: '';
      height: 2px;
      left: 2.75rem;
      position: absolute;
      top: 0;
      width: 34%;
    }

    @media screen and (max-width: 768px) {
        padding: 3.5rem 1.25rem 1.5rem;
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
      right: 1rem;
      top: 1rem;
      z-index: 5;

      button {
        align-items: center;
        background: transparent;
        border: 0;
        border-radius: 50%;
        display: flex;
        height: 38px;
        justify-content: center;
        padding: 0;
        transition: opacity 250ms ease, transform 250ms ease;
        width: 38px;
        position: relative;
        z-index: 1;

        &:hover {
          opacity: 0.7;
          transform: rotate(8deg);
        }
      }
      
      @media screen and (max-width: 768px) {
        right: 0.5rem;
        top: 0.5rem;

        img {
          height: 28px;
            width: 28px;
        }
      }
    }

    &-body {
      display: grid;
      gap: 2.5rem;
      grid-template-columns: minmax(280px, 0.8fr) minmax(0, 1.2fr);
      
      @media screen and (max-width: 1200px) {
        gap: 1.5rem;
        grid-template-columns: 1fr 1fr;
      }
      
      @media screen and (max-width: 992px) {
        grid-template-columns: 1fr;
        margin-bottom: 1.5rem;
        gap: 1rem;
      }

      &-info, &-gallery {
        min-width: 0;
        width: auto;
      }

      &-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1rem 0 1.5rem;

        @media screen and (max-width: 768px) {
          padding: 0;
        }
        
        h4 {
          font-size: clamp(2rem, 4vw, 3.25rem);
          line-height: 1;
          margin-bottom: 1.5rem;
      
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
          border-bottom: 1px solid rgba(178, 178, 178, 0.18);
          border-top: 1px solid rgba(178, 178, 178, 0.18);
          margin-bottom: 1.25rem;
          padding: 0.9rem 0;
      
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
          background: var(--bg-secondary);
          border: 1px solid rgba(178, 178, 178, 0.14);
          border-radius: 12px;
          display: block;
          height: 360px;
          overflow: hidden;
      
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
            transition: opacity 250ms ease, transform 500ms ease;
            width: 100%;

            &.preview-image {
              animation: ${previewImageIn} 450ms ease both;
            }
          }
        }
        
        &-options {
          display: flex;
          justify-content: center;
          list-style: none;
          flex-wrap: wrap;
          padding: 0.75rem 0 0;
          gap: 0.5rem;
          margin: 0;

          li {
            cursor: pointer;
            overflow: hidden;
            flex: 0 0 74px;
            height: 54px;
            width: 74px;
            border-radius: 7px;
            border: 2px solid transparent;
            transition: border-color 250ms ease, transform 250ms ease;

            @media screen and (max-width: 578px) {
              flex-basis: 64px;
              width: 64px;
            }

            &.current {
              border-color: var(--color-white);
              transform: translateY(-3px);

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
        color: var(--color-white-smoke);
        font-size: 0.85rem;
        letter-spacing: 0.2rem;
        line-height: 100%;
        padding: 0.5rem 0;
        position: relative;
        text-transform: uppercase;
        z-index: 0;
      }

      .project-skills {
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
        justify-content: flex-start;
        min-height: 0;
        padding-top: 1rem;
        
        .skill-icon {
          background: rgba(178, 178, 178, 0.06);
          border: 1px solid rgba(178, 178, 178, 0.16);
          border-radius: 8px;
          height: 54px;
          padding: 0.5rem;
          transition: border-color 250ms ease, transform 250ms ease;
          width: 74px;

          &:hover {
            border-color: rgba(178, 178, 178, 0.48);
            transform: translateY(-3px);
          }

          img {
            object-fit: contain;
            object-position: center center;
            height: 100%;
            width: 100%;
          }

          @media screen and (max-width: 578px) {
            height: 48px;
            width: 64px;
          }
        }
      }
    }
  }
`;


