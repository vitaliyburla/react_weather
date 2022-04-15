import { AppDispatch, RootState } from '../store';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
