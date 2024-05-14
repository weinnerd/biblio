import React, { useState } from 'react';
import LoanForm from './LoanForm';
import LoanList from './LoanList';

const Loans = () => {
  const [loans, setLoans] = useState([]);
  const [selectedLoan, setSelectedLoan] = useState(null);

  const addLoan = (loan) => {
    loan.id = loans.length + 1;
    setLoans([...loans, loan]);
  };

  const deleteLoan = (id) => {
    setLoans(loans.filter(loan => loan.id !== id));
  };

  const selectLoan = (loan) => {
    setSelectedLoan(loan);
  };

  const updateLoan = (updatedLoan) => {
    setLoans(loans.map(loan => (loan.id === updatedLoan.id ? updatedLoan : loan)));
    setSelectedLoan(null);
  };

  return (
    <div>
      <h2>Gestión de Préstamos de Libros</h2>
      <LoanForm addLoan={addLoan} selectedLoan={selectedLoan} updateLoan={updateLoan} />
      <LoanList loans={loans} deleteLoan={deleteLoan} selectLoan={selectLoan} />
    </div>
  );
};

export default Loans;
