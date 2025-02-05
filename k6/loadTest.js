import http from 'k6/http';
import { check, sleep } from 'k6';

// Définition des options pour le test de charge
export const options = {
  stages: [
    { duration: '10s', target: 50 }, // Simule 50 utilisateurs pendant 10 secondes
    { duration: '30s', target: 50 }, // Maintient 50 utilisateurs pendant 30 secondes
    { duration: '10s', target: 0 },  // Réduit progressivement le nombre d'utilisateurs
  ],
};

export default function () {
  // L'URL de la page que tu veux tester (par exemple, index.html)
  const url = 'http://localhost:3000';  // Adapte à ton serveur local ou de production

  // Effectuer une requête GET pour récupérer la page HTML
  const res = http.get(url);

  // Vérification que la réponse est réussie (code 200)
  check(res, {
    'Page chargée correctement': (r) => r.status === 200,
  });

  sleep(1); // Pause de 1 seconde entre chaque requête
}
