import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { LevelState } from '../store/slices/LevelSlice';

const useTypedSelector: TypedUseSelectorHook<LevelState> = useSelector;

export default useTypedSelector;
