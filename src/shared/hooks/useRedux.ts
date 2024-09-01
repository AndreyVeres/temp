import { AppDispatch } from 'app/Providers/AppStore/config/store.config';
import { RootState } from 'app/Providers/AppStore/config/store.types';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
