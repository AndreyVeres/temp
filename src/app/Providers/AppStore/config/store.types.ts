export interface RootState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  test: any;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  state: RootState;
}
