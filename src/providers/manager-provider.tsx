import { createContext, useMemo } from 'react';
import type { ReactNode } from 'react';
import { INetworkManager } from '../utils/network-manager/manager.types';
import { IAdapter } from '../utils/network-manager/adapters';
import { NetworkManager } from '../utils/network-manager/manager';
import { AdapterProvider } from './adapter-provider';

type ManagerProviderProps = {
  children: ReactNode;
  adapter: IAdapter;
};

export type ManagerContextType = {
  manager: INetworkManager;
};

export const ManagerContext = createContext<ManagerContextType | undefined>(
  undefined,
);

export function ManagerProvider({ children, adapter }: ManagerProviderProps) {
  if (!adapter) {
    throw new Error('adapter is not defined');
  }

  const value: ManagerContextType = useMemo(() => {
    const manager = new NetworkManager();
    manager.switchAdapter(adapter);

    return {
      manager,
    };
  }, [adapter]);

  return (
    <ManagerContext.Provider value={value}>
      <AdapterProvider manager={value.manager}>{children}</AdapterProvider>
    </ManagerContext.Provider>
  );
}
