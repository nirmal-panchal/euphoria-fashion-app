import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react'
import {
  RiHome2Line,
  RiInformationLine,
  RiContactsLine,
  RiCloseLine,
  RiMenuLine,
} from 'react-icons/ri';

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const path = router.pathname;  
    const sidebarRef = useRef(null);
      const [theme, setTheme] = useState('dark'); // 'light' or 'dark'
    const [active, setActive] = useState(path)


    useEffect(() => {
        setActive(path === "/" ? "home" : path);
        const closeSidebar = (event) => {
                if (!sidebarRef.current || !sidebarRef.current.contains(event.target)) {
                    setOpen(false);
                }
        };
        window.addEventListener('click', closeSidebar);
        
        return () => {
            window.removeEventListener('click', closeSidebar);
        };
    }, [path]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
    }

    const sidebarClasses =
        theme === 'light'
          ? 'bg-white text-black'
          : 'bg-gray-800 text-white';

    const sidebarLinks = [
        { href: '/', label: 'Home', icon: <RiHome2Line /> },
        { href: '/about', label: 'About Us', icon: <RiInformationLine /> },
        { href: '/courses', label: 'Courses', icon: <RiInformationLine /> },
        { href: '/contact', label: 'Contact', icon: <RiContactsLine /> },
    ];


    return (
        <div ref={sidebarRef} >
            <button onClick={()=> setOpen(!open)} className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside className={`fixed top-0 right-0 z-50 w-64 h-screen transition-transform duration-300 ${open ? "sm:translate-x-0" : "translate-x-full"} `}>
                <div className={`h-full px-3 py-4 overflow-y-auto shadow-2xl ${sidebarClasses}`}>
                    <ul>
                        {sidebarLinks?.map(({href,label,icon},index)=>(
                            <Link href={href} key={index}>
                                <li className={`mb-2 py-2 px-4 ${
                                    active === href ? 'bg-slate-300 text-black font-semibold'
                                    : 'hover:bg-gray-700'
                                } rounded-md flex items-center`}>
                                    {icon && <span className='mr-2'>{icon}</span>}
                                </li>
                            </Link>
                        ))}
                        <Link href={"/"}>
                            <li className={`mb-2 py-2 px-4 ${active === "home" ? "bg-slate-300 text-black font-semibold" : "bg-gray-800 bg-opacity-80 text-white"}  shadow-sm bg-opacity-80 rounded-md`}>Home</li>
                        </Link>
                        <Link href={"#"}>
                            <li className={`mb-2 py-2 px-4 ${active === "/about" ? "bg-slate-300 text-black font-semibold" : "bg-gray-800 bg-opacity-80 text-white"} bg-gray-800 bg-opacity-80 text-white rounded-md`}>About Us</li>
                        </Link>
                        <Link href={"/courses"}>
                            <li className={`mb-2 py-2 px-4 ${active === "/courses" ? "bg-slate-300 text-black font-semibold" : "bg-gray-800 bg-opacity-80 text-white"} bg-gray-800 bg-opacity-80 text-white rounded-md`}>Courses</li>
                        </Link>
                        <Link href={"/contact"}>
                            <li className={`mb-2 py-2 px-4 ${active === "/contact" ? "bg-slate-300 text-black font-semibold" : "bg-gray-800 bg-opacity-80 text-white"} bg-gray-800 bg-opacity-80 text-white rounded-md`}>Contact</li>
                        </Link>
                        <li className='mb-2 py-3 w-full text-center bg-black text-white rounded-md'>Sign Up</li>
                        <li className='mb-2 py-3 w-full text-center border border-black rounded-md'>Login</li>
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default Sidebar

// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import { useEffect, useRef, useState } from 'react';
// import {
//   RiHome2Line,
//   RiInformationLine,
//   RiContactsLine,
//   RiCloseLine,
//   RiMenuLine,
// } from 'react-icons/ri';

// const Sidebar = () => {
//   const [open, setOpen] = useState(false);
//   const [theme, setTheme] = useState('light'); // 'light' or 'dark'
//   const router = useRouter();
//   const path = router.pathname;
//   const [active, setActive] = useState(path)
//   const sidebarRef = useRef(null);

//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//   };

//   useEffect(() => {
//             setActive(path === "/" ? "home" : path);
//             const closeSidebar = (event) => {
//                     if (!sidebarRef.current || !sidebarRef.current.contains(event.target)) {
//                         setOpen(false);
//                     }
//             };
//             window.addEventListener('click', closeSidebar);
            
//             return () => {
//                 window.removeEventListener('click', closeSidebar);
//             };
//         }, [path]);

//   const sidebarClasses =
//     theme === 'light'
//       ? 'bg-white text-black'
//       : 'bg-gray-800 text-white';

//   const sidebarLinks = [
//     { href: '/', label: 'Home', icon: <RiHome2Line /> },
//     { href: '/about', label: 'About Us', icon: <RiInformationLine /> },
//     { href: '/courses', label: 'Courses', icon: <RiInformationLine /> },
//     { href: '/contact', label: 'Contact', icon: <RiContactsLine /> },
//   ];

//   return (
//     <div className="relative" ref={sidebarRef}>
//       <button
//         onClick={() => setOpen(!open)}
//         className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none"
//       >
//         <span className="sr-only">Toggle sidebar</span>
//         {open ? (
//           <RiCloseLine className="w-6 h-6" />
//         ) : (
//           <RiMenuLine className="w-6 h-6" />
//         )}
//       </button>

//       <aside
//         className={`absolute top-0 right-0 z-50 w-64 h-screen transition-transform duration-300 ${
//           open ? 'sm:translate-x-0' : 'translate-x-full'
//         } ${sidebarClasses}`}
//       >
//         <div className="h-full px-3 py-4 overflow-y-auto shadow-2xl">
//           <ul>
//             {sidebarLinks.map(({ href, label, icon }, index) => (
//               <Link href={href} key={index}>
//                 <li
//                   className={`mb-2 py-2 px-4 ${
//                     active === href
//                       ? 'bg-slate-300 text-black font-semibold'
//                       : 'hover:bg-gray-700'
//                   } rounded-md flex items-center`}
//                 >
//                   {icon && <span className="mr-2">{icon}</span>}
//                   <span>{label}</span>
//                 </li>
//               </Link>
//             ))}
//             <li className="mb-2 py-3 w-full text-center hover:bg-gray-700 rounded-md">
//               Sign Up
//             </li>
//             <li className="mb-2 py-3 w-full text-center border border-black rounded-md hover:border-gray-700">
//               Login
//             </li>
//           </ul>
//         </div>
//       </aside>
      
//       <button
//         onClick={toggleTheme}
//         className={`absolute top-3 right-3 rounded-full w-8 h-8 flex items-center justify-center border-2 ${
//           theme === 'light' ? 'border-black' : 'border-white'
//         } bg-gray-200 hover:bg-gray-300 focus:outline-none`}
//       >
//         {theme === 'light' ? (
//           <span className="text-gray-800">🌞</span>
//         ) : (
//           <span className="text-gray-100">🌙</span>
//         )}
//       </button>
//     </div>
//   );
// };

// export default Sidebar;

