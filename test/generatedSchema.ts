/** WORK IN PROGRESS, THIS FILE WILL BE AUTOGENERATED */
import { JSONURLDataToEncode, URLDataWithHash } from '../src/types';

export type Schema = {
  LSP3Profile: {
    encodeData: {
      inputTypes: JSONURLDataToEncode;
      returnValues: string;
    };
    decodeData: {
      inputTypes: string;
      returnValues: URLDataWithHash;
    };
    getData: {
      returnValues: string;
    };
  };
  LSP1UniversalReceiverDelegate: {
    encodeData: {
      inputTypes: string;
      returnValues: string;
    };
    decodeData: {
      inputTypes: string;
      returnValues: string;
    };
    getData: {
      returnValues: string;
    };
  };
};
