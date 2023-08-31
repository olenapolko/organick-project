import { useRef, useState,useEffect } from "react";
import './CartForm.scss';
import InputMask from "react-input-mask";

export function CartForm({ checkValidation, getUserInfo }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    phone: '',
    message: ''
  });

  const refForm = useRef(null);

  useEffect(() => {
    const isValid = refForm.current.checkValidity();
    checkValidation(isValid);

    if (isValid) {
      const [userName, surName] = formData.fullName.split(' ');
      getUserInfo({ userName, surName, ...formData });
    }
  }, [formData, checkValidation, getUserInfo]);

  const updateFormData = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name in formData) {
      updateFormData(name, value);
    }
  };

    return(
        <form className="cart__form cart-form" ref={refForm}>
              <div className="cart-form__row">
                <div className="cart-form__row-item">
                  <label htmlFor="fullName">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    className="cart-form__input"
                    placeholder="Want to work with Sigma"
                    pattern="^(\w{2,})+\s(\w+)$"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="cart-form__row-item">
                  <label htmlFor="email">
                    Your Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="cart-form__input"
                    placeholder="Sigma@loves.you"
                    pattern="[a-z0-9._]+@[a-z.-]+\.[a-z]{2,}$"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="cart-form__row">
                <div className="cart-form__row-item">
                  <label htmlFor="address">
                    Address*
                  </label>
                  <input
                    type="text"
                    name="address"
                    className="cart-form__input"
                    placeholder="Sigma address"
                    pattern="^[\w\s]+,\s[\w\s]+\s\d+$"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="cart-form__row-item">
                  <label htmlFor="phone">
                    Phone number*
                  </label>
                  <InputMask
                      mask="+380 (99) 999-99-99"
                      type="tel"
                      name="phone"
                      className="cart-form__input"
                      placeholder="+380 (__) ___-__-__"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                  />
                </div>
              </div>
              <label htmlFor="message">
                Message
                <textarea
                  placeholder="Something"
                  className="cart-form__input message-input"
                  pattern="\w\s"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </label>
            </form>
    )
}

