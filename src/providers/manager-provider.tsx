import { createContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { INetworkManager } from '../utils/network-manager/manager.types';
import { IAdapter } from '../utils/network-manager/adapters';
import { NetworkManager } from '../utils/network-manager/manager';

type ManagerProviderProps = {
  children: ReactNode;
  adapter: IAdapter;
};

export type ManagerContextType = {
  manager: INetworkManager;
  adapter: IAdapter;
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
};

export const ManagerContext = createContext<ManagerContextType | undefined>(
  undefined,
);

export function ManagerProvider({ children, adapter }: ManagerProviderProps) {
  if (!adapter) {
    throw new Error('adapter is not defined');
  }

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const value: ManagerContextType = useMemo(() => {
    const manager = new NetworkManager();
    manager.switchAdapter(adapter);

    return {
      manager,
      adapter: manager.getAdapter(),
      isAuthenticated,
      setIsAuthenticated,
    };
  }, [adapter, isAuthenticated]);

  return (
    <ManagerContext.Provider value={value}>{children}</ManagerContext.Provider>
  );
}
