import Button from 'components/02-1-components/ui/Button/Button';

const Controls = ({ onIncrement, onDecrement }) => (
  <div className="Counter__controls">
    <Button type="button" onClick={onIncrement}>
      Increment by 1
    </Button>
    <Button type="button" onClick={onDecrement}>
      Decrement by 1
    </Button>
  </div>
);

export default Controls;
