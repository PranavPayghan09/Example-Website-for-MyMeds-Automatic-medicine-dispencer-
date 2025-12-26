
import React from 'react';
import { UserRole, DeviceStatus } from '../types';
import { MOCK_MEDICATIONS, MOCK_DEVICES, MOCK_ALERTS } from '../constants';
import { CheckCircle2, Circle, AlertCircle, Wifi, Battery, Clock, ArrowRight } from 'lucide-react';

interface DashboardProps {
  role: UserRole;
}

const Dashboard: React.FC<DashboardProps> = ({ role }) => {
  const onlineDevices = MOCK_DEVICES.filter(d => d.status === DeviceStatus.ONLINE).length;
  const takenPills = MOCK_MEDICATIONS.filter(m => m.status === 'taken').length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Stat Cards */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
          <Wifi size={24} />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-500">Device Status</p>
          <p className="text-xl font-bold text-slate-800">{onlineDevices} Online</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
          <CheckCircle2 size={24} />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-500">Pills Taken (Today)</p>
          <p className="text-xl font-bold text-slate-800">{takenPills} / {MOCK_MEDICATIONS.length}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center">
          <AlertCircle size={24} />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-500">Active Alerts</p>
          <p className="text-xl font-bold text-slate-800">{MOCK_ALERTS.length} Pending</p>
        </div>
      </div>

      {/* Main Sections */}
      <div className="md:col-span-2 space-y-6">
        {/* Today's Schedule */}
        <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex justify-between items-center">
            <h2 className="font-semibold text-slate-800 flex items-center gap-2">
              <Clock size={18} className="text-indigo-600" />
              Today's Schedule
            </h2>
            <button className="text-indigo-600 text-sm font-medium hover:underline">View All</button>
          </div>
          <div className="divide-y divide-slate-100">
            {MOCK_MEDICATIONS.map((med) => (
              <div key={med.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                  {med.status === 'taken' ? (
                    <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                  ) : med.status === 'missed' ? (
                    <AlertCircle size={20} className="text-red-500 shrink-0" />
                  ) : (
                    <Circle size={20} className="text-slate-300 shrink-0" />
                  )}
                  <div>
                    <h3 className="font-medium text-slate-800">{med.name}</h3>
                    <p className="text-xs text-slate-500">{med.dosage} • {med.pillCount} pill(s)</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-semibold text-slate-700">{med.time}</span>
                  <div className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ml-2 inline-block ${
                    med.status === 'taken' ? 'bg-emerald-100 text-emerald-700' :
                    med.status === 'missed' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {med.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Smart Insights (Caregiver only) */}
        {role === UserRole.CAREGIVER && (
          <section className="bg-indigo-600 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-xl font-bold mb-2">Smart Analysis Summary</h2>
              <p className="text-indigo-100 text-sm mb-4 leading-relaxed">
                Adherence is at 84% this week. Patient missed the afternoon dose yesterday. 
                Consider enabling the audio buzzer for the 1:00 PM slot.
              </p>
              <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-indigo-50">
                Generate Detailed Report <ArrowRight size={16} />
              </button>
            </div>
            <div className="absolute top-[-20px] right-[-20px] opacity-10">
              <CheckCircle2 size={160} />
            </div>
          </section>
        )}
      </div>

      {/* Sidebar Sections */}
      <div className="space-y-6">
        {/* Device Status */}
        <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100">
            <h2 className="font-semibold text-slate-800">My Devices</h2>
          </div>
          <div className="p-4 space-y-4">
            {MOCK_DEVICES.map(device => (
              <div key={device.id} className="flex flex-col gap-2 p-3 bg-slate-50 rounded-lg border border-slate-100">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-mono font-bold text-slate-400">{device.id}</span>
                  <div className={`flex items-center gap-1.5 text-[10px] font-bold uppercase ${device.status === DeviceStatus.ONLINE ? 'text-emerald-600' : 'text-slate-400'}`}>
                    <div className={`w-2 h-2 rounded-full ${device.status === DeviceStatus.ONLINE ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                    {device.status}
                  </div>
                </div>
                <h3 className="font-semibold text-slate-800 text-sm">{device.name}</h3>
                <div className="flex gap-4 mt-2">
                   <div className="flex items-center gap-1 text-slate-500 text-xs">
                     <Battery size={14} className={device.battery < 20 ? 'text-red-500' : 'text-slate-400'} />
                     {device.battery}%
                   </div>
                   <div className="flex items-center gap-1 text-slate-500 text-xs">
                     <Pill size={14} className="text-slate-400" />
                     {device.pillsRemaining} pills left
                   </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Alerts */}
        <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100">
            <h2 className="font-semibold text-slate-800">Safety Alerts</h2>
          </div>
          <div className="p-4 space-y-3">
            {MOCK_ALERTS.map(alert => (
              <div key={alert.id} className={`p-3 rounded-lg border flex gap-3 ${
                alert.severity === 'high' ? 'bg-red-50 border-red-100 text-red-700' : 'bg-amber-50 border-amber-100 text-amber-700'
              }`}>
                <AlertCircle size={18} className="shrink-0" />
                <div>
                   <p className="text-xs font-bold leading-tight">{alert.message}</p>
                   <p className="text-[10px] opacity-70 mt-1">{alert.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

// Help helper
const Pill = ({ size, className }: { size: number, className: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>
  </svg>
);

export default Dashboard;
