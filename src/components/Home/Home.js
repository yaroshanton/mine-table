import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchHomeData } from '../../services/homeApi';
import { updateHome } from '../../redux/actions/home-actions';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
} from '@mui/material';
import './Home.scss';

const Home = props => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const hanldeUpdateData = () => {
    fetchHomeData().then(res => dispatch(updateHome(res.data)));
    setMessage('the data is updated, but the same date comes ;)');
  };
  const { data, children, extra } = props;
  return (
    <div className="wrapper">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell align="left">id</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Street</TableCell>
              <TableCell align="left">City</TableCell>
              <TableCell align="left">Company</TableCell>
              <TableCell align="left">Some</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map(({ id, username, email, address, company }, index) => (
                <TableRow key={index}>
                  <TableCell align="left">{id}</TableCell>
                  <TableCell component="th" scope="row">
                    {children ? children : username}
                  </TableCell>
                  <TableCell align="left">{email}</TableCell>
                  <TableCell align="left">{address.street}</TableCell>
                  <TableCell align="left">{address.city}</TableCell>
                  <TableCell align="left">{company.name}</TableCell>
                  <TableCell align="left">{extra}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        onClick={() => hanldeUpdateData()}
        variant="outlined"
        color="inherit"
      >
        Update
      </Button>
      {message.length > 0 && (
        <Typography align="center" variant="h6" component="h2">
          {message}
        </Typography>
      )}
    </div>
  );
};

Home.defaultProps = {
  extra: 'default props',
};

Home.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Home;
