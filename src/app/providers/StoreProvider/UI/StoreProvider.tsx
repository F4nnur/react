import React from 'react';
import { Provider } from 'react-redux';
import { createRootStore } from 'app/providers/StoreProvider/config/store';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export interface StoreProviderProps {
    children?: React.ReactNode;
    initialState?: StateSchema;
}
const StoreProvider = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
    } = props;
    const store = createRootStore(initialState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;
