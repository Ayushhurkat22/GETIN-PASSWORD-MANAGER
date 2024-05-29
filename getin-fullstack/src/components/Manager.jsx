// // /* eslint-disable no-unused-vars */
// // import React, { useRef, useState, useEffect } from 'react';
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import './styles.css';

// // const Manager = () => {
// //   const ref = useRef();
// //   const [form, setForm] = useState({ website: "", username: "", password: "", date: "" });
// //   const [passwordArray, setPasswordArray] = useState([]);
// //   const [loggedInUser, setLoggedInUser] = useState("");

// //   useEffect(() => {
// //     const queryParams = new URLSearchParams(window.location.search);
// //     const user = queryParams.get('user');
// //     setLoggedInUser(user);
// //     getCredentials(user);
// //   }, []);

// //   const getCredentials = async (user) => {
// //     try {
// //       let req = await fetch(`http://localhost:3000/${user}`);
// //       let passwords = await req.json();
// //       console.log(passwords);
// //       setPasswordArray(passwords);
// //     } catch (error) {
// //       console.error('Error fetching credentials:', error);
// //     }
// //   };

// //   const showPassword = () => {
// //     const icon = ref.current;
// //     const passwordInput = document.getElementById("password");
// //     if (icon.src.includes("hide.png")) {
// //       icon.src = "icons/view.png";
// //       passwordInput.type = "password";
// //     } else {
// //       icon.src = "icons/hide.png";
// //       passwordInput.type = "text";
// //     }
// //   };

// //   const savePassword = async () => {
// //     const { website, username, password, date } = form;
// //     if (!website || !username || !password || !date) {
// //       toast('All fields are mandatory!', {
// //         position: "top-right",
// //         autoClose: 2000,
// //         hideProgressBar: false,
// //         closeOnClick: true,
// //         pauseOnHover: true,
// //         draggable: true,
// //         progress: undefined,
// //         theme: "light",
// //       });
// //       return;
// //     }

// //     const updatedPasswordArray = [...passwordArray, { ...form, user: loggedInUser }];
// //     setPasswordArray(updatedPasswordArray);

// //     // Save to backend
// //     await fetch("http://localhost:3000/", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json"
// //       },
// //       body: JSON.stringify({ ...form, user: loggedInUser })
// //     });
// //   };

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const copyToClipboardUsername = (text) => {
// //     navigator.clipboard.writeText(text);
// //     toast('Username copied!', {
// //       position: "top-right",
// //       autoClose: 2000,
// //       hideProgressBar: false,
// //       closeOnClick: true,
// //       pauseOnHover: true,
// //       draggable: true,
// //       progress: undefined,
// //       theme: "light",
// //     });
// //   };

// //   const copyToClipboardPassword = (text) => {
// //     navigator.clipboard.writeText(text);
// //     toast('Password copied!', {
// //       position: "top-right",
// //       autoClose: 2000,
// //       hideProgressBar: false,
// //       closeOnClick: true,
// //       pauseOnHover: true,
// //       draggable: true,
// //       progress: undefined,
// //       theme: "light",
// //     });
// //   };

// //   const encryptPassword = (password) => {
// //     return password.split('').map(() => '*').join('');
// //   };

// //   const deleteEntry = async (index) => {
// //     const shouldDelete = window.confirm("Are you sure you want to delete this entry?");
// //     if (shouldDelete) {
// //       const entryToDelete = passwordArray[index];
// //       const updatedPasswordArray = passwordArray.filter((_, i) => i !== index);
// //       setPasswordArray(updatedPasswordArray);

// //       // Delete from backend
// //       await fetch("http://localhost:3000/", {
// //         method: "DELETE",
// //         headers: {
// //           "Content-Type": "application/json"
// //         },
// //         body: JSON.stringify({ ...entryToDelete, user: loggedInUser })
// //       });
// //     }
// //   };

// //   const groupPasswordsByWebsite = (passwords) => {
// //     return passwords.reduce((groups, item) => {
// //       if (!groups[item.website]) {
// //         groups[item.website] = [];
// //       }
// //       groups[item.website].push(item);
// //       return groups;
// //     }, {});
// //   };

// //   const sortedPasswordArray = (passwordArray) => {
// //     return passwordArray.sort((a, b) => new Date(b.date) - new Date(a.date));
// //   };

// //   const groupedPasswords = groupPasswordsByWebsite(passwordArray);

// //   return (
// //     <>
// //       <ToastContainer
// //         position="top-right"
// //         autoClose={5000}
// //         hideProgressBar={false}
// //         newestOnTop={false}
// //         closeOnClick
// //         rtl={false}
// //         pauseOnFocusLoss
// //         draggable
// //         pauseOnHover
// //         theme="light"
// //         transition="Bounce"
// //       />

// //       <div className="absolute inset-0 -z-10 size-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
// //         <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#085a99,#0647a1,#00d4ff,transparent)]" />
// //       </div>

// //       <div className="mycontainer mx-auto p-4 max-w-md">
// //         <h1 className="text-4xl font-semibold text-center hover:text-bold">
// //           <span className="text-white">&lt;</span>
// //           <span className="gradient-text">GetIN</span>
// //           <span className="text-white">/&gt;</span>
// //         </h1>
// //         <p className="text-white text-lg text-center mb-8">Your own password manager</p>
// //         <div className="text-black flex flex-col p-4 gap-4 justify-center items-center">
// //           <input
// //             value={form.website}
// //             onChange={handleChange}
// //             placeholder="Enter Website URL"
// //             className="rounded-full border border-blue-500 w-full px-4 py-2"
// //             type="text"
// //             name="website"
// //             id="website"
// //             required
// //           />
// //           <input
// //             value={form.username}
// //             onChange={handleChange}
// //             placeholder="Enter Username"
// //             className="rounded-full border border-blue-500 w-full px-4 py-2"
// //             type="text"
// //             name="username"
// //             id="username"
// //             required
// //           />
// //           <div className="relative w-full">
// //             <input
// //               value={form.password}
// //               onChange={handleChange}
// //               placeholder="Enter Password"
// //               className="rounded-full border border-blue-500 w-full px-4 py-2"
// //               type="password"
// //               name="password"
// //               id="password"
// //               required
// //             />
// //             <span className='absolute right-3 top-2 cursor-pointer' onClick={showPassword}>
// //               <img ref={ref}
// //                 src="icons/view.png"
// //                 alt="View"
// //                 className="p-1"
// //                 width={25}
// //               />
// //             </span>
// //           </div>
// //           <input
// //             value={form.date}
// //             onChange={handleChange}
// //             placeholder="Enter Date"
// //             className="rounded-full border border-blue-500 w-full px-4 py-2"
// //             type="date"
// //             name="date"
// //             id="date"
// //             required
// //           />
// //           <button onClick={savePassword} className="flex justify-center items-center gap-2 bg-white rounded-full px-4 py-2 w-fit border-2 hover:bg-blue-200 border-blue-900">
// //             <lord-icon
// //               src="https://cdn.lordicon.com/hqymfzvj.json"
// //               trigger="hover"
// //               className="w-6 h-6"
// //             ></lord-icon>
// //             Add Password
// //           </button>
// //         </div>

// //         <div className='passwords'>
// //           <h2 className='font-bold text-2xl py-4 flex items-center justify-center'>Your Passwords</h2>
// //           {passwordArray.length === 0 && <div className='text-2md py-4 flex items-center justify-center'>No Passwords to show</div>}
// //           {passwordArray.length !== 0 && (
// //             <div>
// //               {Object.keys(groupedPasswords).map((website, index) => (
// //                 <details key={index} className="mb-4">
// //                   <summary className="cursor-pointer bg-blue-600 text-white border-2 border-black p-2 rounded flex justify-center items-center hover:bg-transparent hover:text-black">
// //                     {website}
// //                   </summary>

// //                   <table className="table-auto w-full rounded-md overflow-hidden mt-2">
// //                     <thead className='bg-transparent'>
// //                       <tr>
// //                         <th className='py-2'>Username</th>
// //                         <th className='py-2'>Password</th>
// //                         <th className='py-2'>Date Of Saving</th>
// //                         <th  className='py-2'>Delete</th>
// //                       </tr>
// //                     </thead>
// //                     <tbody className='bg-blue-100'>
// //                       {sortedPasswordArray(groupedPasswords[website]).map((item, subIndex) => (
// //                         <tr key={subIndex}>
// //                           <td className='py-2 border-2 border-black text-center'>
// //                             {item.username}
// //                             <span className='ml-1 cursor-pointer' onClick={() => copyToClipboardUsername(item.username)}>
// //                               <lord-icon
// //                                 src="https://cdn.lordicon.com/depeqmsz.json"
// //                                 trigger="in"
// //                                 delay="1500"
// //                                 state="in-article"
// //                                 style={{ width: '20px', height: '20px' }}
// //                               />
// //                             </span>
// //                           </td>
// //                           <td className='py-2 border-2 border-black text-center'>
// //                             {item.passwordMasked ? '******' : encryptPassword(item.password)}
// //                             <span className='ml-1 cursor-pointer' onClick={() => {
// //                               copyToClipboardPassword(item.password);
// //                               setPasswordArray(prev => prev.map(entry => entry === item ? { ...entry, passwordMasked: true } : entry));
// //                             }}>
// //                               <lord-icon
// //                                 src="https://cdn.lordicon.com/depeqmsz.json"
// //                                 trigger="in"
// //                                 delay="1500"
// //                                 state="in-article"
// //                                 style={{ width: '20px', height: '20px' }}
// //                               />
// //                             </span>
// //                           </td>
// //                           <td className='py-2 border-2 border-black text-center'>{item.date}</td>
// //                           <td className='py-2 border-2 border-black text-center'>
// //                             <button onClick={() => deleteEntry(passwordArray.indexOf(item))} className="bg-transparent hover:bg-transparent text-white font-bold py-2 px-4 rounded-full">
// //                               <lord-icon
// //                                 src="https://cdn.lordicon.com/wpyrrmcq.json"
// //                                 trigger="morph"
// //                                 state="morph-trash-full"
// //                                 style={{ width: '20px', height: '20px' }}
// //                               />
// //                             </button>
// //                           </td>
// //                         </tr>
// //                       ))}
// //                     </tbody>
// //                   </table>
// //                 </details>
// //               ))}
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Manager;

// /* eslint-disable no-unused-vars */
// import React, { useRef, useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './styles.css';

// const Manager = () => {
//   const ref = useRef();
//   const [form, setForm] = useState({ website: "", username: "", password: "", date: "" });
//   const [passwordArray, setPasswordArray] = useState([]);
//   const [loggedInUser, setLoggedInUser] = useState("");

//   useEffect(() => {
//     const queryParams = new URLSearchParams(window.location.search);
//     const user = queryParams.get('user');
//     setLoggedInUser(user);
//     getCredentials(user);
//   }, []);

//   const getCredentials = async (user) => {
//     try {
//       let req = await fetch(`http://localhost:3000/${user}`);
//       let passwords = await req.json();
//       setPasswordArray(passwords.filter(entry => entry.user === user)); // Filter passwords by logged in user
//     } catch (error) {
//       console.error('Error fetching credentials:', error);
//     }
//   };

//   const showPassword = () => {
//     const icon = ref.current;
//     const passwordInput = document.getElementById("password");
//     if (icon.src.includes("hide.png")) {
//       icon.src = "icons/view.png";
//       passwordInput.type = "password";
//     } else {
//       icon.src = "icons/hide.png";
//       passwordInput.type = "text";
//     }
//   };

//   const savePassword = async () => {
//     const { website, username, password, date } = form;
//     if (!website || !username || !password || !date) {
//       toast('All fields are mandatory!', {
//         position: "top-right",
//         autoClose: 2000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//       return;
//     }

//     // Save to backend with loggedInUser
//     await fetch("http://localhost:3000/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ ...form, user: loggedInUser })
//     });

//     // Update state with the newly saved password
//     setPasswordArray(prevPasswords => [...prevPasswords, { ...form, user: loggedInUser }]);
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const copyToClipboardUsername = (text) => {
//     navigator.clipboard.writeText(text);
//     toast('Username copied!', {
//       position: "top-right",
//       autoClose: 2000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });
//   };

//   const copyToClipboardPassword = (text) => {
//     navigator.clipboard.writeText(text);
//     toast('Password copied!', {
//       position: "top-right",
//       autoClose: 2000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });
//   };

//   const encryptPassword = (password) => {
//     return password.split('').map(() => '*').join('');
//   };

//   const deleteEntry = async (index) => {
//     const shouldDelete = window.confirm("Are you sure you want to delete this entry?");
//     if (shouldDelete) {
//       const entryToDelete = passwordArray[index];
//       const updatedPasswordArray = passwordArray.filter((_, i) => i !== index);
//       setPasswordArray(updatedPasswordArray);

//       // Delete from backend
//       await fetch("http://localhost:3000/", {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ ...entryToDelete, user: loggedInUser })
//       });
//     }
//   };

//   const groupPasswordsByWebsite = (passwords) => {
//     return passwords.reduce((groups, item) => {
//       if (!groups[item.website]) {
//         groups[item.website] = [];
//       }
//       groups[item.website].push(item);
//       return groups;
//     }, {});
//   };

//   const sortedPasswordArray = (passwordArray) => {
//     return passwordArray.sort((a, b) => new Date(b.date) - new Date(a.date));
//   };

//   const groupedPasswords = groupPasswordsByWebsite(passwordArray);

//   return (
//     <>
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//         transition="Bounce"
//       />

//       <div className="absolute inset-0 -z-10 size-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#085a99,#0647a1,#00d4ff,transparent)]" />
//       </div>

//       <div className="mycontainer mx-auto p-4 max-w-md">
//         <h1 className="text-4xl font-semibold text-center hover:text-bold">
//           <span className="text-white">&lt;</span>
//           <span className="gradient-text">GetIN</span>
//           <span className="text-white">/&gt;</span>
//         </h1>
//         <p className="text-white text-lg text-center mb-8">Your own password manager</p>
//         <div className="text-black flex flex-col p-4 gap-4 justify-center items-center">
//           <input
//             value={form.website}
//             onChange={handleChange}
//             placeholder="Enter Website URL"
//             className="rounded-full border border-blue-500 w-full px-4 py-2"
//             type="text"
//             name="website"
//             id="website"
//             required
//           />
//           <input
//             value={form.username}
//             onChange={handleChange}
//             placeholder="Enter Username"
//             className="rounded-full border border-blue-500 w-full px-4 py-2"
//             type="text"
//             name="username"
//             id="username"
//             required
//           />
//           <div className="relative w-full">
//             <input
//               value={form.password}
//               onChange={handleChange}
//               placeholder="Enter Password"
//               className="rounded-full border border-blue-500 w-full px-4 py-2"
//               type="password"
//               name="password"
//               id="password"
//               required
//             />
//             <span className='absolute right-3 top-2 cursor-pointer' onClick={showPassword}>
//               <img ref={ref}
//                 src="icons/view.png"
//                 alt="View"                 className="p-1"
//                 width={25}
//               />
//             </span>
//           </div>
//           <input
//             value={form.date}
//             onChange={handleChange}
//             placeholder="Enter Date"
//             className="rounded-full border border-blue-500 w-full px-4 py-2"
//             type="date"
//             name="date"
//             id="date"
//             required
//           />
//           <button onClick={savePassword} className="flex justify-center items-center gap-2 bg-white rounded-full px-4 py-2 w-fit border-2 hover:bg-blue-200 border-blue-900">
//             <lord-icon
//               src="https://cdn.lordicon.com/hqymfzvj.json"
//               trigger="hover"
//               className="w-6 h-6"
//             ></lord-icon>
//             Add Password
//           </button>
//         </div>

//         <div className='passwords'>
//           <h2 className='font-bold text-2xl py-4 flex items-center justify-center'>Your Passwords</h2>
//           {passwordArray.length === 0 && <div className='text-2md py-4 flex items-center justify-center'>No Passwords to show</div>}
//           {passwordArray.length !== 0 && (
//             <div>
//               {Object.keys(groupedPasswords).map((website, index) => (
//                 <details key={index} className="mb-4">
//                   <summary className="cursor-pointer bg-blue-600 text-white border-2 border-black p-2 rounded flex justify-center items-center hover:bg-transparent hover:text-black">
//                     {website}
//                   </summary>

//                   <table className="table-auto w-full rounded-md overflow-hidden mt-2">
//                     <thead className='bg-transparent'>
//                       <tr>
//                         <th className='py-2'>Username</th>
//                         <th className='py-2'>Password</th>
//                         <th className='py-2'>Date Of Saving</th>
//                         <th className='py-2'>Delete</th>
//                       </tr>
//                     </thead>
//                     <tbody className='bg-blue-100'>
//                       {sortedPasswordArray(groupedPasswords[website]).map((item, subIndex) => (
//                         <tr key={subIndex}>
//                           <td className='py-2 border-2 border-black text-center'>
//                             {item.username}
//                             <span className='ml-1 cursor-pointer' onClick={() => copyToClipboardUsername(item.username)}>
//                               <lord-icon
//                                 src="https://cdn.lordicon.com/depeqmsz.json"
//                                 trigger="in"
//                                 delay="1500"
//                                 state="in-article"
//                                 style={{ width: '20px', height: '20px' }}
//                               />
//                             </span>
//                           </td>
//                           <td className='py-2 border-2 border-black text-center'>
//                             {item.passwordMasked ? '******' : encryptPassword(item.password)}
//                             <span className='ml-1 cursor-pointer' onClick={() => {
//                               copyToClipboardPassword(item.password);
//                               setPasswordArray(prev => prev.map(entry => entry === item ? { ...entry, passwordMasked: true } : entry));
//                             }}>
//                               <lord-icon
//                                 src="https://cdn.lordicon.com/depeqmsz.json"
//                                 trigger="in"
//                                 delay="1500"
//                                 state="in-article"
//                                 style={{ width: '20px', height: '20px' }}
//                               />
//                             </span>
//                           </td>
//                           <td className='py-2 border-2 border-black text-center'>{item.date}</td>
//                           <td className='py-2 border-2 border-black text-center'>
//                             <button onClick={() => deleteEntry(passwordArray.indexOf(item))} className="bg-transparent hover:bg-transparent text-white font-bold py-2 px-4 rounded-full">
//                               <lord-icon
//                                 src="https://cdn.lordicon.com/wpyrrmcq.json"
//                                 trigger="morph"
//                                 state="morph-trash-full"
//                                 style={{ width: '20px', height: '20px' }}
//                               />
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </details>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Manager;

import React, { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

const Manager = () => {
  const ref = useRef();
  const [form, setForm] = useState({ website: "", username: "", password: "", date: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const user = queryParams.get('user');
    setLoggedInUser(user);
    getCredentials(user);
  }, []);

  const getCredentials = async (user) => {
    try {
      let req = await fetch(`http://localhost:3000/?user=${user}`);
      let passwords = await req.json();
      setPasswordArray(passwords);
    } catch (error) {
      console.error('Error fetching credentials:', error);
    }
  };

  const showPassword = () => {
    const icon = ref.current;
    const passwordInput = document.getElementById("password");
    if (icon.src.includes("hide.png")) {
      icon.src = "icons/view.png";
      passwordInput.type = "password";
    } else {
      icon.src = "icons/hide.png";
      passwordInput.type = "text";
    }
  };

  const savePassword = async () => {
    const { website, username, password, date } = form;
    if (!website || !username || !password || !date) {
      toast('All fields are mandatory!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...form, user: loggedInUser })
    });

    setPasswordArray(prevPasswords => [...prevPasswords, { ...form, user: loggedInUser }]);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const copyToClipboardUsername = (text) => {
    navigator.clipboard.writeText(text);
    toast('Username copied!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const copyToClipboardPassword = (text) => {
    navigator.clipboard.writeText(text);
    toast('Password copied!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const encryptPassword = (password) => {
    return password.split('').map(() => '*').join('');
  };

  const deleteEntry = async (index) => {
    const shouldDelete = window.confirm("Are you sure you want to delete this entry?");
    if (shouldDelete) {
      const entryToDelete = passwordArray[index];
      const updatedPasswordArray = passwordArray.filter((_, i) => i !== index);
      setPasswordArray(updatedPasswordArray);

      await fetch("http://localhost:3000/", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...entryToDelete, user: loggedInUser })
      });
    }
  };

  const groupPasswordsByWebsite = (passwords) => {
    return passwords.reduce((groups, item) => {
      if (!groups[item.website]) {
        groups[item.website] = [];
      }
      groups[item.website].push(item);
      return groups;
    }, {});
  };

  const sortedPasswordArray = (passwordArray) => {
    return passwordArray.sort((a, b) => new Date(b.date) - new Date(a.date));
  };

  const groupedPasswords = groupPasswordsByWebsite(passwordArray);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />

      <div className="absolute inset-0 -z-10 size-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#085a99,#0647a1,#00d4ff,transparent)]" />
      </div>

      <div className="mycontainer mx-auto p-4 max-w-md">
        <h1 className="text-4xl font-semibold text-center hover:text-bold">
          <span className="text-white">&lt;</span>
          <span className="gradient-text">GetIN</span>
          <span className="text-white">/&gt;</span>
        </h1>
        <p className="text-white text-lg text-center mb-8">Your own password manager</p>
        <div className="text-black flex flex-col p-4 gap-4 justify-center items-center">
          <input
            value={form.website}
            onChange={handleChange}
            placeholder="Enter Website URL"
            className="rounded-full border border-blue-500 w-full px-4 py-2"
            type="text"
            name="website"
            id="website"
            required
          />
          <input
            value={form.username}
            onChange={handleChange}
            placeholder="Enter Username"
            className="rounded-full border border-blue-500 w-full px-4 py-2"
            type="text"
            name="username"
            id="username"
            required
          />
          <div className="relative w-full">
            <input
              value={form.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className="rounded-full border border-blue-500 w-full px-4 py-2"
              type="password"
              name="password"
              id="password"
              required
            />
            <span className='absolute right-3 top-2 cursor-pointer' onClick={showPassword}>
              <img ref={ref}
                src="icons/view.png"
                alt="View"                 className="p-1"
                width={25}
              />
            </span>
          </div>
          <input
            value={form.date}
            onChange={handleChange}
            placeholder="Enter Date"
            className="rounded-full border border-blue-500 w-full px-4 py-2"
            type="date"
            name="date"
            id="date"
            required
          />
          <button onClick={savePassword} className="flex justify-center items-center gap-2 bg-white rounded-full px-4 py-2 w-fit border-2 hover:bg-blue-200 border-blue-900">
            <lord-icon
              src="https://cdn.lordicon.com/hqymfzvj.json"
              trigger="hover"
              className="w-6 h-6"
            ></lord-icon>
            Add Password
          </button>
        </div>

        <div className='passwords'>
          <h2 className='font-bold text-2xl py-4 flex items-center justify-center'>Your Passwords</h2>
          {passwordArray.length === 0 && <div className='text-2md py-4 flex items-center justify-center'>No Passwords to show</div>}
          {passwordArray.length !== 0 && (
            <div>
              {Object.keys(groupedPasswords).map((website, index) => (
                <details key={index} className="mb-4">
                  <summary className="cursor-pointer bg-blue-600 text-white border-2 border-black p-2 rounded flex justify-center items-center hover:bg-transparent hover:text-black">
                    {website}
                  </summary>

                  <table className="table-auto w-full rounded-md overflow-hidden mt-2">
                    <thead className='bg-transparent'>
                      <tr>
                        <th className='py-2'>Username</th>
                        <th className='py-2'>Password</th>
                        <th className='py-2'>Date Of Saving</th>
                        <th className='py-2'>Delete</th>
                      </tr>
                    </thead>
                    <tbody className='bg-blue-100'>
                      {sortedPasswordArray(groupedPasswords[website]).map((item, subIndex) => (
                        <tr key={subIndex}>
                          <td className='py-2 border-2 border-black text-center'>
                            {item.username}
                            <span className='ml-1 cursor-pointer' onClick={() => copyToClipboardUsername(item.username)}>
                              <lord-icon
                                src="https://cdn.lordicon.com/depeqmsz.json"
                                trigger="in"
                                delay="1500"
                                state="in-article"
                                style={{ width: '20px', height: '20px' }}
                              />
                            </span>
                          </td>
                          <td className='py-2 border-2 border-black text-center'>
                            {item.passwordMasked ? '******' : encryptPassword(item.password)}
                            <span className='ml-1 cursor-pointer' onClick={() => {
                              copyToClipboardPassword(item.password);
                              setPasswordArray(prev => prev.map(entry => entry === item ? { ...entry, passwordMasked: true } : entry));
                            }}>
                              <lord-icon
                                src="https://cdn.lordicon.com/depeqmsz.json"
                                trigger="in"
                                delay="1500"
                                state="in-article"
                                style={{ width: '20px', height: '20px' }}
                              />
                            </span>
                          </td>
                          <td className='py-2 border-2 border-black text-center'>{item.date}</td>
                          <td className='py-2 border-2 border-black text-center'>
                            <button onClick={() => deleteEntry(passwordArray.indexOf(item))} className="bg-transparent hover:bg-transparent text-white font-bold py-2 px-4 rounded-full">
                              <lord-icon
                                src="https://cdn.lordicon.com/wpyrrmcq.json"
                                trigger="morph"
                                state="morph-trash-full"
                                style={{ width: '20px', height: '20px' }}
                              />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </details>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
