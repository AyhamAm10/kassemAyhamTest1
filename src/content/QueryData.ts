import { LongStaleTime } from "../api/API__information_conect";

export type QueryDataType = {
  staleTime: number;
  refetchOnWindowFocus: boolean;
  refetchOnReconnect: boolean;
  refetchInterval: boolean;
};
export const queryData:QueryDataType = {
  staleTime: LongStaleTime,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
  refetchInterval: false,
};
