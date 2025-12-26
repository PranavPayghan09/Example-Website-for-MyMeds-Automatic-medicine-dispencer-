
import React from 'react';
import { UserRole } from '../types';
import { User, Shield, Pill } from 'lucide-react';

interface LoginProps {
  onLogin: (name: string, role: UserRole) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-600 rounded-3xl shadow-2xl shadow-indigo-500/50 text-white mb-6">
            <Pill size={40} />
          </div>
          <h1 className="text-4xl font-black text-white tracking-tight">MyMeds</h1>
          <p className="text-slate-400 mt-2">Smart Medicine Dispenser Dashboard</p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <h2 className="text-xl font-bold text-slate-800 mb-8 text-center">Select your access role</h2>
          
          <div className="grid grid-cols-1 gap-4">
            <button 
              onClick={() => onLogin('John Doe', UserRole.PATIENT)}
              className="flex items-center gap-4 p-5 rounded-2xl border-2 border-slate-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all group text-left"
            >
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <User size={24} />
              </div>
              <div className="flex-1">
                <p className="font-bold text-slate-800">Patient Access</p>
                <p className="text-xs text-slate-500">View schedule and today's summary</p>
              </div>
            </button>

            <button 
              onClick={() => onLogin('Dr. Sarah', UserRole.CAREGIVER)}
              className="flex items-center gap-4 p-5 rounded-2xl border-2 border-slate-100 hover:border-indigo-500 hover:bg-indigo-50 transition-all group text-left"
            >
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Shield size={24} />
              </div>
              <div className="flex-1">
                <p className="font-bold text-slate-800">Caregiver / Doctor</p>
                <p className="text-xs text-slate-500">Full control, settings, and analysis</p>
              </div>
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-100">
             <p className="text-center text-xs text-slate-400 leading-relaxed">
               Secure medical data transmission enabled. This portal is for the MyMeds IoT prototype demonstration.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
