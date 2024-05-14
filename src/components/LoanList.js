import React from 'react';
import './LoanList.css';


const LoanList = ({ loans, deleteLoan, selectLoan }) => {
  return (
    <ul className="loan-list">
      {loans.map(loan => (
        <li key={loan.id}>
          {loan.name} {loan.lastName} ha solicitado "{loan.title}" de {loan.author} ({loan.publisher}, {loan.year})
          <button onClick={() => deleteLoan(loan.id)}>Eliminar</button>
          <button onClick={() => selectLoan(loan)}>Editar</button>
        </li>
      ))}
    </ul>
  );
};

export default LoanList;
