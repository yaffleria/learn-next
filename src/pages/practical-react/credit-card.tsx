import { NextPage } from "next";
import { useState } from "react";
import Cards, { Focused } from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

const CreditCardPage: NextPage = () => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  return (
    <div>
      <h1>Credit Card</h1>
      <Cards
        number={state.number}
        name={state.name}
        expiry={state.expiry}
        cvc={state.cvc}
        focused={state.focus as Focused | undefined}
      />
      <form>
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          value={state.number}
          onChange={(e) => setState({ ...state, number: e.target.value })}
          onFocus={(e) => setState({ ...state, focus: e.target.name })}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={state.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
          onFocus={(e) => setState({ ...state, focus: e.target.name })}
        />
        <input
          type="text"
          name="expiry"
          placeholder="MM/YY Expiry"
          value={state.expiry}
          onChange={(e) => setState({ ...state, expiry: e.target.value })}
          onFocus={(e) => setState({ ...state, focus: e.target.name })}
        />
        <input
          type="number"
          name="cvc"
          placeholder="CVC"
          value={state.cvc}
          onChange={(e) => setState({ ...state, cvc: e.target.value })}
          onFocus={(e) => setState({ ...state, focus: e.target.name })}
        />
      </form>
    </div>
  );
};

export default CreditCardPage;
