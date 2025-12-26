
import React from 'react';
import { MOCK_ALERTS } from '../constants';
import { AlertTriangle, BellOff, CheckCircle2 } from 'lucide-react';

const Alerts: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
        <h2 className="font-semibold text-slate-800">Recent Notifications</h2>
        <button className="flex items-center gap-2 text-indigo-600 text-sm font-bold hover:underline">
          <CheckCircle2 size={16} /> Mark all as read
        </button>
      </div>

      <div className="space-y-4">
        {MOCK_ALERTS.map(alert => (
          <div key={alert.id} className={`p-5 rounded-xl border flex gap-4 transition-all hover:scale-[1.01] ${
            alert.severity === 'high' ? 'bg-red-50 border-red-200 shadow-red-50/50' : 'bg-amber-50 border-amber-200 shadow-amber-50/50'
          } shadow-lg`}>
            <div className={`p-3 rounded-full shrink-0 ${
              alert.severity === 'high' ? 'bg-red-200 text-red-700' : 'bg-amber-200 text-amber-700'
            }`}>
              <AlertTriangle size={24} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                 <h3 className={`font-bold ${alert.severity === 'high' ? 'text-red-900' : 'text-amber-900'}`}>
                   {alert.type.replace('_', ' ')}
                 </h3>
                 <span className="text-[10px] font-bold text-slate-400 uppercase">{alert.timestamp}</span>
              </div>
              <p className={`text-sm mb-4 leading-relaxed ${alert.severity === 'high' ? 'text-red-800' : 'text-amber-800'}`}>
                {alert.message}
              </p>
              <div className="flex gap-3">
                 <button className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    alert.severity === 'high' ? 'bg-red-600 text-white hover:bg-red-700 shadow-md shadow-red-200' : 'bg-amber-600 text-white hover:bg-amber-700 shadow-md shadow-amber-200'
                 }`}>
                   Take Action
                 </button>
                 <button className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                    alert.severity === 'high' ? 'border-red-200 text-red-600 hover:bg-red-100' : 'border-amber-200 text-amber-600 hover:bg-amber-100'
                 }`}>
                   Dismiss
                 </button>
              </div>
            </div>
          </div>
        ))}

        {MOCK_ALERTS.length === 0 && (
          <div className="py-20 text-center text-slate-400">
             <BellOff size={48} className="mx-auto mb-4 opacity-20" />
             <p className="font-bold">No new alerts</p>
             <p className="text-sm">Patient is following the schedule perfectly!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Alerts;
