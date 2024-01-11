import styled from 'styled-components';
import { ContainerType } from '../lib/global-types';

type TContainerProps = {
	children: React.ReactNode;
	type?: ContainerType;
	className?: string;
};

const Container = ({ type = ContainerType.Box, children, className='flex' }: TContainerProps): JSX.Element => {
	return (
		<Wrapper className={type + ' ' + className}>
			{children}
		</Wrapper>
	);
}

export default Container;

const Wrapper = styled.div`
	&.full-width {
		padding: 0 24px;
		padding-left: calc((100% - 1440px) / 2);
		width: 100vw;
		
		@media screen and (max-width: 1440px) {
			padding-left: calc((100% - 1140px) / 2);
		}

		@media screen and (max-width: 1140px) {
			padding-left: calc((100% - 992px) / 2);
		}

		@media screen and (max-width: 992px) {
			padding-left: calc((100% - 768px) / 2);
		}

		@media screen and (max-width: 768px) {
			padding: 0 16px;
		}
	}

	&.container-width {
		margin: 0 auto;
		max-width: 1440px;
		width: 100%;

		@media screen and (max-width: 1440px) {
			max-width: 1140px;
			padding: 0 24px;
		}

		@media screen and (max-width: 1140px) {
			max-width: 992px;
		}

		@media screen and (max-width: 992px) {
			max-width: 768px;
			padding: 0 16px;
		}
	}
`;
