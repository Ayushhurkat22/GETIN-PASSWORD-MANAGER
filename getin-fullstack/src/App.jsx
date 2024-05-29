/* eslint-disable no-unused-vars */
// export default function App() {
//   return (
//     <>
      
//     </>
//   )
// }

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/register');
  }, [navigate]);

  return null;
}
