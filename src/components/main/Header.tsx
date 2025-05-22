export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="flex justify-between items-center px-24 md:px-40 py-6">
        <h1 className="text-xl font-bold">RocketInsight</h1>
        <nav>
          <a href="#" className="text-xl font-bold">
            Login
          </a>
        </nav>
      </div>
    </header>
  );
}
