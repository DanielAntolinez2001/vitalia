package org.example;

/**
 * Pila genérica implementada mediante nodos enlazados.
 * Todas las operaciones principales son O(1).
 *
 * @param <T> tipo de los elementos en la pila
 */
public class Pila<T> {
    private Nodo<T> cima;
    private int tamanio;

    public Pila() {
        this.cima = null;
        this.tamanio = 0;
    }

    /**
     * Inserta un elemento en la cima. O(1)
     */
    public void push(T valor) {
        Nodo<T> nuevo = new Nodo<>(valor);
        nuevo.siguiente = cima;
        cima = nuevo;
        tamanio++;
    }

    /**
     * Elimina y devuelve el elemento en la cima. O(1)
     * @throws RuntimeException si la pila está vacía.
     */
    public T pop() {
        if (isEmpty()) {
            throw new RuntimeException("La pila está vacía");
        }
        T valor = cima.valor;
        cima = cima.siguiente;
        tamanio--;
        return valor;
    }

    /**
     * Devuelve el valor en la cima sin quitarlo. O(1)
     * @throws RuntimeException si la pila está vacía.
     */
    public T peek() {
        if (isEmpty()) {
            throw new RuntimeException("La pila está vacía");
        }
        return cima.valor;
    }

    /**
     * Indica si la pila está vacía. O(1)
     */
    public boolean isEmpty() {
        return cima == null;
    }

    /**
     * Devuelve el número de elementos en la pila. O(1)
     */
    public int size() {
        return tamanio;
    }

    /**
     * Limpia la pila (opcional). O(1)
     */
    public void clear() {
        cima = null;
        tamanio = 0;
    }
}
