
import React from 'react';
import { MOCK_DEVICES } from '../constants';
import { DeviceStatus } from '../types';
import { Tablet, Plus, Signal, Battery, MapPin } from 'lucide-react';

const DeviceList: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
           <p className="text-slate-500 text-sm">You have {MOCK_DEVICES.length} dispensers registered to your account.</p>
        </div>
        <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md hover:bg-indigo-700 transition-all">
          <Plus size={18} /> Register New Device
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_DEVICES.map((device) => (
          <div key={device.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className={`absolute top-0 right-0 px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase ${
              device.status === DeviceStatus.ONLINE ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-400'
            }`}>
              {device.status}
            </div>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                <Tablet size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">{device.name}</h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">{device.id}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
               <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-bold uppercase mb-1">
                    <Battery size={12} /> Battery
                  </div>
                  <p className={`text-lg font-bold ${device.battery < 20 ? 'text-red-500' : 'text-slate-700'}`}>
                    {device.battery}%
                  </p>
               </div>
               <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-bold uppercase mb-1">
                    <Signal size={12} /> Connectivity
                  </div>
                  <p className="text-lg font-bold text-slate-700">92ms</p>
               </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
               <MapPin size={14} /> Living Room, 1st Floor
            </div>

            <div className="flex gap-2">
               <button className="flex-1 py-2 bg-indigo-50 text-indigo-600 rounded-lg text-xs font-bold hover:bg-indigo-100 transition-colors">
                  View Detail
               </button>
               <button className="flex-1 py-2 border border-slate-200 text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-50 transition-colors">
                  Ping Device
               </button>
            </div>
          </div>
        ))}

        <button className="border-2 border-dashed border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 text-slate-400 hover:text-indigo-600 hover:border-indigo-300 transition-all group">
           <div className="w-12 h-12 bg-slate-50 group-hover:bg-indigo-50 rounded-full flex items-center justify-center transition-colors">
              <Plus size={24} />
           </div>
           <div className="text-center">
             <p className="font-bold">Add Another</p>
             <p className="text-xs opacity-60">Multiple patients support</p>
           </div>
        </button>
      </div>
    </div>
  );
};

export default DeviceList;
