import { ConnectItemReply, KeyPair } from '@tonconnect/protocol';

export enum TonConnectBridgeType {
  Remote = 'remote',
  Injected = 'injected',
}

export interface IConnectedAppConnectionRemote {
  type: TonConnectBridgeType.Remote;
  sessionKeyPair: KeyPair;
  clientSessionId: string;
  replyItems: ConnectItemReply[];
}

export interface IConnectedAppConnectionInjected {
  type: TonConnectBridgeType.Injected;
  replyItems: ConnectItemReply[];
}

export type IConnectedAppConnection =
  | IConnectedAppConnectionRemote
  | IConnectedAppConnectionInjected;

export interface IConnectedApp {
  name: string;
  url: string;
  icon: string;
  autoConnectDisabled?: boolean;
  connections: IConnectedAppConnection[];
}

export interface IConnectedAppsStore {
  connectedApps: {
    [chainName: string]: {
      [walletAddress: string]: {
        [domain: string]: IConnectedApp;
      };
    };
  };
  actions: {
    saveAppConnection: (
      chainName: 'mainnet' | 'testnet',
      walletAddress: string,
      appData: Omit<IConnectedApp, 'connections'>,
      connection: IConnectedAppConnection,
    ) => void;
    removeApp: (
      chainName: 'mainnet' | 'testnet',
      walletAddress: string,
      url: string,
    ) => void;
    removeInjectedConnection: (
      chainName: 'mainnet' | 'testnet',
      walletAddress: string,
      url: string,
    ) => void;
    removeRemoteConnection: (
      chainName: 'mainnet' | 'testnet',
      walletAddress: string,
      url: string,
      clientSessionId: string,
    ) => void;
  };
}
