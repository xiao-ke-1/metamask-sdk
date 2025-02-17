import { ECIES, ECIESProps } from './ECIES';
import {
  RemoteCommunication,
  RemoteCommunicationProps,
} from './RemoteCommunication';
import { SocketService } from './SocketService';
import { CommunicationLayerPreference } from './types/CommunicationLayerPreference';
import { MessageType } from './types/MessageType';
import { DappMetadata } from './types/DappMetadata';
import { CommunicationLayerMessage } from './types/CommunicationLayerMessage';
import { OriginatorInfo } from './types/OriginatorInfo';
import { WalletInfo } from './types/WalletInfo';
import { ConnectionStatus } from './types/ConnectionStatus';
import { ChannelConfig } from './types/ChannelConfig';
import { KeyInfo } from './types/KeyInfo';
import { PlatformType } from './types/PlatformType';
import { DisconnectOptions } from './types/DisconnectOptions';
// eslint-disable-next-line @typescript-eslint/no-shadow
import { StorageManagerProps, StorageManager } from './types/StorageManager';
import { AutoConnectType } from './types/AutoConnectType';
import { AutoConnectOptions } from './types/AutoConnectOptions';
import { ServiceStatus } from './types/ServiceStatus';
import { CommunicationLayerLoggingOptions } from './types/LoggingOptions';
import { EventType } from './types/EventType';
import { SendAnalytics } from './Analytics';
import { TrackingEvents } from './types/TrackingEvent';
import { DEFAULT_SERVER_URL } from './config';

export type {
  KeyInfo,
  StorageManager,
  AutoConnectOptions,
  RemoteCommunicationProps,
  WalletInfo,
  DappMetadata,
  ChannelConfig,
  CommunicationLayerMessage,
  OriginatorInfo,
  ECIESProps,
  ServiceStatus,
  CommunicationLayerLoggingOptions,
  DisconnectOptions,
  StorageManagerProps,
};

export {
  RemoteCommunication,
  DEFAULT_SERVER_URL,
  PlatformType,
  SendAnalytics,
  ConnectionStatus,
  TrackingEvents,
  EventType,
  AutoConnectType,
  SocketService,
  ECIES,
  MessageType,
  CommunicationLayerPreference,
};
