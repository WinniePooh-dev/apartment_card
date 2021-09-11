import React, {useState} from 'react';
import {Heart} from 'react-feather';
import styled from 'styled-components';
import {ApartmentData} from '../api';
import {Colors} from '../lib/colors';

export const ApartmentCard = ({price, square, img}: ApartmentData) => {
  const [like, setLike] = useState<boolean>();
  return (
    <Figure>
      <IMG src={img} alt={'None'} />
      <Figcaption>
        <Span>{price}&#8381;</Span>
        <Span>{square}&#13217;</Span>
        <StyledHeart like={like} onClick={() => setLike(prevState => !prevState)}>
          <Heart fill={(!!like && Colors.activeColor) || undefined} />
        </StyledHeart>
      </Figcaption>
    </Figure>
  );
};

const Figure = styled.figure`
  max-width: 400px;
  background: ${p => p.theme.reverseColor};
  border-radius: 10px;
  overflow: hidden;
`;

const Figcaption = styled.figcaption`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${p => p.theme.textColor};
`;

const IMG = styled.img`
  width: 100%;
`;

const Span = styled.span`
  margin: 0 1rem;
`;

const StyledHeart = styled.span<{like?: boolean}>`
  margin: 0 1rem;
  cursor: pointer;
  color: ${p => p.like && Colors.activeColor};

  &:active {
    transform: scale(0.9);
    transition: 0.2s;
  }
`;
