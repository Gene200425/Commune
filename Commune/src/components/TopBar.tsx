
const TopBar = () => {
  return (
    <div className="hidden md:block border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto flex justify-end items-center gap-8 px-6 py-3 text-sm text-gray-600">

        <span className="cursor-pointer hover:text-blue-900">
          Accessibilité
        </span>

        <span className="cursor-pointer hover:text-blue-900">
          A A A
        </span>

        <span className="cursor-pointer hover:text-blue-900">
          Nous contacter
        </span>

      </div>
    </div>
  );
};

export default TopBar;