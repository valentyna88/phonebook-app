import { Suspense } from 'react';
import AppBar from './AppBar/AppBar';
import { Toaster } from 'react-hot-toast';

const Layout = ({ children }) => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            padding: '16px',
            marginTop: '80px',
          },
        }}
      />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};

export default Layout;
