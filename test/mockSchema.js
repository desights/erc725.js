// Mock schema for tests

export const mockSchema = [
  // TODO: Generate call sig from Constants?
  {
    "name": "LSP3Name",
    "key": "0xa5f15b1fa920bbdbc28f5d785e5224e3a66eb5f7d4092dc9ba82d5e5ae3abc87",
    "keyType": "Singleton",
    "valueContent": "String",
    "valueType": "string",
    // Testing fields
    "ethereumCallSig": "0x54f6127fa5f15b1fa920bbdbc28f5d785e5224e3a66eb5f7d4092dc9ba82d5e5ae3abc87",
    "ethereumRawData": "0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000107061747269636b2d6d63646f77656c6c00000000000000000000000000000000",
    "graphData": "0x7061747269636b2d6d63646f77656c6c",
    "expectedResult": "patrick-mcdowell"
  },
  {
    "name": "LSP3Profile",
    "key": "0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5",
    "keyType": "Singleton",
    "valueContent": "URI",
    "valueType": "string",
    // Testingfields
    "ethereumCallSig": "0x54f6127f5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5",
    "ethereumRawData": "0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000035697066733a2f2f516d6245724b6833466a73415236596a73546a485a4e6d364d6344703661527438324674637639414a4a765a62640000000000000000000000",
    "graphData": "0x697066733a2f2f516d6245724b6833466a73415236596a73546a485a4e6d364d6344703661527438324674637639414a4a765a6264",
    "expectedResult": "ipfs://QmbErKh3FjsAR6YjsTjHZNm6McDp6aRt82Ftcv9AJJvZbd"
  },
]