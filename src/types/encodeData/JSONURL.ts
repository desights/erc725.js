import { SUPPORTED_VERIFICATION_METHODS } from '../../constants/constants';

export interface KeyValuePair {
  key: string;
  value: any;
}

interface URLData {
  url: string;
}

export interface Verification {
  data: string;
  method: SUPPORTED_VERIFICATION_METHODS | string;
  source?: string;
}

export interface URLDataWithHash extends URLData {
  verification: Verification; // | string is to allow use of string directly without importing the enum
  json?: never;
}

export interface URLDataWithJson extends URLData {
  verification?: Verification;
  json: Record<string, any>;
}

export type JSONURLDataToEncode = URLDataWithHash | URLDataWithJson;

export type EncodeDataType =
  | string
  | string[]
  | JSONURLDataToEncode
  | boolean
  | number;

export interface EncodeDataReturn {
  keys: string[];
  values: string[];
}
