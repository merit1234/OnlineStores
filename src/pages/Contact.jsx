import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 700); // short delay
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Contact Us</h2>
      <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-2">
        You can reach us via email at:  
        <a
          href="mailto:ifeanyistanley82@gmail.com"
          className="text-orange-600 hover:underline"
        >
          <strong> Ukwomaekemo@@gmail.com</strong>
        </a>
      </p>
      <p className="text-gray-700 dark:text-gray-200">
      Need help? Call: <strong>+234-802-130-1305</strong>
      </p>
    </div>
  );
};

export default Contact;