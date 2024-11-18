"use client"; // Indica que este componente es un cliente de React (Next.js 13).

import Image from "next/image";
import React, { useState } from "react";

// Definición de la interfaz para los datos del perfil del usuario.
interface UserProfile {
  name: string;
  email: string;
  phone: string;
  birthday: string;
  isActive: boolean;
  role: string;
}

const ProfileSettings: React.FC = () => {
  // Estado que guarda los datos del perfil y su función de actualización.
  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    email: "",
    phone: "",
    birthday: "",
    isActive: true, // Estado por defecto: cuenta activa
    role: "Usuario",
  });

  const [alert, setAlert] = useState<string | null>(null); // Estado para las alertas
  const [activities] = useState([
    "Inicio de sesión el 15/11/2024",
    "Cambio de correo electrónico el 14/11/2024",
    "Actualización de perfil el 13/11/2024",
  ]); // Actividades de usuario (estático para demo)

  // Función que maneja los cambios en los campos del formulario.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  // Función que maneja el envío del formulario.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Cambios guardados");
  };

  // Función para activar/desactivar la cuenta
  const handleToggleStatus = () => {
    setProfile({
      ...profile,
      isActive: !profile.isActive,
    });
  };

  // Función para eliminar la cuenta (solo visual)
  const handleDeleteAccount = () => {
    alert("Cuenta eliminada");
    // Aquí normalmente enviarías una solicitud para eliminar la cuenta
  };

  // Función para cambiar el rol del usuario
  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProfile({
      ...profile,
      role: e.target.value,
    });
  };

  // Función para activar una alerta
  const triggerAlert = () => {
    setAlert("¡Alerta! Cuenta sospechosa detectada.");
  };

  // Función para restablecer la contraseña
  const handleResetPassword = () => {
    alert("Contraseña restablecida. Se ha enviado un enlace de restablecimiento al correo.");
  };

  return (
    <div className="max-w-md mx-auto p-4 font-sans">
      <h2 className="text-center text-black text-2xl font-semibold mb-4">Configuración de Perfil</h2>

      {/* Sección de Foto de perfil y botón para cambiar */}
      <div className="border border-black bg-white shadow-md rounded-lg p-4">
        <div className="flex flex-col items-center mb-4">
          <Image
            src="/default-profile.png"
            alt="Foto de perfil"
            className="w-24 h-24 rounded-full border border-black object-cover mb-2"
          />
          <button className="px-4 py-2 border border-black bg-transparent text-black hover:bg-gray-200 rounded">
            Cambiar foto
          </button>
        </div>

        {/* Formulario para editar perfil */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">Nombre:</label>
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
            <label htmlFor="email" className="block mb-1">Correo Electrónico:</label>
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
            <label htmlFor="phone" className="block mb-1">Teléfono:</label>
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
            <label htmlFor="birthday" className="block mb-1">Fecha de Cumpleaños:</label>
            <input
              type="date"
              id="birthday"
              name="birthday"
              value={profile.birthday}
              onChange={handleChange}
              className="mt-1 border border-black rounded w-full p-2"
            />
          </div>

          <button type="submit" className="w-full bg-black text-white hover:bg-gray-800 py-2 rounded">Guardar Cambios</button>
        </form>

        {/* Botones de administración */}
        <div className="mt-4 flex justify-between">
          <button onClick={handleToggleStatus} className="px-4 py-2 border border-black bg-transparent text-black hover:bg-gray-200 rounded">
            {profile.isActive ? "Desactivar Cuenta" : "Activar Cuenta"}
          </button>
          <button onClick={handleDeleteAccount} className="px-4 py-2 border border-red-600 bg-red-100 text-red-600 hover:bg-red-200 rounded">
            Eliminar Cuenta
          </button>
        </div>

        {/* Sección para cambiar rol */}
        <div className="mb-4 mt-4">
          <label htmlFor="role" className="block mb-1">Rol:</label>
          <select
            id="role"
            name="role"
            value={profile.role}
            onChange={handleRoleChange}
            className="mt-1 border border-black rounded w-full p-2"
          >
            <option value="Usuario">Usuario</option>
            <option value="Moderador">Moderador</option>
            <option value="Administrador">Administrador</option>
          </select>
        </div>

        {/* Historial de actividad */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Historial de Actividad:</h3>
          <ul className="list-disc pl-5">
            {activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>

        {/* Alertas */}
        {alert && <div className="bg-red-100 text-red-600 p-2 rounded mt-4">{alert}</div>}
        <button onClick={triggerAlert} className="mt-2 px-4 py-2 border border-red-600 bg-red-100 text-red-600 hover:bg-red-200 rounded">
          Activar Alerta de Cuenta Sospechosa
        </button>

        {/* Restablecer Contraseña */}
        <div className="mt-4">
          <button onClick={handleResetPassword} className="px-4 py-2 border border-yellow-600 bg-yellow-100 text-yellow-600 hover:bg-yellow-200 rounded">
            Restablecer Contraseña
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
