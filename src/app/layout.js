import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ minHeight: '80vh', padding: '1rem' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}