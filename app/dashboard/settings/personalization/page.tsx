'use client';

import { useState, useEffect } from 'react';

const PersonalizationPage = () => {
  const [theme, setTheme] = useState('light');
  const [showWorkout, setShowWorkout] = useState(true);
  const [showNutrition, setShowNutrition] = useState(true);
  const [reminder, setReminder] = useState('');
  const [motivation, setMotivation] = useState('¡Sigue adelante!');
  const [userProgress, setUserProgress] = useState({ weight: 70, goal: 'Bajar de peso' });

  // Cargar preferencias del almacenamiento local cuando se monta el componente
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedShowWorkout = localStorage.getItem('showWorkout');
    const savedShowNutrition = localStorage.getItem('showNutrition');
    const savedReminder = localStorage.getItem('reminder');
    const savedMotivation = localStorage.getItem('motivation');
    const savedProgress = localStorage.getItem('userProgress');

    if (savedTheme) setTheme(savedTheme);
    if (savedShowWorkout !== null) setShowWorkout(JSON.parse(savedShowWorkout));
    if (savedShowNutrition !== null) setShowNutrition(JSON.parse(savedShowNutrition));
    if (savedReminder) setReminder(savedReminder);
    if (savedMotivation) setMotivation(savedMotivation);
    if (savedProgress) setUserProgress(JSON.parse(savedProgress));
  }, []);

  // Guardar las preferencias en el almacenamiento local
  const savePreferences = () => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('showWorkout', JSON.stringify(showWorkout));
    localStorage.setItem('showNutrition', JSON.stringify(showNutrition));
    localStorage.setItem('reminder', reminder);
    localStorage.setItem('motivation', motivation);
    localStorage.setItem('userProgress', JSON.stringify(userProgress));
  };

  return (
    <div className={`container ${theme}`}>
      <h1 className="text-center">Personaliza tu Página de Inicio</h1>

      {/* Sección para elegir el tema */}
      <div className="theme-settings">
        <h3>Selecciona el Tema</h3>
        <button onClick={() => setTheme('light')} className="theme-button">
          Claro
        </button>
        <button onClick={() => setTheme('dark')} className="theme-button">
          Oscuro
        </button>
      </div>

      {/* Sección para mostrar/ocultar secciones */}
      <div className="section-settings">
        <h3>Secciones a Mostrar</h3>
        <label>
          <input
            type="checkbox"
            checked={showWorkout}
            onChange={() => setShowWorkout(!showWorkout)}
          />
          Mostrar Sección de Ejercicios
        </label>
        <label>
          <input
            type="checkbox"
            checked={showNutrition}
            onChange={() => setShowNutrition(!showNutrition)}
          />
          Mostrar Sección de Nutrición
        </label>
      </div>

      {/* Sección para recordatorios */}
      <div className="reminder-settings">
        <h3>Recordatorio Personalizado</h3>
        <textarea
          value={reminder}
          onChange={(e) => setReminder(e.target.value)}
          placeholder="Escribe tu recordatorio (Ej. ¡No olvides hacer ejercicio hoy!)"
        />
      </div>

      {/* Motivación diaria */}
      <div className="motivation-settings">
        <h3>Motivación Diaria</h3>
        <input
          type="text"
          value={motivation}
          onChange={(e) => setMotivation(e.target.value)}
          placeholder="Escribe tu frase motivacional"
        />
      </div>

      {/* Información de progreso del usuario */}
      <div className="user-progress">
        <h3>Progreso del Usuario</h3>
        <label>
          Peso Actual: 
          <input
            type="number"
            value={userProgress.weight}
            onChange={(e) => setUserProgress({ ...userProgress, weight: parseInt(e.target.value) })}
            placeholder="Peso en kg"
          />
        </label>
        <label>
          Objetivo: 
          <input
            type="text"
            value={userProgress.goal}
            onChange={(e) => setUserProgress({ ...userProgress, goal: e.target.value })}
            placeholder="Objetivo (Ej. Bajar de peso)"
          />
        </label>
      </div>

      {/* Botón para guardar preferencias */}
      <button onClick={savePreferences} className="save-button">
        Guardar Preferencias
      </button>

      {/* Secciones dinámicas basadas en las preferencias */}
      <div className="user-dashboard">
        {showWorkout && (
          <div className="workout-section">
            <h3>Tu Rutina de Ejercicio</h3>
            <p>Aquí va el contenido de los ejercicios.</p>
          </div>
        )}
        {showNutrition && (
          <div className="nutrition-section">
            <h3>Recomendaciones de Nutrición</h3>
            <p>Aquí va el contenido de nutrición.</p>
          </div>
        )}
      </div>

      <style jsx>{`
        /* Estilos básicos */
        .container {
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        .theme-settings, .section-settings, .reminder-settings, .motivation-settings, .user-progress {
          margin-bottom: 20px;
        }

        .theme-button, .save-button {
          padding: 10px;
          margin-right: 10px;
          cursor: pointer;
        }

        .save-button {
          background-color: #4CAF50;
          color: white;
          border: none;
        }

        .save-button:hover {
          background-color: #45a049;
        }

        .user-dashboard {
          margin-top: 20px;
        }

        .workout-section, .nutrition-section {
          margin-top: 20px;
        }

        .light {
          background-color: white;
          color: black;
        }

        .dark {
          background-color: #333;
          color: white;
        }

        .text-center {
          text-align: center;
        }

        textarea, input[type="text"], input[type="number"] {
          width: 100%;
          padding: 8px;
          margin-top: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default PersonalizationPage;
