import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import styled from 'styled-components';
import { Heart } from '../assets';
import { MDBContainer} from 'mdb-react-ui-kit';

const StyledTrack = styled.div`
  color: #DC2626;

  .splide__track {
    background: none;
    padding-bottom: 3rem; 
  }
`;

const StyledArrows = styled.div`
  .splide__arrow {
    background: #fff;  
    border-radius: 50%;

    &:hover {
      background: #555;
    }
  }

  @media only screen and (max-width: 600px){
    .splide__arrow {
      display: none;
    }
  }

  /* .splide__arrow--prev {
    
  }

  .splide__arrow--next {

  } */
`;
const StyledArrowsBytes = styled(StyledArrows)`
  border-color: #DC2626 !important;
`;
const SBytesImg = styled.img`
  width: 15rem;
`;
const Buttons = styled(MDBContainer)`

`;
const Card = styled.div`
  background: #2a3442;
  margin: 1rem;
  margin-bottom: 0%;
  padding: 1rem;
  padding-top: 0%;
  border-top: 5px solid #DC2626;
  border-radius: 15px;

  &:hover{
    background: #2f3846;
    border-color: #41e680;
  }

  &:hover ${Buttons} {
    visibility: normal !important;
  }
`;
const Price = styled.p`
  color: #41e680;
`;
const HeartDiv = styled.div`
  background: #DC2626;
  transition: background 0.3s ease-in-out;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;

  &:hover{
    background: #41e680;
  }
`;
const CartDiv = styled.div`
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
  background: #2a3442;
  color: #fff;

  &:hover{
    background: #f7dbdb !important;
    color: #2a3442;
  }
`;
const Name = styled.h4`
  color: #41e680;
`;
const SbytesSlide = styled(SplideSlide)`
  &:hover ${Buttons}{
    visibility: hidden;
  }
`;

function SlideCard({ laptops }) {
  return (
    <StyledTrack className='mt-5 mb-5 ps-lg-5 pe-lg-5 ps-3 pe-3 d-flex flex-column justify-content-center'>
        <h2 className='text-light'>{laptops[0].title}</h2>
      <StyledArrowsBytes className='border-top border-3 mt-2 pt-5'>
        <Splide
          options={{
            type: 'loop',
            perPage: 4,
            autoplay: true,
            arrows: true,
            breakpoints: {
              1300: {
                perPage: 3,
              },
              768: {
                perPage: 2,
              },
              600: {
                perPage: 1,
              },
            },
          }}
        className='marghin-top: 5px'
        >
          {laptops.map((laptop, index) => (
            <SbytesSlide key={index}>
              <Card className="laptop-card text-light d-flex flex-column align-items-center justify-content-center text-center ps-lg-5 pe-lg-5 ps-md-3 pe-md-3">
                <SBytesImg src={laptop.img} />
                <Name className='mb-3'>{laptop.name}</Name>
                <p>{laptop.description}</p>
                <Price>Price: ${laptop.price}</Price>
              </Card>
              <Buttons fluid className='d-flex ps-3 pe-3 mt-3'>
                <HeartDiv className='w-25 d-flex align-items-center justify-content-center pt-3 pb-3' type='button' id='addToWish'><img src={ Heart } /></HeartDiv>
                <CartDiv className='w-75 d-flex align-items-center justify-content-center pt-3 pb-3' type='button' id='addToCart'>Add to Cart</CartDiv>
              </Buttons>
            </SbytesSlide>
          ))}
        </Splide>
      </StyledArrowsBytes>
    </StyledTrack>
  )
}

export default SlideCard