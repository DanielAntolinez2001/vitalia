"use client"; // Indica que este componente es un cliente de React (Next.js 13).

import React, { useState } from "react";

// Definimos una interfaz para la configuración de pago.
interface PaymentInfo {
  bankName: string;
  accountHolder: string;
  expirationDate: string;
  cardNumber: string;
  cardType: string;
  billingAddress: string;
}

const PaymentSettings: React.FC = () => {
  // Estado para guardar la información de pago
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    bankName: "",
    accountHolder: "",
    expirationDate: "",
    cardNumber: "",
    cardType: "Visa", // Tipo de tarjeta por defecto
    billingAddress: "",
  });

  // Función para manejar los cambios en los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPaymentInfo({
      ...paymentInfo,
      [name]: value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Configuración de pago guardada correctamente.");
    // Aquí puedes agregar la lógica para guardar los datos o enviarlos a tu servidor
  };

  return (
    <div className="max-w-lg mx-auto p-6 font-sans">
      <h2 className="text-center text-2xl font-semibold mb-6">Configuración de Pago</h2>

      {/* Formulario para la configuración de pagos */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Campo para el nombre del banco */}
        <div className="mb-4">
          <label htmlFor="bankName" className="block text-black mb-1">
            Nombre del Banco:
          </label>
          <input
            type="text"
            id="bankName"
            name="bankName"
            value={paymentInfo.bankName}
            onChange={handleChange}
            className="mt-1 border border-black rounded w-full p-2"
            placeholder="Nombre del banco"
            required
          />
        </div>

        {/* Campo para el nombre del titular de la cuenta */}
        <div className="mb-4">
          <label htmlFor="accountHolder" className="block text-black mb-1">
            Nombre del Titular de la Cuenta:
          </label>
          <input
            type="text"
            id="accountHolder"
            name="accountHolder"
            value={paymentInfo.accountHolder}
            onChange={handleChange}
            className="mt-1 border border-black rounded w-full p-2"
            placeholder="Nombre completo del titular"
            required
          />
        </div>

        {/* Campo para el tipo de tarjeta */}
        <div className="mb-4">
          <label htmlFor="cardType" className="block text-black mb-1">
            Tipo de Tarjeta:
          </label>
          <select
            id="cardType"
            name="cardType"
            value={paymentInfo.cardType}
            onChange={handleChange}
            className="mt-1 border border-black rounded w-full p-2"
          >
            <option value="Visa">Visa</option>
            <option value="MasterCard">MasterCard</option>
            <option value="American Express">American Express</option>
            <option value="Discover">Discover</option>
          </select>
        </div>

        {/* Campo para el número de tarjeta */}
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-black mb-1">
            Número de Tarjeta:
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={handleChange}
            className="mt-1 border border-black rounded w-full p-2"
            placeholder="XXXX XXXX XXXX XXXX"
            maxLength={16}
            required
          />
        </div>

        {/* Campo para la fecha de vencimiento */}
        <div className="mb-4">
          <label htmlFor="expirationDate" className="block text-black mb-1">
            Fecha de Vencimiento:
          </label>
          <input
            type="month"
            id="expirationDate"
            name="expirationDate"
            value={paymentInfo.expirationDate}
            onChange={handleChange}
            className="mt-1 border border-black rounded w-full p-2"
            required
          />
        </div>

        {/* Campo para la dirección de facturación */}
        <div className="mb-4">
          <label htmlFor="billingAddress" className="block text-black mb-1">
            Dirección de Facturación:
          </label>
          <input
            type="text"
            id="billingAddress"
            name="billingAddress"
            value={paymentInfo.billingAddress}
            onChange={handleChange}
            className="mt-1 border border-black rounded w-full p-2"
            placeholder="Dirección completa de facturación"
            required
          />
        </div>

        {/* Botón para enviar el formulario */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white hover:bg-blue-700 py-2 rounded"
          >
            Guardar Información de Pago
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentSettings;
