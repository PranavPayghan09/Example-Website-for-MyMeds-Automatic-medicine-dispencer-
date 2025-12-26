
export enum UserRole {
  PATIENT = 'PATIENT',
  CAREGIVER = 'CAREGIVER'
}

export enum DeviceStatus {
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE'
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  time: string;
  pillCount: number;
  status: 'taken' | 'missed' | 'upcoming';
}

export interface Device {
  id: string;
  name: string;
  status: DeviceStatus;
  battery: number;
  pillsRemaining: number;
}

export interface LogEntry {
  id: string;
  timestamp: string;
  medicationName: string;
  action: 'Dispensed' | 'Missed' | 'Manual Override';
  deviceId: string;
}

export interface Alert {
  id: string;
  type: 'MISSED_DOSE' | 'LOW_STOCK' | 'DEVICE_OFFLINE' | 'EMERGENCY';
  message: string;
  timestamp: string;
  severity: 'high' | 'medium' | 'low';
}
