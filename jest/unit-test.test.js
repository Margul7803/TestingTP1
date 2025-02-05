// Importer des bibliothèques nécessaires
const { JSDOM } = require('jsdom');

// Tester la fonction addTask et removeTask
describe('Gestion des tâches', () => {
  let dom;
  let document;
  let taskInput;
  let addButton;
  let taskList;

  beforeEach(() => {
    // Initialiser un environnement DOM simulé avec jsdom
    dom = new JSDOM(`
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Gestion de tâches</title>
      </head>
      <body>
        <h1>Gestion de tâches</h1>
        <input type="text" id="taskInput" placeholder="Ajouter une tâche">
        <button id="addButton">Ajouter</button>
        <div class="task-container" id="taskList"></div>
      </body>
      </html>
    `);

    // Récupérer les éléments du DOM simulé
    document = dom.window.document;
    taskInput = document.getElementById('taskInput');
    addButton = document.getElementById('addButton');
    taskList = document.getElementById('taskList');

    // Attacher la fonction addTask au bouton
    addButton.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (taskText === '') return;

      const taskItem = document.createElement('div');
      taskItem.className = 'task-item';
      taskItem.innerHTML = `<span>${taskText}</span> <button class="remove-btn">Supprimer</button>`;
      taskList.appendChild(taskItem);
      taskInput.value = '';
    });
  });

  test('ajouter une tâche', () => {
    // Simuler l'ajout d'une tâche
    taskInput.value = 'Nouvelle tâche';
    addButton.click();

    // Vérifier que la tâche a été ajoutée à la liste
    const taskItems = taskList.getElementsByClassName('task-item');
    expect(taskItems.length).toBe(1);
    expect(taskItems[0].textContent).toContain('Nouvelle tâche');
  });

  test('ne pas ajouter une tâche vide', () => {
    // Simuler l'ajout d'une tâche vide
    taskInput.value = '';
    addButton.click();

    // Vérifier que la tâche n'a pas été ajoutée
    const taskItems = taskList.getElementsByClassName('task-item');
    expect(taskItems.length).toBe(0);
  });

  test('supprimer une tâche', () => {
    // Simuler l'ajout d'une tâche
    taskInput.value = 'Tâche à supprimer';
    addButton.click();

    // Vérifier que la tâche est dans la liste
    const taskItems = taskList.getElementsByClassName('task-item');
    expect(taskItems.length).toBe(1);

    // Simuler la suppression de la tâche
    const removeButton = taskItems[0].querySelector('.remove-btn');
    removeButton.click();

    // Vérifier que la tâche a été supprimée
    expect(taskList.getElementsByClassName('task-item').length).toBe(0);
  });
});
