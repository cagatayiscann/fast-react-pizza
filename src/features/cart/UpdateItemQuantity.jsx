import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseQuantity, increaseQuantity } from './cartSlice';

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="small" onClick={() => dispatch(decreaseQuantity(pizzaId))}>
        -
      </Button>
      <span>{currentQuantity}</span>
      <Button type="small" onClick={() => dispatch(increaseQuantity(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
