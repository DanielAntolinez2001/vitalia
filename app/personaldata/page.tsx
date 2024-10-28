"use client";

import React, { useState } from "react";

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  birthday: string;  
}

const ProfileSettings: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    email: "",
    phone: "",
    birthday: "" 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Cambios guardados");
  };

  return (
    <div className="max-w-md mx-auto p-4 font-sans">
      <h2 className="text-center text-black text-2xl font-semibold mb-4">Configuración de Perfil</h2>

      <div className="border border-black bg-white shadow-md rounded-lg p-4">
        {/* Sección de foto de perfil */}
        <div className="flex flex-col items-center mb-4">
          <img
            src="/default-profile.png" 
            alt="Foto de perfil"
            className="w-24 h-24 rounded-full border border-black object-cover mb-2"
          />
          <button className="px-4 py-2 border border-black bg-transparent text-black hover:bg-gray-200 rounded">
            Cambiar foto
          </button>
        </div>

        {/* Formulario de información del perfil */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-black mb-1">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="mt-1 border border-black rounded w-full p-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-black mb-1">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="mt-1 border border-black rounded w-full p-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-black mb-1">Teléfono:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              className="mt-1 border border-black rounded w-full p-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="birthday" className="block text-black mb-1">Fecha de Cumpleaños:</label>
            <input
              type="date" // Tipo de input para un calendario desplegable.
              id="birthday"
              name="birthday"
              value={profile.birthday} // Valor del campo vinculado al estado.
              onChange={handleChange} // Maneja el cambio en el campo.
              className="mt-1 border border-black rounded w-full p-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white hover:bg-gray-800 py-2 rounded"
          >
            Guardar Cambios
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;
