import { useEffect, useState } from 'react'

function useNetwork() {
  const [isOnline, setNetwork] = useState(window.navigator.onLine);

  // check if navigator is online
  const updateNetwork = () => {
    setNetwork(window.navigator.onLine);
  };

  // add event listeners to watch for internet connection
  useEffect(() => {
    window.addEventListener('offline', updateNetwork);

    window.addEventListener('online', updateNetwork);

    return () => {
      window.removeEventListener('offline', updateNetwork);

      window.removeEventListener('online', updateNetwork);
    };
  });

  // return status
  return isOnline;
}

export default useNetwork
