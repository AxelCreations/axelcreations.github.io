import styled from 'styled-components';
import ExperienceModel from '../../lib/models/ExperienceModel';

type ExperienceModalProps = {
  selectedExperience: ExperienceModel | null;
}

const ExperienceModal = ({ selectedExperience }: ExperienceModalProps) => {
  return (
    <Wrapper>
      { selectedExperience && 
        <Modal>
          <h1>Holis</h1>
        </Modal>
      }
    </Wrapper>
  )
}

export default ExperienceModal;

const Wrapper = styled.div``;

const Modal = styled.div``;

