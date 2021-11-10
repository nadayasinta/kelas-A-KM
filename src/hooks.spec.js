import { renderHook, act } from '@testing-library/react-hooks';
import useDarkMode from './hooks';

describe('when rendered', () => {
    test.only('returns current initial value', () => {
        const { result } = renderHook(() => useDarkMode(false));

        expect(result.current.color).toEqual('white');
        expect(result.current.darkMode).toEqual(false);
        act(() => {
            result.current.setDarkMode(true);
        });
        expect(result.current.color).toEqual('black');
    });
});
