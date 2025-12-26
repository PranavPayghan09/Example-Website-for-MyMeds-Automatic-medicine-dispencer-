
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { TrendingUp, Award, Calendar } from 'lucide-react';

const DATA = [
  { day: 'Mon', taken: 3, missed: 0 },
  { day: 'Tue', taken: 2, missed: 1 },
  { day: 'Wed', taken: 3, missed: 0 },
  { day: 'Thu', taken: 3, missed: 0 },
  { day: 'Fri', taken: 1, missed: 2 },
  { day: 'Sat', taken: 3, missed: 0 },
  { day: 'Sun', taken: 3, missed: 0 },
];

const PIE_DATA = [
  { name: 'Taken', value: 18, color: '#10b981' },
  { name: 'Missed', value: 4, color: '#ef4444' },
];

const Analysis: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-semibold text-slate-800 flex items-center gap-2">
              <Calendar size={18} className="text-indigo-600" />
              Weekly Compliance Trend
            </h2>
            <div className="flex gap-4 text-xs font-medium">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 bg-indigo-500 rounded-sm" /> Taken
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 bg-slate-300 rounded-sm" /> Missed
              </div>
            </div>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <Tooltip 
                   cursor={{ fill: '#f8fafc' }}
                   contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="taken" stackId="a" fill="#6366f1" radius={[0, 0, 0, 0]} />
                <Bar dataKey="missed" stackId="a" fill="#e2e8f0" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center">
           <h2 className="font-semibold text-slate-800 mb-6">Overall Adherence</h2>
           <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={PIE_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {PIE_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
           </div>
           <div className="mt-4">
              <p className="text-3xl font-bold text-slate-800">82%</p>
              <p className="text-sm text-slate-500">Compliance Rate</p>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-xl flex items-start gap-4">
           <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
             <TrendingUp size={24} />
           </div>
           <div>
              <h3 className="font-bold text-emerald-900 mb-1">Consistency Improving</h3>
              <p className="text-sm text-emerald-800 opacity-80 leading-relaxed">
                Patient's morning dose adherence has improved by 15% since last month. Keep up the consistent schedule!
              </p>
           </div>
        </div>

        <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-xl flex items-start gap-4">
           <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center shrink-0">
             <Award size={24} />
           </div>
           <div>
              <h3 className="font-bold text-indigo-900 mb-1">Weekly Goal Reached</h3>
              <p className="text-sm text-indigo-800 opacity-80 leading-relaxed">
                4 days of 100% adherence this week. The system will continue to monitor the night-time doses which show minor delays.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
