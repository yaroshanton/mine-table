import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import './Home.scss';

const Home = props => {
  const { data } = props;

  const handlerRenderHeaders = data => {
    const arrayOfCell = [];
    for (let key in data[0]) {
      if (typeof data[0][key] === 'object') {
        for (let attachedKey in data[0][key]) {
          if (typeof data[0][key][attachedKey] === 'object') {
            for (let attachedSecondValue in data[0][key][attachedKey]) {
              arrayOfCell.push(
                <TableCell align="left">{attachedSecondValue}</TableCell>,
              );
            }
          } else {
            arrayOfCell.push(<TableCell align="left">{attachedKey}</TableCell>);
          }
        }
      } else {
        arrayOfCell.push(<TableCell align="left">{key}</TableCell>);
      }
    }
    return arrayOfCell;
  };

  const handlerRenderCell = item => {
    let arrayOfCell = [];

    for (let key in item) {
      if (typeof item[key] === 'object') {
        for (let attachedValue in item[key]) {
          if (typeof item[key][attachedValue] === 'object') {
            for (let attachedSecondValue in item[key][attachedValue]) {
              arrayOfCell.push(
                <TableCell align="left">
                  {item[key][attachedValue][attachedSecondValue]}
                </TableCell>,
              );
            }
          } else {
            arrayOfCell.push(
              <TableCell align="left">{item[key][attachedValue]}</TableCell>,
            );
          }
        }
      } else {
        arrayOfCell.push(<TableCell align="left">{item[key]}</TableCell>);
      }
    }

    return arrayOfCell;
  };

  return (
    <div className="wrapper">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: '90vw' }} aria-label="customized table">
          <TableHead>
            <TableRow>{handlerRenderHeaders(data)}</TableRow>
          </TableHead>
          <TableBody>
            {data.map(item => (
              <TableRow>{handlerRenderCell(item)}</TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

Home.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Home;
