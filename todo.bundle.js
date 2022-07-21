"use strict";
(self["webpackChunkodin_todo_list"] = self["webpackChunkodin_todo_list"] || []).push([["todo"],{

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Todo = (id, title, duedate, project, completeStatus) => {
    const todoId = id;
    let todoTitle = title;
    let todoDuedate = duedate;
    let todoProject = project;
    let todoCompleteStatus = completeStatus;
    
    const getId = () => todoId;
    const getTitle = () => todoTitle;
    const getDuedate = () => todoDuedate;
    const getProject = () => todoProject;
    const getStatus = () => todoCompleteStatus;

    const setTitle = newTitle => {
        todoTitle = newTitle;
    }

    const setDuedate = newDuedate => {
        todoDuedate = newDuedate;
    }

    const setProject = newProject => {
        todoProject = newProject;
    }

    const setComplete = () => {
        todoCompleteStatus = true;
    } 

    const description = () => `Id: ${todoId} Title: ${todoTitle}, Due date: ${todoDuedate}, Project: ${todoProject}, Complete status: ${todoCompleteStatus}`;
    
    const toJSON = () => {
        return { todoId, todoTitle, todoDuedate, todoProject, todoCompleteStatus }
    }
    
    return { 
        getId,
        getTitle, 
        getDuedate,
        getProject,
        getStatus,
        setTitle,
        setDuedate,
        setProject,
        setComplete,
        description,
        toJSON
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/todo.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDLFFBQVEsU0FBUyxVQUFVLGNBQWMsWUFBWSxhQUFhLFlBQVkscUJBQXFCLG1CQUFtQjtBQUMzSjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy90b2RvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvZG8gPSAoaWQsIHRpdGxlLCBkdWVkYXRlLCBwcm9qZWN0LCBjb21wbGV0ZVN0YXR1cykgPT4ge1xuICAgIGNvbnN0IHRvZG9JZCA9IGlkO1xuICAgIGxldCB0b2RvVGl0bGUgPSB0aXRsZTtcbiAgICBsZXQgdG9kb0R1ZWRhdGUgPSBkdWVkYXRlO1xuICAgIGxldCB0b2RvUHJvamVjdCA9IHByb2plY3Q7XG4gICAgbGV0IHRvZG9Db21wbGV0ZVN0YXR1cyA9IGNvbXBsZXRlU3RhdHVzO1xuICAgIFxuICAgIGNvbnN0IGdldElkID0gKCkgPT4gdG9kb0lkO1xuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdG9kb1RpdGxlO1xuICAgIGNvbnN0IGdldER1ZWRhdGUgPSAoKSA9PiB0b2RvRHVlZGF0ZTtcbiAgICBjb25zdCBnZXRQcm9qZWN0ID0gKCkgPT4gdG9kb1Byb2plY3Q7XG4gICAgY29uc3QgZ2V0U3RhdHVzID0gKCkgPT4gdG9kb0NvbXBsZXRlU3RhdHVzO1xuXG4gICAgY29uc3Qgc2V0VGl0bGUgPSBuZXdUaXRsZSA9PiB7XG4gICAgICAgIHRvZG9UaXRsZSA9IG5ld1RpdGxlO1xuICAgIH1cblxuICAgIGNvbnN0IHNldER1ZWRhdGUgPSBuZXdEdWVkYXRlID0+IHtcbiAgICAgICAgdG9kb0R1ZWRhdGUgPSBuZXdEdWVkYXRlO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFByb2plY3QgPSBuZXdQcm9qZWN0ID0+IHtcbiAgICAgICAgdG9kb1Byb2plY3QgPSBuZXdQcm9qZWN0O1xuICAgIH1cblxuICAgIGNvbnN0IHNldENvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICB0b2RvQ29tcGxldGVTdGF0dXMgPSB0cnVlO1xuICAgIH0gXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9ICgpID0+IGBJZDogJHt0b2RvSWR9IFRpdGxlOiAke3RvZG9UaXRsZX0sIER1ZSBkYXRlOiAke3RvZG9EdWVkYXRlfSwgUHJvamVjdDogJHt0b2RvUHJvamVjdH0sIENvbXBsZXRlIHN0YXR1czogJHt0b2RvQ29tcGxldGVTdGF0dXN9YDtcbiAgICBcbiAgICBjb25zdCB0b0pTT04gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7IHRvZG9JZCwgdG9kb1RpdGxlLCB0b2RvRHVlZGF0ZSwgdG9kb1Byb2plY3QsIHRvZG9Db21wbGV0ZVN0YXR1cyB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7IFxuICAgICAgICBnZXRJZCxcbiAgICAgICAgZ2V0VGl0bGUsIFxuICAgICAgICBnZXREdWVkYXRlLFxuICAgICAgICBnZXRQcm9qZWN0LFxuICAgICAgICBnZXRTdGF0dXMsXG4gICAgICAgIHNldFRpdGxlLFxuICAgICAgICBzZXREdWVkYXRlLFxuICAgICAgICBzZXRQcm9qZWN0LFxuICAgICAgICBzZXRDb21wbGV0ZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIHRvSlNPTlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kbzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=