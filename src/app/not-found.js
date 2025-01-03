'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /products after 3 seconds
    const timer = setTimeout(() => {
      router.push('/products');
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, [router]);

  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">Page Not Found</h1>
      <p>The page you are looking for does not exist. Redirecting to the product list...</p>
    </div>
  );
};

export default NotFoundPage;