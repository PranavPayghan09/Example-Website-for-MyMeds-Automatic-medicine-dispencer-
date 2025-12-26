
import React from 'react';
import { MOCK_LOGS } from '../constants';
import { Search, Download, Filter } from 'lucide-react';

const HistoryLogs: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search logs by medication or device ID..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">
            <Filter size={16} /> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg text-sm font-medium text-white hover:bg-slate-900 shadow-sm">
            <Download size={16} /> Export CSV
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 text-slate-500 text-xs font-bold uppercase tracking-wider">
              <th className="px-6 py-4">Timestamp</th>
              <th className="px-6 py-4">Medication</th>
              <th className="px-6 py-4">Action</th>
              <th className="px-6 py-4">Device ID</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {MOCK_LOGS.map((log) => (
              <tr key={log.id} className="hover:bg-slate-50/80 transition-colors">
                <td className="px-6 py-4 text-slate-600 font-medium">{log.timestamp}</td>
                <td className="px-6 py-4 text-slate-900 font-bold">{log.medicationName}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${
                    log.action === 'Dispensed' ? 'bg-emerald-100 text-emerald-700' : 
                    log.action === 'Missed' ? 'bg-red-100 text-red-700' : 'bg-indigo-100 text-indigo-700'
                  }`}>
                    {log.action}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-500 font-mono">{log.deviceId}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Verified
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
         <p className="text-xs text-slate-500">Showing 3 of 152 total entries</p>
         <div className="flex gap-2">
            <button className="px-3 py-1 border border-slate-200 rounded bg-white text-xs font-bold disabled:opacity-50" disabled>Prev</button>
            <button className="px-3 py-1 border border-slate-200 rounded bg-white text-xs font-bold">Next</button>
         </div>
      </div>
    </div>
  );
};

export default HistoryLogs;
