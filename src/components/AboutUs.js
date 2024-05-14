import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importar Link

function AboutUs() {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setEmployees(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Quiénes Somos</h1>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>
                        <Link to={`/about-us/${employee.id}`}>{employee.name}</Link> - {employee.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AboutUs;
