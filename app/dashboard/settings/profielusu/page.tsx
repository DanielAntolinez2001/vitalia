"use client"; // Indica que este componente es un cliente de React (Next.js 13).

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
    role: "Usuario", // El rol siempre es "Usuario"
  });

  const [alert, setAlert] = useState<string | null>(null); // Estado para las alertas
  const [activities] = useState([
    "Inicio de sesión el 15/11/2024",
    "Cambio de correo electrónico el 14/11/2024",
    "Actualización de perfil el 13/11/2024",
  ]); // Actividades de usuario (estático para demo)

  // Estado para controlar si se está mostrando el formulario de cambio de contraseña
  const [isResettingPassword, setIsResettingPassword] = useState<boolean>(false);

  // Estado para la nueva contraseña
  const [newPassword, setNewPassword] = useState<string>("");

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

  // Función para eliminar la cuenta (solo visual)
  const handleDeleteAccount = () => {
    alert("Cuenta eliminada");
    // Aquí normalmente enviarías una solicitud para eliminar la cuenta
  };

  // Función para restablecer la contraseña
  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword) {
      alert("Contraseña restablecida exitosamente.");
      setIsResettingPassword(false); // Ocultar el formulario después de un restablecimiento exitoso
    } else {
      alert("Por favor ingrese una nueva contraseña.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 font-sans">
      <h2 className="text-center text-black text-2xl font-semibold mb-4">Configuración de Perfil</h2>

      {/* Sección de Foto de perfil y botón para cambiar */}
      <div className="border border-black bg-white shadow-md rounded-lg p-4">
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

        {/* Botón de eliminación de cuenta */}
        <div className="mt-4 flex justify-between">
          <button onClick={handleDeleteAccount} className="px-4 py-2 border border-red-600 bg-red-100 text-red-600 hover:bg-red-200 rounded">
            Eliminar Cuenta
          </button>
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

        {/* Restablecer Contraseña */}
        {isResettingPassword ? (
          <div className="mt-6 p-4 border border-yellow-500 bg-yellow-100 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Restablecer Contraseña</h3>
            <p className="mb-4 text-sm text-gray-700">Por favor, ingresa tu nueva contraseña.</p>
            <form onSubmit={handleResetPassword}>
              <div className="mb-4">
                <label htmlFor="newPassword" className="block mb-1 text-gray-600">Nueva Contraseña:</label>
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="mt-1 border border-black rounded w-full p-2"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-600 text-white hover:bg-yellow-700 py-2 rounded"
              >
                Restablecer Contraseña
              </button>
            </form>
          </div>
        ) : (
          <button
            onClick={() => setIsResettingPassword(true)}
            className="w-full bg-yellow-600 text-white hover:bg-yellow-700 py-2 rounded mt-4"
          >
            Restablecer Contraseña
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileSettings;
