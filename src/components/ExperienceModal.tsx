import { Dispatch, SetStateAction } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import ExperienceModel from '../lib/models/ExperienceModel';
import Button from './global/Button';
import closeIcon from '../img/close.svg';

type ExperienceModalProps = {
  selectedExperience: ExperienceModel | null;
  changeSelectedExperience: Dispatch<SetStateAction<ExperienceModel | null>>;
}

const ExperienceModal = ({ selectedExperience, changeSelectedExperience }: ExperienceModalProps) => {
  return (
    <>
      { selectedExperience &&  createPortal(
        <Modal>
          <div className="modal">
            <div className="modal-close">
              <Button onClick={() => {changeSelectedExperience(null)}}>
                <img src={closeIcon} title={`close-button`} alt={`close-button icon`} height={40} />
              </Button>
            </div>
            <div className="modal-title">
              <h4>{selectedExperience.title}</h4>
              <h5>{selectedExperience.company}</h5>
            </div>
            <div className="modal-content">
              <p>{selectedExperience.description}</p>
            </div>
            <div className="modal-footer">
              <span>{selectedExperience.initialDate}</span>
              <img src={selectedExperience.icon} title={selectedExperience.company} alt={`${selectedExperience.company} icon`} height={40} />
              <span>{selectedExperience.endDate}</span>
            </div>
          </div>
        </Modal>
        , document.body // Second param of createPortal
      )}
    </>
  )
}

export default ExperienceModal;

const Modal = styled.div`
  align-items: center;
  backdrop-filter: blur(5px);
  background: linear-gradient(30deg, var(--bg-main-50) 50%, var(--bg-secondary-50) 50%);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  padding: 0 1rem 150px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 999;

  .modal {
    background-color: var(--bg-secondary-80);
    border-radius: 0.5rem;
    border: 1px solid var(--bg-main-50);
    box-shadow: 0 0 10px 5px rgba(0,0,0,0.2);
    max-width: 550px;
    padding: 4rem;
    position: relative;
    width: 100%;
    z-index: 1;

    &::before {
      content: '';
      display: block;
      background: var(--bg-secondary-80);
      top: 0;
      border-radius: 0.5rem;
      right: 0;
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: -1;
    }

    @media screen and (max-width: 768px) {
      padding: 2rem 2rem;
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

    &-title {
      margin-bottom: 2rem;
      
      @media screen and (max-width: 768px) {
        margin-bottom: 1.25rem;
      }

      h4 {
        font-size: 2rem;
      
        @media screen and (max-width: 768px) {
          font-size: 1.5rem;
        }
      }

      h5 {
        font-size: 1.25rem;
        color: var(--color-white-smoke);
      
        @media screen and (max-width: 768px) {
          font-size: 1rem;
        }
      }
    }

    &-content {
      margin-bottom: 2rem;
      display: flex;
      justify-content: center;
      
      @media screen and (max-width: 768px) {
        margin-bottom: 1.5rem;
      }

      p {
        margin: 0;
      }
    }

    &-footer {
      align-items: center;
      display: flex;
      gap: 1rem;
      justify-content: center;
      position: relative;

      span {
        font-weight: 700;
        min-width: 90px;

        &:first-of-type {
          text-align: right;
        }
      }
    }
  }
`;

