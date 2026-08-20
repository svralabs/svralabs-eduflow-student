export default function HomeworkTableRow({ homework }) {
  const statusColors = {
    completed: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    overdue: 'bg-red-100 text-red-800'
  };

  return (
    <tr className="border-b border-outline-variant/30 hover:bg-surface-container-lowest transition-colors">
      <td className="py-4 px-6">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#4900E5] flex items-center justify-center`}>
            <span className="material-symbols-outlined">{homework.icon}</span>
          </div>
          <div>
            <h3 className="font-label-sm text-label-sm text-text-muted">{homework.subject}</h3>
            <p className="font-body-base text-body-base font-bold text-on-background">{homework.title}</p>
          </div>
        </div>
      </td>
      <td className="py-4 px-6">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[homework.status]}`}>
          {homework.status}
        </span>
      </td>
      <td className="py-4 px-6 font-body-base text-body-base text-on-surface-variant">{homework.dueDate}</td>
      <td className="py-4 px-6">
        <button className="text-primary font-label-sm text-label-sm font-semibold">View</button>
      </td>
    </tr>
  );
}
