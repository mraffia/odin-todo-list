import './style.css';
import Todo from './todo.js';
import generatePage from './page.js';

function todoFinder(listOfProjects, project, id) {
    let todoIdx = 0;
    for (let i = 0; i < listOfProjects[project].length; i++) {
        if (listOfProjects[project][i].getId() === Number(id)) {
            todoIdx = i;
        }
    }
    return todoIdx;
}

function addTodo(listOfProjects, id, title, duedate = '', project = 'Inbox', completeStatus = false) {
    const newTodo = Todo(id, title, duedate, project, completeStatus);
    listOfProjects[project].push(newTodo);

    return newTodo;
}

function deleteTodo(listOfProjects, project, id) {
    let todoIdx = todoFinder(listOfProjects, project, id);

    let removedTodo = listOfProjects[project].splice(todoIdx, 1);
    return removedTodo;
}

function currentPage() {
    document.body.appendChild(generatePage());
}

currentPage();

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBbOivadG-ETaxuZV8zEG-iwQ29DpOgmrc",
  authDomain: "todolistmraffia.firebaseapp.com",
  projectId: "todolistmraffia",
  storageBucket: "todolistmraffia.appspot.com",
  messagingSenderId: "827418678562",
  appId: "1:827418678562:web:873248e2899da3f10bc17b",
  measurementId: "G-NDQMFECNC5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {
    addTodo,
    deleteTodo
}