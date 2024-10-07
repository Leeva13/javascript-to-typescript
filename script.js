// Крок 1: Визначення базових типів
// Крок 3: Робота з масивами даних
// Масиви даних
var professors = [];
var classrooms = [];
var courses = [];
var schedule = [];
// Функція для додавання професора
function addProfessor(professor) {
    professors.push(professor);
}
// Функція для додавання заняття
function addLesson(lesson) {
    // Перевіряємо на конфлікт часу з існуючим розкладом
    var hasConflict = schedule.some(function (existingLesson) {
        return existingLesson.dayOfWeek === lesson.dayOfWeek &&
            existingLesson.timeSlot === lesson.timeSlot &&
            (existingLesson.classroomNumber === lesson.classroomNumber ||
                existingLesson.professorId === lesson.professorId);
    });
    if (!hasConflict) {
        schedule.push(lesson);
        return true; // Заняття успішно додано
    }
    return false; // Конфлікт, заняття не додано
}
// Крок 4: Функції пошуку та фільтрації
// Функція для пошуку вільних аудиторій
function findAvailableClassrooms(timeSlot, dayOfWeek) {
    // Знаходимо всі зайняті аудиторії в цей час
    var occupiedClassrooms = schedule
        .filter(function (lesson) { return lesson.timeSlot === timeSlot && lesson.dayOfWeek === dayOfWeek; })
        .map(function (lesson) { return lesson.classroomNumber; });
    // Повертаємо аудиторії, які не зайняті
    return classrooms
        .filter(function (classroom) { return !occupiedClassrooms.includes(classroom.number); })
        .map(function (classroom) { return classroom.number; });
}
// Функція для отримання розкладу професора
function getProfessorSchedule(professorId) {
    return schedule.filter(function (lesson) { return lesson.professorId === professorId; });
}
// Функція для валідації заняття
function validateLesson(lesson) {
    // Перевіряємо на конфлікт з іншим заняттям у цей час
    for (var _i = 0, schedule_1 = schedule; _i < schedule_1.length; _i++) {
        var existingLesson = schedule_1[_i];
        if (existingLesson.dayOfWeek === lesson.dayOfWeek && existingLesson.timeSlot === lesson.timeSlot) {
            if (existingLesson.classroomNumber === lesson.classroomNumber) {
                return {
                    type: "ClassroomConflict",
                    lessonDetails: existingLesson
                };
            }
            if (existingLesson.professorId === lesson.professorId) {
                return {
                    type: "ProfessorConflict",
                    lessonDetails: existingLesson
                };
            }
        }
    }
    return null; // Конфліктів немає
}
// Крок 6: Аналіз та звіти
// Функція для розрахунку відсотка використання аудиторії
function getClassroomUtilization(classroomNumber) {
    var totalSlots = 5 * 5; // 5 днів на тиждень по 5 тайм-слотів кожного дня
    var occupiedSlots = schedule.filter(function (lesson) { return lesson.classroomNumber === classroomNumber; }).length;
    return (occupiedSlots / totalSlots) * 100;
}
// Функція для знаходження найпопулярнішого типу занять
function getMostPopularCourseType() {
    var typeCount = {
        Lecture: 0,
        Seminar: 0,
        Lab: 0,
        Practice: 0
    };
    // Підраховуємо кількість кожного типу заняття
    schedule.forEach(function (lesson) {
        var course = courses.find(function (course) { return course.id === lesson.courseId; });
        if (course) {
            typeCount[course.type]++;
        }
    });
    // Знаходимо тип з найбільшою кількістю занять
    return Object.keys(typeCount).reduce(function (a, b) {
        return typeCount[a] > typeCount[b] ? a : b;
    });
}
// Крок 7: Модифікація даних
// Функція для зміни аудиторії заняття
function reassignClassroom(lessonId, newClassroomNumber) {
    var lesson = schedule.find(function (lesson) { return lesson.courseId === lessonId; });
    if (lesson) {
        // Перевіряємо, чи не зайнята нова аудиторія в цей же час
        var conflict_1 = schedule.some(function (existingLesson) {
            return existingLesson.dayOfWeek === lesson.dayOfWeek &&
                existingLesson.timeSlot === lesson.timeSlot &&
                existingLesson.classroomNumber === newClassroomNumber;
        });
        if (!conflict_1) {
            lesson.classroomNumber = newClassroomNumber;
            return true; // Зміна успішна
        }
    }
    return false; // Конфлікт або заняття не знайдено
}
// Функція для скасування заняття
function cancelLesson(lessonId) {
    var lessonIndex = schedule.findIndex(function (lesson) { return lesson.courseId === lessonId; });
    if (lessonIndex !== -1) {
        schedule.splice(lessonIndex, 1); // Видаляємо заняття з розкладу
    }
}


// Приклад використання: Крок 4 Функції пошуку та фільтрації
// Додаємо деяких професорів
addProfessor({ id: 1, name: "John Doe", department: "Computer Science" });
addProfessor({ id: 2, name: "Jane Smith", department: "Mathematics" });
// Шукаємо доступні аудиторії на 8:30-10:00 у понеділок
var availableClassrooms = findAvailableClassrooms("8:30-10:00", "Monday");
console.log(availableClassrooms); // Виведе номери доступних аудиторій


// Отримуємо розклад професора John Doe
var johnDoeSchedule = getProfessorSchedule(1);
console.log(johnDoeSchedule); // Виведе масив занять професора


// Приклад використання: Крок 5 Обробка конфліктів та валідація
// Створюємо нове заняття
var newLesson = {
    courseId: 1,
    professorId: 1,
    classroomNumber: "101",
    dayOfWeek: "Monday",
    timeSlot: "8:30-10:00"
};
// Перевіряємо заняття на конфлікти
const conflict = validateLesson(newLesson);
if (conflict) {
    console.log(`Конфлікт: ${conflict.type} під час ${conflict.lessonDetails.timeSlot}`);
} else {
    console.log("Заняття можна додати");
}


// Приклад використання: Крок 6: Аналіз та звіти
// Розрахунок використання аудиторії 101
const utilization = getClassroomUtilization("101");
console.log(`Використання аудиторії 101: ${utilization}%`);


// Найпопулярніший тип заняття
const popularCourseType = getMostPopularCourseType();
console.log(`Найпопулярніший тип заняття: ${popularCourseType}`);


// Приклад використання: Крок 7: Модифікація даних
// Спроба змінити аудиторію для заняття з id 1 на нову аудиторію 102
const reassigned = reassignClassroom(1, "102");
console.log(reassigned ? "Аудиторію змінено успішно" : "Не вдалося змінити аудиторію");


// Скасування заняття з id 1
cancelLesson(1);
console.log("Заняття скасовано");
