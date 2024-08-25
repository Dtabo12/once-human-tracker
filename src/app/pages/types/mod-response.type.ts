export type ModResponse<T> = {
  isLoading: boolean;
  errorMessage: string | null;
  message: string | null;
  data: T;
}