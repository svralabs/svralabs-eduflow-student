export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">EduFlow</h3>
            <p className="mt-2 text-sm text-gray-300">Empowering students through technology</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-white">Contact Us</a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">&copy; {new Date().getFullYear()} EduFlow. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white">
              <span className="sr-only">Globe</span>
              <span className="material-symbols-outlined">facebook</span>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <span className="sr-only">Globe</span>
              <span className="material-symbols-outlined">twitter</span>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <span className="sr-only">Globe</span>
              <span className="material-symbols-outlined">instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
