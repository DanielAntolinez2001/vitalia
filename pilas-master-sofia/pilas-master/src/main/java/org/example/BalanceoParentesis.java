public class BalanceoParentesis {
    // Nodo genérico
    static class Nodo<T> {
        public T valor;
        public Nodo<T> siguiente;
        public Nodo(T valor) { this.valor = valor; }
    }

    // Pila genérica
    static class Pila<T> {
        private Nodo<T> cima;
        private int tamanio;

        public void push(T valor) {
            Nodo<T> nuevo = new Nodo<>(valor);
            nuevo.siguiente = cima;
            cima = nuevo;
            tamanio++;
        }

        public T pop() {
            if (isEmpty()) throw new RuntimeException("La pila está vacía");
            T valor = cima.valor;
            cima = cima.siguiente;
            tamanio--;
            return valor;
        }

        public boolean isEmpty() { return cima == null; }
        public int size() { return tamanio; }
    }

    // Método para verificar balanceo y contar
    public static void verificarParentesis(String expresion) {
        Pila<Character> pila = new Pila<>();

        int abiertos = 0;
        int cerrados = 0;
        boolean desbalanceado = false;

        for (char c : expresion.toCharArray()) {
            if (c == '(' || c == '[' || c == '{') {
                pila.push(c);
                abiertos++;
                System.out.println("Se abrió " + c + " -> abiertos: " + abiertos + ", cerrados: " + cerrados);
            } else if (c == ')' || c == ']' || c == '}') {
                cerrados++;
                if (pila.isEmpty()) {
                    desbalanceado = true; // cierre sin apertura
                } else {
                    char top = pila.pop();
                    if (!esPareja(top, c)) {
                        desbalanceado = true; // mal emparejado
                    }
                }
                System.out.println("Se cerró " + c + " -> abiertos: " + abiertos + ", cerrados: " + cerrados);
            }
        }

        // Si quedó algo en la pila o hubo errores, está desbalanceado
        if (!pila.isEmpty()) desbalanceado = true;

        System.out.println("\nResultado final:");
        System.out.println("Aperturas: " + abiertos);
        System.out.println("Cierres: " + cerrados);
        System.out.println("¿Balanceado? " + (!desbalanceado));
    }

    // Comprueba si apertura y cierre son pareja correcta
    private static boolean esPareja(char a, char b) {
        return (a == '(' && b == ')') ||
                (a == '[' && b == ']') ||
                (a == '{' && b == '}');
    }

    // Main de prueba
    public static void main(String[] args) {
        String exp1 = "(a+b)*(c-d)";
        String exp2 = "((a+b))(";
        String exp3 = "[{()}]";
        String exp4 = "([)]"; // mal emparejado

        System.out.println("Expresión: " + exp1);
        verificarParentesis(exp1);

        System.out.println("\nExpresión: " + exp2);
        verificarParentesis(exp2);

        System.out.println("\nExpresión: " + exp3);
        verificarParentesis(exp3);

        System.out.println("\nExpresión: " + exp4);
        verificarParentesis(exp4);
    }
}
