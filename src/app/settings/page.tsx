import ThemeToggle from "@/components/ThemeToggle";


const Settings = () => {
  return (
    <div className="min-h-screen  dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-center justify-center">
      <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg w-full max-w-md">
        <h1 className="text-2xl mb-4">Settings</h1>
        <div className="space-y-6">
          {/* Profile Settings */}
          <section>
            <h2 className="text-xl mb-2">Profile Settings</h2>
            <div className="space-y-2">
              <button className="block w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded ">Change Profile Picture</button>
              <button className="block w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded ">Update Bio</button>
              <button className="block w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded ">Change Username</button>
              <button className="block w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded ">Change Password</button>
            </div>
          </section>
          {/* Theme Settings */}
           <section>
            <h2 className="text-xl mb-2">Theme Settings</h2>
          <div className="flex items-center justify-between">
            <span>Theme</span>
            <ThemeToggle />
          </div>
          </section>
          {/* Future settings options can be added here */}
        </div>
      </div>
    </div>
  );
};

export default Settings;

// import ThemeToggle from "@/components/ThemeToggle";



// const Settings = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex items-center justify-center ">
//       <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg w-full max-w-2xl ">
//         <h1 className="text-2xl mb-4">Settings</h1>
//         <div className="space-y-6">
//           {/* Profile Settings */}
//           <section>
//             <h2 className="text-xl mb-2">Profile Settings</h2>
//             <div className="space-y-2">
//               <button className="block w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded ">Change Profile Picture</button>
//               <button className="block w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded ">Update Bio</button>
//               <button className="block w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded ">Change Username</button>
//               <button className="block w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded ">Change Password</button>
//             </div>
//           </section>
          
//           {/* Privacy Settings */}
//           <section>
//             <h2 className="text-xl mb-2">Privacy Settings</h2>
//             <div className="space-y-2">
//               <button className="block w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded ">Account Privacy</button>
//               <button className="block w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded ">Blocked Accounts</button>
//               <button className="block w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded ">Activity Status</button>
//             </div>
//           </section>
          
//           {/* Notification Settings */}
//           <section>
//             <h2 className="text-xl mb-2">Notification Settings</h2>
//             <div className="space-y-2">
//               <button className="block w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded ">Email Notifications</button>
//               <button className="block w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded ">Push Notifications</button>
//               <button className="block w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded ">In-App Notifications</button>
//             </div>
//           </section>
          
//           {/* Theme Settings */}
//           <section>
//             <h2 className="text-xl mb-2">Theme Settings</h2>
//             <ThemeToggle />
//           </section>
          
//           {/* Language Settings */}
//           <section>
//             <h2 className="text-xl mb-2">Language Settings</h2>
//             <button className="block w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded ">Change Language</button>
//           </section>
          
//           {/* Account Management */}
//           <section>
//             <h2 className="text-xl mb-2">Account Management</h2>
//             <div className="space-y-2">
//               <button className="block w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded ">Delete Account</button>
//               <button className="block w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded ">Deactivate Account</button>
//               <button className="block w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded ">Linked Accounts</button>
//             </div>
//           </section>
          
//           {/* Security Settings */}
//           <section>
//             <h2 className="text-xl mb-2">Security Settings</h2>
//             <div className="space-y-2">
//               <button className="block w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded ">Two-Factor Authentication</button>
//               <button className="block w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded ">Login Activity</button>
//             </div>
//           </section>
          
//           {/* Data and Privacy */}
//           <section>
//             <h2 className="text-xl mb-2">Data and Privacy</h2>
//             <div className="space-y-2">
//               <button className="block w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded ">Download Data</button>
//               <button className="block w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded ">Clear Search History</button>
//               <button className="block w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded ">Ad Preferences</button>
//             </div>
//           </section>
          
//           {/* Help and Support */}
//           <section>
//             <h2 className="text-xl mb-2">Help and Support</h2>
//             <div className="space-y-2">
//               <button className="block w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded ">Help Center</button>
//               <button className="block w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded ">Report a Problem</button>
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Settings;


