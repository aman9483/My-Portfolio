
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [error, setError] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setError(false);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://aman-verma.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success(`Thank you, ${data.name}! Your message has been sent successfully.`);
        e.target.reset(); // Reset form
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setError(true);
      toast.error('Something went wrong. Please try again later.');
    }
  };

  return (
    <motion.div
      className="p-8 rounded-md shadow-md mt-20 w-50"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <ToastContainer />
      <div className="pt-24 flex flex-col items-cen mx-auto ">
          <h2
            className={
              "selection:text-black/40 dark:selection:text-white/40 font-deca bg-gradient-to-tr from-teal-300 to-blue-500 bg-clip-text text-transparent items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"
            }
          >
            Contact Us
          </h2>
          <p className="mt-8 max-w-xl text-center md:w-[70%] mx-auto text-sm font-normal md:text-base lg:text-lg mb-2 ">
          We value your interest and look forward to hearing from you. Feel free to reach out with any inquiries or collaboration opportunities.
          </p>
          </div>

          <div className="select-none flex justify-center space-x-4 items-center mt-2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="124"
              height="14"
              fill="currentColor"
              className=" fill-gray-300  rotate-180"
            >
              <path d="M0.466181 9.35938C1.28178 11.6167 3.44138 14 6.28256 14L6.40126 13.9497C7.46574 13.917 8.6719 13.5571 9.63683 12.8442C10.3414 12.3223 10.9196 11.6108 11.2144 10.6987C11.3982 10.0728 11.4556 9.4126 11.3791 8.76221C11.3025 8.11182 11.0919 7.48584 10.7664 6.92579C10.3184 6.20362 9.69044 5.62452 8.9476 5.25293C8.20475 4.88135 7.37767 4.73145 6.55825 4.81934C6.47401 4.82325 6.38977 4.84473 6.31319 4.88331C6.23661 4.92188 6.16768 4.97657 6.11025 5.04346C6.05664 5.11036 6.01069 5.18848 5.98389 5.27295C5.96091 5.35791 5.94943 5.44727 5.95708 5.53614C5.95708 5.62696 5.9724 5.71729 6.01069 5.80079C6.04515 5.88379 6.09876 5.95801 6.16385 6.01758C6.22895 6.07764 6.30553 6.12159 6.38977 6.14698C6.47401 6.17237 6.56208 6.17872 6.65015 6.16504C7.15941 6.08985 7.684 6.15137 8.16646 6.34375C8.64893 6.53614 9.07778 6.85303 9.41474 7.26465C9.7517 7.67676 9.98145 8.1709 10.0848 8.70069C10.1882 9.23047 10.1614 9.7793 10.0121 10.2964C9.49133 11.9565 7.56913 12.6104 6.40126 12.648C4.22634 12.7236 2.35392 10.8057 1.65703 8.875C1.45791 8.34717 1.33538 7.79346 1.28943 7.23243C1.25497 6.78614 1.27029 6.33497 1.33538 5.88868C1.48472 4.88086 1.88294 3.93262 2.49942 3.14014C3.64815 1.75049 5.49376 1.12159 7.68783 1.3667C10.2495 1.65625 12.0147 3.49854 12.8609 4.37891C13.0141 4.54737 13.1787 4.73926 13.351 4.94581L13.7263 5.41016C15.2503 7.30323 17.5401 10.1704 21.6065 8.32178C22.1771 8.01563 22.6557 7.55323 22.9927 6.98389C23.2645 6.53174 23.4368 6.0254 23.4981 5.5H123.51C123.659 5.5 123.789 5.4336 123.877 5.32862C123.954 5.24073 124 5.12598 124 5C124 4.72364 123.782 4.5 123.51 4.5H23.4598C23.3488 3.93848 23.1075 3.41211 22.7476 2.97266C22.2613 2.38233 21.5951 1.98584 20.8599 1.85108C20.4923 1.81055 20.1209 1.83838 19.7647 1.93067C19.5159 1.99561 19.2746 2.09229 19.0449 2.21973C18.4858 2.52881 18.0302 3.00489 17.7315 3.58643C17.6817 3.66358 17.6434 3.75147 17.6243 3.84424L17.6166 3.93897C17.6128 4.00147 17.6166 4.06397 17.6281 4.125C17.6511 4.21729 17.6894 4.30372 17.743 4.37891C17.8004 4.45459 17.8694 4.51661 17.9459 4.56153L18.057 4.60987C18.1068 4.62598 18.1565 4.63624 18.2063 4.64014C18.2638 4.64454 18.325 4.64014 18.3825 4.62647L18.4705 4.60059C18.5548 4.56788 18.6352 4.51661 18.6964 4.4502C18.7386 4.40723 18.773 4.35791 18.8037 4.30469L18.8458 4.21534C19.0181 3.86573 19.2861 3.57813 19.6154 3.3877C19.9485 3.19727 20.3238 3.11377 20.699 3.14649C21.1317 3.2417 21.5185 3.4878 21.8018 3.84375C22.0852 4.2002 22.2422 4.646 22.2498 5.1084C22.2307 5.51172 22.1158 5.9043 21.9167 6.24903C21.7176 6.59424 21.4342 6.88086 21.1011 7.08301C17.9 8.57325 16.2037 6.45411 14.7065 4.56788L14.6261 4.46241C14.3121 4.08252 14.0364 3.73633 13.7646 3.44825C12.8839 2.53663 10.8353 0.398442 7.82568 0.0590868C5.20658 -0.230464 2.96657 0.549321 1.53449 2.28516C0.979278 2.99317 0.565737 3.8042 0.30536 4.67237C0.209633 4.99805 0.133051 5.33155 0.0832729 5.67041C-0.104352 6.91358 0.0258367 8.18702 0.466181 9.35938Z"></path>
            </svg>
            <p>✦</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="124"
              height="14"
              fill="currentColor"
              className=" fill-gray-300  -rotate-0 -scale-y-100 "
            >
              <path d="M0.466181 9.35938C1.28178 11.6167 3.44138 14 6.28256 14L6.40126 13.9497C7.46574 13.917 8.6719 13.5571 9.63683 12.8442C10.3414 12.3223 10.9196 11.6108 11.2144 10.6987C11.3982 10.0728 11.4556 9.4126 11.3791 8.76221C11.3025 8.11182 11.0919 7.48584 10.7664 6.92579C10.3184 6.20362 9.69044 5.62452 8.9476 5.25293C8.20475 4.88135 7.37767 4.73145 6.55825 4.81934C6.47401 4.82325 6.38977 4.84473 6.31319 4.88331C6.23661 4.92188 6.16768 4.97657 6.11025 5.04346C6.05664 5.11036 6.01069 5.18848 5.98389 5.27295C5.96091 5.35791 5.94943 5.44727 5.95708 5.53614C5.95708 5.62696 5.9724 5.71729 6.01069 5.80079C6.04515 5.88379 6.09876 5.95801 6.16385 6.01758C6.22895 6.07764 6.30553 6.12159 6.38977 6.14698C6.47401 6.17237 6.56208 6.17872 6.65015 6.16504C7.15941 6.08985 7.684 6.15137 8.16646 6.34375C8.64893 6.53614 9.07778 6.85303 9.41474 7.26465C9.7517 7.67676 9.98145 8.1709 10.0848 8.70069C10.1882 9.23047 10.1614 9.7793 10.0121 10.2964C9.49133 11.9565 7.56913 12.6104 6.40126 12.648C4.22634 12.7236 2.35392 10.8057 1.65703 8.875C1.45791 8.34717 1.33538 7.79346 1.28943 7.23243C1.25497 6.78614 1.27029 6.33497 1.33538 5.88868C1.48472 4.88086 1.88294 3.93262 2.49942 3.14014C3.64815 1.75049 5.49376 1.12159 7.68783 1.3667C10.2495 1.65625 12.0147 3.49854 12.8609 4.37891C13.0141 4.54737 13.1787 4.73926 13.351 4.94581L13.7263 5.41016C15.2503 7.30323 17.5401 10.1704 21.6065 8.32178C22.1771 8.01563 22.6557 7.55323 22.9927 6.98389C23.2645 6.53174 23.4368 6.0254 23.4981 5.5H123.51C123.659 5.5 123.789 5.4336 123.877 5.32862C123.954 5.24073 124 5.12598 124 5C124 4.72364 123.782 4.5 123.51 4.5H23.4598C23.3488 3.93848 23.1075 3.41211 22.7476 2.97266C22.2613 2.38233 21.5951 1.98584 20.8599 1.85108C20.4923 1.81055 20.1209 1.83838 19.7647 1.93067C19.5159 1.99561 19.2746 2.09229 19.0449 2.21973C18.4858 2.52881 18.0302 3.00489 17.7315 3.58643C17.6817 3.66358 17.6434 3.75147 17.6243 3.84424L17.6166 3.93897C17.6128 4.00147 17.6166 4.06397 17.6281 4.125C17.6511 4.21729 17.6894 4.30372 17.743 4.37891C17.8004 4.45459 17.8694 4.51661 17.9459 4.56153L18.057 4.60987C18.1068 4.62598 18.1565 4.63624 18.2063 4.64014C18.2638 4.64454 18.325 4.64014 18.3825 4.62647L18.4705 4.60059C18.5548 4.56788 18.6352 4.51661 18.6964 4.4502C18.7386 4.40723 18.773 4.35791 18.8037 4.30469L18.8458 4.21534C19.0181 3.86573 19.2861 3.57813 19.6154 3.3877C19.9485 3.19727 20.3238 3.11377 20.699 3.14649C21.1317 3.2417 21.5185 3.4878 21.8018 3.84375C22.0852 4.2002 22.2422 4.646 22.2498 5.1084C22.2307 5.51172 22.1158 5.9043 21.9167 6.24903C21.7176 6.59424 21.4342 6.88086 21.1011 7.08301C17.9 8.57325 16.2037 6.45411 14.7065 4.56788L14.6261 4.46241C14.3121 4.08252 14.0364 3.73633 13.7646 3.44825C12.8839 2.53663 10.8353 0.398442 7.82568 0.0590868C5.20658 -0.230464 2.96657 0.549321 1.53449 2.28516C0.979278 2.99317 0.565737 3.8042 0.30536 4.67237C0.209633 4.99805 0.133051 5.33155 0.0832729 5.67041C-0.104352 6.91358 0.0258367 8.18702 0.466181 9.35938Z"></path>
            </svg>
          </div>
      <form onSubmit={sendEmail}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">Name</label>
          <input type="text" id="name" name="name" className="w-full bg-gray-900 border border-gray-300 rounded-md py-2 px-4 text-white" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email</label>
          <input type="email" id="email" name="email" className="w-full bg-gray-900 border border-gray-300 rounded-md py-2 px-4 text-white" required />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-1">Phone Number</label>
          <input type="text" id="phone" name="phone" className="w-full bg-gray-900 border border-gray-300 rounded-md py-2 px-4 text-white" required />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block mb-1">Subject</label>
          <input type="text" id="subject" name="subject" className="w-full bg-gray-900 border border-gray-300 rounded-md py-2 px-4 text-white" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1">Message</label>
          <textarea id="message" name="message" rows="4" className="w-full bg-gray-900 border border-gray-300 rounded-md py-2 px-4 text-white" required></textarea>
        </div>
        <button type="submit" className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700">Send</button>
      </form>
      <div className="flex justify-center mt-4 space-x-4">
        <a href="https://www.linkedin.com/in/aman-verma-3014a9226/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 flex flex-col items-center">
          <FaLinkedin size={30} />
          <span className="text-sm mt-1">LinkedIn</span>
        </a>
        <a href="https://github.com/aman9483" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-800 flex flex-col items-center">
          <FaGithub size={30} />
          <span className="text-sm mt-1">GitHub</span>
        </a>
        <a href="amankumarverma251@gmail.com" className="text-red-600 hover:text-red-800 flex flex-col items-center">
          <FaEnvelope size={30} />
          <span className="text-sm mt-1">Email</span>
        </a>
      </div>
    </motion.div>
  );
};

export default Contact;
