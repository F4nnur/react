import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { stat } from 'copy-webpack-plugin/types/utils';

export const getCounter = (state: StateSchema) => state.counter;
