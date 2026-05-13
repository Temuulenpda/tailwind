import React from "react";
import authContent from "./Dasgal8data/data";
const AuthModal = ({ open, close, mode, switchMode }) => {
  const authtext = authContent[mode];
  if (!open) {
    return;
  }
  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center  px-4 py-8 bg-black/50  ">
      <div className="">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase text-orange-600">
              {authtext.eyebrow}
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              {authtext.title}
            </h2>
            <p className="mt-3 text-sm text-gray-600">{authtext.description}</p>
          </div>
          <button onClick={close} className="bg-orange-100 text-orange-800 hover:bg-orange-300 rounded-2xl py-2 px-4"> Close</button>
        </div>
        <form className="space-y-4">
          {authtext.fields.map((field) => (
            <label className="block" key={field.label}>
              <span className="mb-2 block text-sm font-semibold text-gray-700">
                {field.label}
              </span>
              <input
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-orange-500"
                type={field.type}
                placeholder={field.placeholder}
              />
            </label>
          ))}
          <button
            type="button"
            className="w-full rounded-2xl bg-orange-500 px-4 py-3 text-white transition hover:bg-orange-600"
          >
            {authtext.primaryLabel}
          </button>
        </form>
        <p className="mt-5 text-center text-sm text-gray-600">
          {authtext.secondaryText}
          <button
            onClick={switchMode}
            className="ml-4 font-semibold text-orange-600 hover:text-orange-700"
          >
            {authtext.secondaryAction}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;