import { useState, useEffect } from 'react';
import HomeworkSearchForm from '../components/HomeworkSearchForm';
import HomeworkTableRow from '../components/HomeworkTableRow';

export default function HomeworkSearch() {
  const [homeworks, setHomeworks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchHomeworks = async (filters = {}) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/homework/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...filters,
          page: currentPage,
          limit: 10
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch homeworks');
      }

      const data = await response.json();
      setHomeworks(data.homeworks);
      setTotalPages(data.totalPages);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHomeworks();
  }, [currentPage]);

  const handleSearch = (filters) => {
    setCurrentPage(1);
    fetchHomeworks(filters);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-background dark:bg-background flex justify-between items-center px-container-margin py-4 w-full docked full-width top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjAvkq_L0tO8f6B9IJx1WZt_g5CY1G4ZbUphsQrJLQwCdsaEDxodeFdaXzywo1ol4wqlzknm9e0wNndF---xubA_AUEX2jtVb1bzb9zfnnAT0lPvfpt_qXrn-pkocgu5ZKO4aOOuIApV7f4FMaNkT9Gpgkq2makZjP40fA4kcZWybywGOtT11Xsh_KL5xjF4WX9XLkl6pd-zffBNBAUp-B50RDxJiNH__l_2AVBjrPsQaQuwnxL-G4VA"
              alt="Student profile"
            />
          </div>
          <h1 className="font-headline-md-mobile text-headline-md-mobile font-bold text-primary dark:text-inverse-primary">Good morning, Student</h1>
        </div>
        <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors active:scale-95 transition-transform">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </header>

      <HomeworkSearchForm onSearch={handleSearch} />

      <section className="mt-8 px-container-margin">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-surface-container-lowest rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-surface-container-low text-on-surface-variant">
                <th className="py-3 px-6 text-left font-label-sm text-label-sm font-semibold">Homework</th>
                <th className="py-3 px-6 text-left font-label-sm text-label-sm font-semibold">Status</th>
                <th className="py-3 px-6 text-left font-label-sm text-label-sm font-semibold">Due Date</th>
                <th className="py-3 px-6 text-left font-label-sm text-label-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="4" className="py-4 px-6 text-center">
                    <div className="flex justify-center items-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    </div>
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan="4" className="py-4 px-6 text-center text-error">
                    {error}
                  </td>
                </tr>
              ) : homeworks.length === 0 ? (
                <tr>
                  <td colSpan="4" className="py-4 px-6 text-center text-on-surface-variant">
                    No homeworks found
                  </td>
                </tr>
              ) : (
                homeworks.map((homework) => (
                  <HomeworkTableRow key={homework.id} homework={homework} />
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-6">
          <nav className="inline-flex rounded-md shadow-sm" aria-label="Pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-outline-variant bg-surface-container-low text-on-surface hover:bg-surface-container-high disabled:opacity-50"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`relative inline-flex items-center px-4 py-2 border border-outline-variant text-on-surface ${currentPage === page ? 'bg-primary text-on-primary' : 'bg-surface-container-low hover:bg-surface-container-high'}`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="relative inline-flex items-center px-4 py-2 rounded-r-md border border-outline-variant bg-surface-container-low text-on-surface hover:bg-surface-container-high disabled:opacity-50"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </nav>
        </div>
      </section>
    </div>
  );
}
