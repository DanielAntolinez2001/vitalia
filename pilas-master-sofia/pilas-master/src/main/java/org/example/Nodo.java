package org.example;

/**
 * Nodo genérico para estructuras enlazadas.
 * @param <T> tipo del valor almacenado en el nodo
 */
public class Nodo<T> {
    public T valor;
    public Nodo<T> siguiente;

    public Nodo(T valor) {
        this.valor = valor;
        this.siguiente = null;
    }
}
