'use client'

import styles from "./ContactForm.module.css";
import { useState, useContext } from "react";
import DOMPurify from "dompurify";
import ShareState from "./ShareState.js";
import { languageMapping } from "./languageMapping.js";
import { Button } from "@/components/common/UI/button/button";


export default function ContactForm({ language, setStatusMessage, setName }) {

  // get the state from ShareState
  const { isConfirmPage, setIsConfirmPage, setIsCompletePage } 
    = useContext(ShareState);


  // hold data input on the contact form
  const [formData, setFormData] = useState({
    selection: "",
    name: "",
    companyName: "",
    email: "",
    message: ""
  });

  // hold error messages
  const [formErrors, setFormErrors] = useState({});

  // hold selected option
  const [selectedOption, setSelectedOption] = useState("");


  // function for validate the form
  const validateInput = (name, value) => {
    let errors = {};

    // email validation
    if(name === "email") {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if(!emailPattern.test(value)) {
        errors.email = languageMapping.invalidMessage.email[language];
      }
    }

    return errors;
  }


  // function for handling dropdown selection
  // clients must select one option other than default
  const handleDropdownChange = (e) => {
    const value = e.target.value;

    setSelectedOption(value);

    setFormData({
      ...formData,
      selection: value
    });

    let errors = {};
    if (!value) {
      errors.selection = languageMapping.invalidMessage.select[language];
    }

    if (!["Production", "Interview", "Employment", "Other"].includes(value)) {
      errors.selection = "Invalid selection";
    }

    setFormErrors({ ...formErrors, ...errors });
  };



  // function for handling confirm
  const handleConfirm = (e) => {
    e.preventDefault();


    // sanitization on the client-side
    Object.keys(formData).forEach((key) => {
      formData[key] = DOMPurify.sanitize(formData[key]);
    });


    let errors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        // set error message
        const errorMessage = `${languageMapping.inputForm[key][language]}${languageMapping.invalidMessage.required[language]}`;
        errors[key] = errorMessage;
      }
    });

    const additionalErrors = validateInput("email", formData.email);
    errors = { ...errors, ...additionalErrors };

    if (!selectedOption) {
      errors.selection = languageMapping.invalidMessage.select[language];
    }

    setFormErrors(errors);

    // some errors exist
    if (Object.keys(errors).length > 0) {
      setStatusMessage(languageMapping.error.formError[language]);
      return;
    }

    // change to confirm page if no error
    if (Object.keys(errors).length === 0) {
      // clear status message
      setStatusMessage("");

      setIsConfirmPage(true);
    }

  }



  // function for handling return
  const handleReturn = (e) => {
    e.preventDefault();
    setIsConfirmPage(false);
  }



  // get API endpoint from env
  const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;

  // state for displaying loading UI
  const [isWaiting, setIsWaiting] = useState(false);

  // function for handling submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsWaiting(true);

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });


      if(response.status >= 200 && response.status < 300) {
        setIsCompletePage(true);
      } else {
        setStatusMessage(languageMapping.mailError.sendingError[language]);
      }

    } catch (error) {
      console.error(languageMapping.mailError.sendingError[language], error);
      setStatusMessage(languageMapping.mailError.cannotSend[language]);
    } finally {
      setIsWaiting(false);
    }
  };


  // function for handling input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (name !== "email") {
      const errors = validateInput(name, value);
      setFormErrors({ ...formErrors, ...errors });
    }
    if (name === "name") {
      // set name for creating TextMesh
      setName(value);
    }
  };


  return (
    <>
    <form className={styles.container}>


      {/* selection for inquiry */}
      <div className={styles.labelContainer}>
        <label htmlFor='selection'>
          {languageMapping.selection.title[language]}
          <span style={{ color: "red" }}> *</span>
        </label>
        {formErrors.selection && <div className={styles.error}>{formErrors.selection}</div>}
      </div>
      <div className={styles.selectionWrapper}>
        <select
          id="selection"
          name="selection"
          onChange={handleDropdownChange}
          value={selectedOption}
          className={`${styles.selection} ${selectedOption === "" ? styles.gray : styles.black}`}
          disabled={isConfirmPage}
        >
          <option value="" disabled>{languageMapping.selection.default[language]}</option>
          <option value="Production">{languageMapping.selection.item1[language]}</option>
          <option value="Interview">{languageMapping.selection.item2[language]}</option>
          <option value="Employment">{languageMapping.selection.item3[language]}</option>
          <option value="Other">{languageMapping.selection.item4[language]}</option>
        </select>
      </div>


      {/* input field for name */}
      <div className={styles.labelContainer}>
        <label htmlFor='name'>
          {languageMapping.inputForm.name[language]}
          <span style={{ color: "red" }}> *</span>
        </label>
        {formErrors.name && <div className={styles.error}>{formErrors.name}</div>}
      </div>
      <input
        type="text"
        id="name"
        name="name"
        placeholder={languageMapping.inputForm.namePlaceholder[language]}
        onChange={handleChange}
        disabled={isConfirmPage}
        className={styles.field}
      />


      {/* input field for company name */}
      <div className={styles.labelContainer}>
        <label htmlFor='companyName'>{languageMapping.inputForm.companyName[language]}</label>
      </div>
      <input
        type="text"
        id="companyName"
        name="companyName"
        placeholder={languageMapping.inputForm.companyNamePlaceholder[language]}
        onChange={handleChange}
        disabled={isConfirmPage}
        className={styles.field}
      />


      {/* input field for email */}
      <div className={styles.labelContainer}>
        <label htmlFor='email'>
          {languageMapping.inputForm.email[language]}
          <span style={{ color: "red" }}> *</span>
        </label>
        {formErrors.email && <div className={styles.error}>{formErrors.email}</div>}
      </div>
      <input
        type="text"
        id="email"
        name="email"
        placeholder={languageMapping.inputForm.emailPlaceholder[language]}
        onChange={handleChange}
        disabled={isConfirmPage}
        className={styles.field}
      />


      {/* input field for message */}
      <div className={styles.labelContainer}>
        <label htmlFor='message'>
          {languageMapping.inputForm.message[language]}
          <span style={{ color: "red" }}> *</span>
        </label>
        {formErrors.message && <div className={styles.error}>{formErrors.message}</div>}
      </div>
      <textarea
        id="message"
        name="message"
        onChange={handleChange}
        disabled={isConfirmPage}
        className={styles.textarea}
      ></textarea>


      {/* switch button */}
      {!isConfirmPage &&
      <div className={styles.buttonContainer} style={{ justifyContent: "center" }}>
        <div className={styles.button}>
          <Button
            label={languageMapping.inputForm.confirm[language]}
            onClick={handleConfirm}
            onPressEnter={handleConfirm}
          />
        </div>
      </div>
      }

      {isConfirmPage &&
      <div className={styles.buttonContainer} style={{ justifyContent: "space-between" }}>
        <div className={styles.button}>
          <Button
            label={languageMapping.inputForm.return[language]}
            onClick={handleReturn}
          />
        </div>
        <div className={styles.button}>
          <Button
            label={languageMapping.inputForm.submit[language]}
            onClick={handleSubmit}
            onPressEnter={handleSubmit}
          />
        </div>
      </div>
      }

    </form>
    </>
  )
}