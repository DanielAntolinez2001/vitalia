"use client"; // Indica que este componente es un cliente de React (Next.js 13).

import React, { useState } from "react";

// Definición de la interfaz para los datos del perfil del administrador y los usuarios.
interface UserProfile {
  name: string;
  email: string;
  phone: string;
  birthday: string;
  isActive: boolean;
  role: string;
  activities: string[];
}

interface AdminProfile {
  name: string;
  email: string;
  role: string;
}

const AdminProfileSettings: React.FC = () => {
  // Estado para el perfil del administrador
  const [adminProfile, setAdminProfile] = useState<AdminProfile>({
    name: "Administrador",
    email: "admin@example.com",
    role: "Administrador",
  });

  // Estado para gestionar los usuarios
  const [users, setUsers] = useState<UserProfile[]>([
    {
      name: "Usuario 1",
      email: "usuario1@example.com",
      phone: "123-456-789",
      birthday: "1990-01-01",
      isActive: true,
      role: "Usuario",
      activities: ["Inicio de sesión", "Actualización de perfil"],
    },
    {
      name: "Usuario 2",
      email: "usuario2@example.com",
      phone: "987-654-321",
      birthday: "1995-05-05",
      isActive: false,
      role: "Moderador",
      activities: ["Cambio de correo electrónico"],
    },
  ]);

  // Función para activar/desactivar cuentas de usuario
  const handleToggleUserStatus = (email: string) => {
    setUsers(users.map(user => 
      user.email === email ? { ...user, isActive: !user.isActive } : user
    ));
  };

  // Función para cambiar el rol de un usuario
  const handleRoleChange = (email: string, role: string) => {
    setUsers(users.map(user => 
      user.email === email ? { ...user, role } : user
    ));
  };

  // Función para mostrar o ocultar el historial de actividad de un usuario
  const handleShowActivity = (email: string) => {
    const user = users.find(user => user.email === email);
    if (user) {
      alert(`Historial de actividad para ${user.name}: ${user.activities.join(", ")}`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 font-sans">
      <h2 className="text-center text-black text-2xl font-semibold mb-4">Perfil de Administrador</h2>

      {/* Información del perfil del administrador */}
      <div className="border border-black bg-white shadow-md rounded-lg p-4 mb-6">
        <h3 className="text-lg font-semibold">Detalles del Administrador</h3>
        <div className="mt-4">
          <p><strong>Nombre:</strong> {adminProfile.name}</p>
          <p><strong>Correo Electrónico:</strong> {adminProfile.email}</p>
          <p><strong>Rol:</strong> {adminProfile.role}</p>
        </div>
      </div>

      {/* Gestión de usuarios */}
      <div className="border border-black bg-white shadow-md rounded-lg p-4 mb-6">
        <h3 className="text-lg font-semibold">Gestión de Usuarios</h3>
        <table className="min-w-full mt-4">
          <thead>
            <tr>
              <th className="border p-2">Nombre</th>
              <th className="border p-2">Correo Electrónico</th>
              <th className="border p-2">Estado</th>
              <th className="border p-2">Rol</th>
              <th className="border p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.email}>
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">
                  <button 
                    onClick={() => handleToggleUserStatus(user.email)}
                    className={`px-4 py-1 rounded ${user.isActive ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
                  >
                    {user.isActive ? "Activado" : "Desactivado"}
                  </button>
                </td>
                <td className="border p-2">{user.role}</td>
                <td className="border p-2 flex justify-around">
                  <button
                    onClick={() => handleShowActivity(user.email)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Ver Actividad
                  </button>
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user.email, e.target.value)}
                    className="bg-gray-100 p-1 rounded"
                  >
                    <option value="Usuario">Usuario</option>
                    <option value="Moderador">Moderador</option>
                    <option value="Administrador">Administrador</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Sección de asignación de roles */}
      <div className="border border-black bg-white shadow-md rounded-lg p-4 mb-6">
        <h3 className="text-lg font-semibold">Asignación de Roles y Permisos</h3>
        <div className="mt-4">
          <p>Como administrador, puedes asignar roles y permisos a otros usuarios. Actualmente, solo puedes asignar roles de "Moderador" o "Administrador".</p>
        </div>
      </div>

      {/* Historial de actividades de los usuarios */}
      <div className="border border-black bg-white shadow-md rounded-lg p-4 mb-6">
        <h3 className="text-lg font-semibold">Historial de Actividad</h3>
        <p>Revisa las actividades pasadas de los usuarios para identificar comportamientos inusuales o problemáticos.</p>
        <div className="mt-4">
          <button
            onClick={() => handleShowActivity("usuario1@example.com")}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Ver Actividad de Usuario 1
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminProfileSettings;
