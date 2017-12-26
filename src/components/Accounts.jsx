import React from 'react';
import PropTypes from 'prop-types';

const Blocks = ({accounts}) => (
  <div>
    {accounts.map(account => (
      <div key={account}>{account}</div>
    ))}
  </div>
);

Blocks.propTypes = {
  accounts: PropTypes.array.isRequired,
};

export default Blocks;
