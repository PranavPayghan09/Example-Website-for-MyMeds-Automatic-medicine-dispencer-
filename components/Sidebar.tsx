
import React from 'react';
import { NAV_ITEMS } from '../constants';
import { UserRole } from '../types';
import { LogOut, Pill } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
  user: { name: string; role: UserRole };
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, onLogout, user }) => {
  return (
    <div className="w-64 bg-white border-r border-slate-200 flex flex-col h-full shrink-0">
      <div className="p-6 flex items-center gap-2">
        <div className="bg-indigo-600 p-2 rounded-lg text-white">
          <Pill size={24} />
        </div>
        <span className="text-xl font-bold text-slate-800 tracking-tight">MyMeds</span>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {NAV_ITEMS.map((item) => {
          // Hide settings from patients for safety as per requirements
          if (item.id === 'settings' && user.role === UserRole.PATIENT) return null;
          
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive 
                  ? 'bg-indigo-50 text-indigo-700' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className={isActive ? 'text-indigo-600' : 'text-slate-400'}>
                {item.icon}
              </span>
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-200">
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
        >
          <LogOut size={20} />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
