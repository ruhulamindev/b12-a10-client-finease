import React, { useState } from "react";
import { useAuth } from "../contexts/useAuth";
/* eslint-disable-next-line no-unused-vars */
import { useSpring, animated } from "@react-spring/web";
import LoadingSpinner from "../components/LoadingSpinner";

const Profile = () => {
  const { user, updateUserProfile } = useAuth();
  const [editing, setEditing] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [saving, setSaving] = useState(false);

  const animation = useSpring({
    opacity: editing ? 1 : 0,
    transform: editing ? `scale(1)` : `scale(0.8)`,
    config: { tension: 200, friction: 20 },
  });

  const handleUpdate = async (e) => {
    e.preventDefault();
    setSaving(true);
    await updateUserProfile({ displayName, photoURL });
    setSaving(false);
    setEditing(false);
  };
  return (
    <div className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 min-h-screen flex flex-col items-center justify-center p-6">
      <div className="bg-gradient-to-r from-green-200 via-blue-200 to-purple-300 shadow-md rounded-xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-purple-800">
          My Profile
        </h1>

        <div className="flex flex-col items-center mb-4">
          <img
            src={user?.photoURL || "https://i.ibb.co/ZYW3VTp/brown-brim.png"}
            alt="avatar"
            className="w-24 h-24 rounded-full border-green-500 rounded-full border-2 mb-2"
          />
          <p className="text-lg font-bold">{user?.displayName || "No Name"}</p>
          <p className="text-gray-800">{user?.email}</p>
        </div>

        {!editing && (
          <button
            onClick={() => setEditing(true)}
            className="btn btn-primary w-full bg-green-500 border-none"
          >
            Update Profile
          </button>
        )}

        {editing && (
          <animated.div
            style={animation}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
              <h2 className="text-xl font-bold mb-4 text-center text-purple-800">
                Update Profile
              </h2>

              <form onSubmit={handleUpdate} className="space-y-4">
                <div>
                  <label className="block text-gray-700">Display Name</label>
                  <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Photo URL</label>
                  <input
                    type="text"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="btn btn-success flex-1 bg-purple-500 border-none"
                    disabled={saving}
                  >
                    {saving ? <LoadingSpinner /> : "Save"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditing(false)}
                    className="btn btn-outline flex-1"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </animated.div>
        )}
      </div>
    </div>
  );
};

export default Profile;
