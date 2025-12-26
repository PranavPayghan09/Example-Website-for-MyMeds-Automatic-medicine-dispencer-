
import React from 'react';
import { LayoutDashboard, Settings, BarChart3, History, Bell, Tablet, User } from 'lucide-react';
import { Medication, Device, LogEntry, Alert, DeviceStatus } from './types';

export const MOCK_MEDICATIONS: Medication[] = [
  { id: '1', name: 'Aspirin', dosage: '81mg', time: '08:00 AM', pillCount: 1, status: 'taken' },
  { id: '2', name: 'Metformin', dosage: '500mg', time: '01:00 PM', pillCount: 1, status: 'upcoming' },
  { id: '3', name: 'Lisinopril', dosage: '10mg', time: '08:00 PM', pillCount: 1, status: 'upcoming' },
];

export const MOCK_DEVICES: Device[] = [
  { id: 'DEV-1024', name: 'Home Dispenser - Main', status: DeviceStatus.ONLINE, battery: 85, pillsRemaining: 12 },
  { id: 'DEV-2048', name: 'Bedroom Dispenser', status: DeviceStatus.OFFLINE, battery: 12, pillsRemaining: 4 },
];

export const MOCK_LOGS: LogEntry[] = [
  { id: 'L1', timestamp: '2023-10-27 08:02:15', medicationName: 'Aspirin', action: 'Dispensed', deviceId: 'DEV-1024' },
  { id: 'L2', timestamp: '2023-10-26 20:00:10', medicationName: 'Lisinopril', action: 'Dispensed', deviceId: 'DEV-1024' },
  { id: 'L3', timestamp: '2023-10-26 13:00:00', medicationName: 'Metformin', action: 'Missed', deviceId: 'DEV-1024' },
];

export const MOCK_ALERTS: Alert[] = [
  { id: 'A1', type: 'MISSED_DOSE', message: 'Metformin dose missed at 1:00 PM', timestamp: '2 hours ago', severity: 'high' },
  { id: 'A2', type: 'LOW_STOCK', message: 'Pill stock low in Bedroom Dispenser', timestamp: '5 hours ago', severity: 'medium' },
];

export const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
  { id: 'devices', label: 'Devices', icon: <Tablet size={20} /> },
  { id: 'analysis', label: 'Analysis', icon: <BarChart3 size={20} /> },
  { id: 'history', label: 'Logs & History', icon: <History size={20} /> },
  { id: 'settings', label: 'Device Settings', icon: <Settings size={20} /> },
  { id: 'alerts', label: 'Alerts', icon: <Bell size={20} /> },
];
