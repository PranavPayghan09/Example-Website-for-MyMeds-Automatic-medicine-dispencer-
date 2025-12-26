
import React, { useState } from 'react';
import { UserRole } from '../types';
import { Settings2, ShieldCheck, BellRing, Save, Trash2, Plus, Volume2, Lock } from 'lucide-react';

interface DeviceSettingsProps {
  role: UserRole;
}

const DeviceSettings: React.FC<DeviceSettingsProps> = ({ role }) => {
  const [activeBuzzer, setActiveBuzzer] = useState(true);
  const [manualDispense, setManualDispense] = useState(false);
  const [childLock, setChildLock] = useState(true);

  if (role === UserRole.PATIENT) {
    return (
      <div className="p-12 text-center">
        <ShieldCheck size={64} className="mx-auto text-amber-500 mb-4" />
        <h2 className="text-xl font-bold text-slate-800">Access Restricted</h2>
        <p className="text-slate-500 max-w-md mx-auto mt-2">
          For safety reasons, only authorized caregivers can modify dispensing schedules and device hardware settings.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Schedule Configuration */}
      <div className="lg:col-span-2 space-y-6">
        <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex justify-between items-center">
            <h2 className="font-semibold text-slate-800 flex items-center gap-2">
              <Settings2 size={18} className="text-indigo-600" />
              Medication Schedule
            </h2>
            <button className="flex items-center gap-1.5 text-indigo-600 text-sm font-bold bg-indigo-50 px-3 py-1.5 rounded-lg hover:bg-indigo-100 transition-colors">
              <Plus size={16} /> Add Dose
            </button>
          </div>
          
          <div className="p-6 space-y-4">
             {[
               { time: '08:00', med: 'Aspirin', qty: 1, days: 'Daily' },
               { time: '13:00', med: 'Metformin', qty: 1, days: 'Daily' },
               { time: '20:00', med: 'Lisinopril', qty: 1, days: 'Mon, Wed, Fri' },
             ].map((dose, i) => (
               <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 p-4 border border-slate-100 rounded-xl bg-slate-50">
                 <div className="flex-1">
                   <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg font-bold text-slate-800">{dose.time}</span>
                      <span className="text-xs font-medium text-slate-400">| {dose.days}</span>
                   </div>
                   <p className="text-sm font-medium text-slate-600">{dose.med} • {dose.qty} Pill(s)</p>
                 </div>
                 <div className="flex items-center gap-2">
                    <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-white rounded-lg transition-all border border-transparent hover:border-slate-200">
                      <Settings2 size={18} />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-white rounded-lg transition-all border border-transparent hover:border-slate-200">
                      <Trash2 size={18} />
                    </button>
                 </div>
               </div>
             ))}
          </div>
        </section>

        <div className="flex justify-end">
           <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 active:scale-95 transition-all">
             <Save size={18} /> Sync with Device
           </button>
        </div>
      </div>

      {/* Hardware Safety & Alarms */}
      <div className="space-y-6">
        <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100">
            <h2 className="font-semibold text-slate-800 flex items-center gap-2">
              <ShieldCheck size={18} className="text-indigo-600" />
              Safety & Controls
            </h2>
          </div>
          <div className="p-5 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                  <Volume2 size={20} />
                </div>
                <div>
                   <p className="text-sm font-bold text-slate-800">Buzzer Alarm</p>
                   <p className="text-xs text-slate-500">Audio reminder on device</p>
                </div>
              </div>
              <button 
                onClick={() => setActiveBuzzer(!activeBuzzer)}
                className={`w-11 h-6 rounded-full transition-colors relative ${activeBuzzer ? 'bg-indigo-600' : 'bg-slate-200'}`}
              >
                <div className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${activeBuzzer ? 'translate-x-5' : ''}`} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                  <Lock size={20} />
                </div>
                <div>
                   <p className="text-sm font-bold text-slate-800">Child Lock</p>
                   <p className="text-xs text-slate-500">Prevents manual tampering</p>
                </div>
              </div>
              <button 
                onClick={() => setChildLock(!childLock)}
                className={`w-11 h-6 rounded-full transition-colors relative ${childLock ? 'bg-indigo-600' : 'bg-slate-200'}`}
              >
                <div className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${childLock ? 'translate-x-5' : ''}`} />
              </button>
            </div>

            <div className="pt-4 border-t border-slate-100">
               <button 
                 onClick={() => setManualDispense(!manualDispense)}
                 className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all border ${
                   manualDispense 
                     ? 'bg-red-50 text-red-600 border-red-200 shadow-inner' 
                     : 'bg-white text-slate-700 border-slate-200 shadow-sm hover:border-slate-300'
                 }`}
               >
                 <BellRing size={18} /> 
                 {manualDispense ? 'Stopping Manual Access...' : 'Allow Manual Dispense'}
               </button>
               <p className="text-[10px] text-center text-slate-400 mt-2">
                 *Emergency override is always enabled via physical button
               </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DeviceSettings;
