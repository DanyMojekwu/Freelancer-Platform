import React from "react";

const Profile = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Profile</h2>
      <form className="mt-4 space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input type="text" className="w-full border p-2 rounded-md" placeholder="Your Name" />
        </div>
        <div>
          <label className="block text-sm font-medium">Portfolio Link</label>
          <input type="text" className="w-full border p-2 rounded-md" placeholder="Portfolio URL" />
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Save</button>
      </form>
    </div>
  );
};

export default Profile;
