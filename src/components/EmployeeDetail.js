import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EmployeeDetail() {
    const { employeeId } = useParams();
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${employeeId}`)
            .then(response => response.json())
            .then(data => setEmployee(data));
    }, [employeeId]);

    if (!employee) return <div>Loading...</div>;

    return (
        <div>
            <h1>{employee.name}</h1>
            <p>Email: {employee.email}</p>
            <p>Phone: {employee.phone}</p>
        </div>
    );
}

export default EmployeeDetail;
