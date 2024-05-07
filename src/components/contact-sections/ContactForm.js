import React, { useEffect } from 'react'

const ContactForm = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [result, setResult] = React.useState("Send");

  const sendMessage = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f8fdab64-3265-4eb3-be73-4a8b5a211121");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Sent!");
      event.target.reset();
      setTimeout(() => {
        setResult("Send");
      }, 5000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
        <form className='animate-in flex flex-col p-4 border rounded-xl mt-10 gap-3 dark:border-g-1' onSubmit={sendMessage}>
            <label className='select-none font-medium text-xl'>Contact Form</label>
            <input type='text' name="name" placeholder='Name' className='contact-input' required/>
            <input type='email' name="email" placeholder='Email' className='contact-input' required />
            <textarea placeholder='Message' name="message" className='contact-input min-h-48 max-h-52' required />
            <button type='submit' className='font-medium rounded-lg bg-g-2 dark:bg-W-1 p-3 active:bg-L-2 hover:bg-L-1 dark:hover:bg-w-2 text-white dark:text-g-2'>{result}</button>
        </form>
    </>
  )
}

export default ContactForm