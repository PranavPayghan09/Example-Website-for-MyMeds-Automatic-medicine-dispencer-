
import React, { useState, useMemo } from 'react';
import { UserRole } from './types';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import DeviceList from './components/DeviceList';
import Analysis from './components/Analysis';
import HistoryLogs from './components/HistoryLogs';
import DeviceSettings from './components/DeviceSettings';
import Alerts from './components/Alerts';
import Login from './components/Login';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<{ name: string; role: UserRole } | null>(null);
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleLogin = (name: string, role: UserRole) => {
    setCurrentUser({ name, role });
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setActiveTab('dashboard');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard role={currentUser?.role || UserRole.PATIENT} />;
      case 'devices':
        return <DeviceList />;
      case 'analysis':
        return <Analysis />;
      case 'history':
        return <HistoryLogs />;
      case 'settings':
        return <DeviceSettings role={currentUser?.role || UserRole.PATIENT} />;
      case 'alerts':
        return <Alerts />;
      default:
        return <Dashboard role={currentUser?.role || UserRole.PATIENT} />;
    }
  };

  if (!currentUser) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onLogout={handleLogout} 
        user={currentUser}
      />
      
      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>
            <p className="text-slate-500 text-sm">Welcome back, {currentUser.name}</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="hidden md:flex flex-col text-right">
                <span className="text-xs font-semibold uppercase text-slate-400">Current Role</span>
                <span className={`text-sm font-bold ${currentUser.role === UserRole.CAREGIVER ? 'text-indigo-600' : 'text-emerald-600'}`}>
                  {currentUser.role}
                </span>
             </div>
             <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 border border-slate-300">
                {currentUser.name.charAt(0)}
             </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
