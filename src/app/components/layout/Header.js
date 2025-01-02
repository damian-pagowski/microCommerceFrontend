import Link from 'next/link';

const Header = () => (
  <header className="p-4 bg-gray-800 text-white">
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link href="/products">Products</Link>
        </li>
        {/* Add other navigation links */}
      </ul>
    </nav>
  </header>
);

export default Header;