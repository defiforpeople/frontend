import { createContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import {
  INetworkManager,
  Profile,
} from '../utils/network-manager/manager.types';
import { IAdapter } from '../utils/network-manager/adapters';

type AdapterProviderProps = {
  children: ReactNode;
  manager: INetworkManager;
};

export type AdapterContextType = {
  adapter: IAdapter;
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  profile: Profile;
  setProfile: (p: Profile) => void;
};

export const AdapterContext = createContext<AdapterContextType | undefined>(
  undefined,
);

export function AdapterProvider({ children, manager }: AdapterProviderProps) {
  if (!manager) {
    throw new Error('manager is not defined');
  }

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [profile, setProfile] = useState({
    address: '',
    ens: '',
  } as Profile);

  const value: AdapterContextType = useMemo(() => {
    return {
      adapter: manager.getAdapter(),
      isAuthenticated,
      setIsAuthenticated,
      profile,
      setProfile,
    };
  }, [isAuthenticated, profile, manager]);

  return (
    <AdapterContext.Provider value={value}>{children}</AdapterContext.Provider>
  );
}
