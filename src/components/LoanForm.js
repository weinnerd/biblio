import React, { useState, useEffect } from 'react';
import './LoanForm.css';

const LoanForm = ({ addLoan, selectedLoan, updateLoan }) => {
  const [loan, setLoan] = useState({ id: null, name: '', lastName: '', title: '', author: '', publisher: '', year: '' });

  useEffect(() => {
    if (selectedLoan) setLoan(selectedLoan);
  }, [selectedLoan]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoan({ ...loan, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loan.id) {
      updateLoan(loan);
    } else {
      addLoan(loan);
    }
    setLoan({ id: null, name: '', lastName: '', title: '', author: '', publisher: '', year: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="loan-form">
      <input type="text" name="name" value={loan.name} onChange={handleChange} placeholder="Nombre" required />
      <input type="text" name="lastName" value={loan.lastName} onChange={handleChange} placeholder="Apellido" required />
      <input type="text" name="title" value={loan.title} onChange={handleChange} placeholder="Título del libro" required />
      <input type="text" name="author" value={loan.author} onChange={handleChange} placeholder="Autor del libro" required />
      <input type="text" name="publisher" value={loan.publisher} onChange={handleChange} placeholder="Editorial" required />
      <input type="text" name="year" value={loan.year} onChange={handleChange} placeholder="Año" required />
      <button type="submit">{loan.id ? 'Actualizar' : 'Agregar'}</button>
    </form>
  );
};

export default LoanForm;
