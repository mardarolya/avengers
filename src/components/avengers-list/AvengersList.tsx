import React from 'react';
import { AvengerProps } from '../../shared/typings/Avenger.d';
import { Avenger } from '../avenger/Avenger';

import './AvengersList.css';

interface AvengersListProps {
  avengers: AvengerProps[]
}

export const AvengersList = (props: AvengersListProps) => {
  return (
    <div className="avengersList">
      {props.avengers.map(item => <Avenger key={item.name} { ...item }/>)}
    </div>
  );
};