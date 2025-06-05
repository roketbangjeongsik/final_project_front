import { useUser } from '../../hooks/useUser';

const Header = () => {
  const { user, loading, logout } = useUser();

  const handleLogin = () => {
    window.location.href = 'http://localhost:8080/oauth2/authorization/github';
  };

  if (loading) return null;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="flex justify-between items-center px-24 md:px-40 py-6">
        <h1 className="text-xl font-bold">RocketInsight</h1>
        <nav>
          {user ? (
            <div className="flex items-center gap-2">
              <img src={user.avatar_url} alt="avatar" className="w-8 h-8 rounded-full" />
              <span className="text-lg font-semibold">{user.name || user.login}님 환영합니다!</span>
              <button onClick={logout} className="text-xl font-semibold ml-2 px-3 py-1">
                Logout
              </button>
            </div>
          ) : (
            <button onClick={handleLogin} className="text-xl font-semibold">
              Login
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};
export default Header;
