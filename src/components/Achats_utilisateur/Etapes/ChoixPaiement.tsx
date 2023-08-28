import { useContext } from "react";
import {StepContext,PaymentContext} from "../Commander"


function Paiement() {

    const { paiement, setpaiement } = useContext(PaymentContext);
    const { etape, setetape } = useContext(StepContext);
  
  
  
    function onValueChange(event) {
      setpaiement(event.target.value)
    }
  
  
    function formSubmit(event) {
      event.preventDefault();
      setetape(3)
  
    }
  
    return (
      <>
        <form onSubmit={formSubmit}>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="CB"
                onChange={onValueChange}
                name="paiement"
                required
              />
              CB
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="Paypal"
                onChange={onValueChange}
                name="paiement"
              />
              Paypal
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="Virement"
                onChange={onValueChange}
                name="paiement"
              />
              Virement
            </label>
          </div>
          <button className="btn btn-default" type="submit">
            Submit
          </button>
        </form>
  
      </>
  
    );
  }

  export default Paiement;