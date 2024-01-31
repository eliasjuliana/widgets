import { useState, useEffect } from 'react';

const DateDisplay = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Actualiza cada segundo

    return () => clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta

  }, []);

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
  };

  const formatTime = (date) => {
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return date.toLocaleTimeString('es-ES', options);
  };

  return (
    <div className='py-4'>
      <p className='font-bold text-2xl'>{formatDate(currentDateTime)}</p>
      <p className='font-bold text-xl'>{formatTime(currentDateTime)}</p>
    </div>
  );
};

export default DateDisplay;


