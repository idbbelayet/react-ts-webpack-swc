import { Button } from '@fluentui/react-components';
import { Icons } from './Icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { INCREMENT, DECREMENT } from '../store/counterTypes';

function Counter() {
  const value = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncreament = () => {
    dispatch({ type: INCREMENT });
  };

  const handleDecreament = () => {
    dispatch({ type: DECREMENT });
  };
  return (
    <div className="mt-5">
      <div className="text-xl font-semibold">Total Click : {value}</div>
      <div className="mt-3 flex items-center justify-center gap-3">
        <Button appearance="primary" className="ms-Button" onClick={handleIncreament}>
          <Icons.Add className="mr-1 w-full" size={16} />
          Increament
        </Button>
        <Button appearance="secondary" onClick={handleDecreament}>
          <Icons.Minus className="mr-1 w-full" size={16} />
          Decreament
        </Button>
      </div>
    </div>
  );
}

export default Counter;
