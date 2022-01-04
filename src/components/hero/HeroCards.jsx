

import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'

export const HeroCards = (
         {id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
       characters}
        ) => {
  return (
    <MDBCard style={{ maxWidth: '540px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src={ `assets/${id}.jpg` } className="card-img-top" alt={superhero} fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>{ superhero }</MDBCardTitle>
            <MDBCardText>
            { alter_ego }
            </MDBCardText>
            <MDBCardText>
                          {

                           ( alter_ego !== characters )
                                && <span className="text-muted"> { characters } </span>

                         }
            </MDBCardText>
            <MDBCardText>
                    <small className="text-muted"> { first_appearance } </small>
            </MDBCardText>

            <Link to={ `/hero/${id}` }>
                             Mas..
            </Link>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}
