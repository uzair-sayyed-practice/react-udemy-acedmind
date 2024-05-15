import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const authenticated = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <>
      {authenticated && (
        <main className={classes.counter}>
          <h1>Redux Counter</h1>
          {show && <div className={classes.value}>{counter}</div>}
          <div>
            <StyledButton onClick={incrementHandler}>Increment</StyledButton>
            <StyledButton onClick={increaseHandler}>Increase by 5</StyledButton>
            <StyledButton onClick={decrementHandler}>Decrement</StyledButton>
          </div>
          <StyledButton onClick={toggleCounterHandler}>
            Toggle Counter
          </StyledButton>
        </main>
      )}
    </>
  );
};

const StyledButton = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: #3c0080;
  border: 1px solid #3c0080;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  margin: 1rem;

  &:hover {
    bbackground-color: #5b14ac;
    border-color: #5b14ac;
  }
`;

export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <StyledButton onClick={this.incrementHandler.bind(this)}>Increment</StyledButton>
//           <StyledButton onClick={this.decrementHandler.bind(this)}>Decrement</StyledButton>
//         </div>
//         <StyledButton onClick={this.toggleCounterHandler}>
//           Toggle Counter
//         </StyledButton>
//       </main>
//     );
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };
// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
