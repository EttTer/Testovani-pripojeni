import React, { useEffect, useState } from 'react';


const Offline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const handleOffline = () => {
    setIsOnline(false);
  };

  useEffect(() => {
    console.log('mounted');

    window.addEventListener('offline', handleOffline);

    return () => {
      console.log('unmounted');
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) {
    return (
      <p>Všechno v pořádku</p>
    )
  };

  return (
    <p>Jste offline!</p>
  );
};

export default Offline;


/* Kod při unmountu komponenty
import React, { useEffect, useState } from 'react';

const Offline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    console.log('mounted');
    
    return () => {
      console.log('unmounted');
      // Tady dám  kód, který se má spustit při unmountu komponenty
    };
  });

  if (isOnline) {
    return (
      <p>Všechno v pořádku</p>
    )
  };

  return (
    <p>Jste offline!</p>
  );
};

export default Offline;*/


/* Dolněný kod o poslední možnost přejití online import React, { useEffect, useState } from 'react';

const Offline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const handleOffline = () => {
    setIsOnline(false);
  };

  const handleOnline = () => {
    setIsOnline(true);
  };

  useEffect(() => {
    console.log('mounted');

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);

    return () => {
      console.log('unmounted');
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  if (isOnline) {
    return (
      <p>Všechno v pořádku</p>
    )
  };

  return (
    <p>Jste offline!</p>
  );
};

export default Offline;*/