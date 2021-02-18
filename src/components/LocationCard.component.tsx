import styled from 'styled-components';

import image from '../image.png';
import symbol from '../symbol.svg';

import useYuker from '../context/useYuker';

import { toCurrency } from './utils';

const Card = styled.div`
  display: flex;
  width: auto;
  height: 148px;
  background: #FFFFFF;
  margin-bottom: 50px;

  border: 1px solid #F2F2F2;
  box-sizing: border-box;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
`;

const Image = styled.img`
  width: 40%;
  height: inherit;
  border-radius: 10px 0 0 10px;
`;


const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;

  h3 {
    margin-block-start: 0;
    margin-block-end: 0.2em;
  };
`;

const Icon = styled.div`
  display: flex;
  margin-right: 5px;
  width: 16px;
  height: 16px;
  position: relative;
`;

const Circle = styled.div`
  width: inherit;
  height: inherit;

  background: #FAA446;
  border-radius: 100%;
`;

const Symbol = styled.img`
  position: absolute;
  right: 0.2em;
  top: 0.15em;
`;

const Station = styled.div`
  display: flex;
  margin: 15px 0;
`;

const Text = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;
`;

const LocationCard: React.FC = () => {
  const { yuker } = useYuker();
  const { apartment } = yuker;

  return (
    <Card>
      <Image src={image} />
      <Description>
        <h3>{apartment?.name}</h3>
        <Text>Quarto {apartment?.room}</Text>
        <Station>
          <Icon>
            <Circle />
            <Symbol src={symbol} />
          </Icon>
          <Text>
            {apartment?.subwayStation.name} <span>{apartment?.subwayStation.distance}</span>
          </Text>
        </Station>
        <h3>{toCurrency(apartment?.price as number)}</h3>
      </Description>
    </Card>
  );
};

export default LocationCard;
