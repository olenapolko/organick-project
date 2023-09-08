import { Button } from "../button/Button";
import "./SubscribeForm.scss";
import { useState } from "react";
import { addSubscriber } from "../../fetches/fetches"; 


export function SubscribeForm() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = async (event) => {
    event.preventDefault(); 
    try {
      await addSubscriber(email);
      setEmail("");
    } catch (error) {
      console.error("Error adding subscriber", error);
    }
  };

  return (
    <form className="subscribeForm" onSubmit={handleSubscribe}>
      <input
        type="email"
        className="subscribeForm__field"
        placeholder="Your Email Address"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <Button 
        type="submit"
        text="Subscribe" 
        className="dark-btn subscribeForm__btn"
      ></Button>
    </form>
  );
}
