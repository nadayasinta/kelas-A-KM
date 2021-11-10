import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import TestingComponent from './TestingComponent';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
const history = createMemoryHistory();

afterEach(() => {
    jest.restoreAllMocks();
});

test('renders learn react link', () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => {
        return {
            json: jest.fn().mockImplementation(() => {
                return { message: 'ok' };
            }),
        };
    });
    render(
        <Router history={history}>
            <TestingComponent />
        </Router>
    );
    expect(screen.getByText('USER FORM')).toBeInTheDocument();
    expect(screen.getByTestId('test-title')).toBeInTheDocument();
});

test('trigger change on text input', () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => {
        return {
            json: jest.fn().mockImplementation(() => {
                return { message: 'ok' };
            }),
        };
    });
    act(() => {
        render(
            <Router history={history}>
                <TestingComponent />
            </Router>
        );
    });
    fireEvent.change(screen.getByTestId('test-input'), {
        target: { value: '1' },
    });
    expect(screen.getByTestId('test-error')).toBeInTheDocument();
    // act(() => {
    //     userEvent.click(screen.getByTestId('test-button'));
    // });
    // const preventDefault = jest.fn();
    // fireEvent.submit(screen.getByTestId('test-form'), {
    //     preventDefault,
    // });
    // expect(preventDefault).toHaveBeenCalledTimes(1);
});

describe('fetch Data', () => {
    test('when response success',async () => {
        jest.spyOn(global, 'fetch').mockImplementation(() => {
            return {
                json: jest.fn().mockImplementation(() => {
                    return { message: 'ok' };
                }),
            };
        });
        act(() => {
            render(
                <Router history={history}>
                    <TestingComponent />
                </Router>
            );
        });
        await act(async () => {
            expect(screen.getByTestId('test-response')).toBeInTheDocument();
          });

    });
});
