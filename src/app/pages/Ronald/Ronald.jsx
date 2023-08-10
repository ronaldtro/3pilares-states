
import { ComponentContext1 } from './components/ComponentContext1';
import { ComponentContext2 } from './components/ComponentContext2';
import { ComponentRedux2 } from './components/ComponentRedux2';
import {RonaldProvider} from './context/ronald.context';

const Ronald = () => {

    return (
        <RonaldProvider>
            <ComponentContext1 />
            <ComponentContext2 />
            <ComponentRedux2 />
        </RonaldProvider>
    );
};

export default Ronald;