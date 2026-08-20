var student1 = "Adil"
var student2 = "Ahmed"

var students = ["Hibban", "Affan", "Farhan"]

// console.log(students[1])

// students[3] = "Haris"
// students[4] = ""

// console.log(students)

// window.alert("Hello")

students.pop()
students.push("Omar", "Ash")

students.shift()
students.unshift("Arsalan")

console.log(students)

students.splice(1, 2, "Muzammil", "Alyan")

console.log(students)

var copyarr = students.slice(0, 1)

console.log(copyarr)