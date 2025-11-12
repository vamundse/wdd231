const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const all = document.querySelector("#all");
const cse = document.querySelector("#cse");
const wdd = document.querySelector("#wdd");

all.addEventListener("click", () => {
  createCourseCard(courses);
});

cse.addEventListener("click", () => {
  createCourseCard(courses.filter(course => course.subject.includes("CSE")));
});

wdd.addEventListener("click", () => {
  createCourseCard(courses.filter(course => course.subject.includes("WDD")));
});

const courseList = document.querySelector("#courselist");
const coursePoints = document.querySelector("#points");
const courseDetails = document.querySelector("#course-details");

function createCourseCard(list) {
    courseList.innerHTML = '';

    list.forEach(course => {
        const courseDiv = document.createElement("div");
        const courseP = document.createElement("p");

        if (course.completed) {
            courseDiv.setAttribute("class", "course-card completed");
            courseP.innerHTML = `✅ ${course.subject} ${course.number}`;
        } else {
            courseDiv.setAttribute("class", "course-card");
            courseP.innerHTML = `❌ ${course.subject} ${course.number}`;
        }

        courseDiv.appendChild(courseP);
        courseDiv.addEventListener('click', () => {
            displayCourseDetails(course);
            courseDetails.showModal();
        });
        courseList.appendChild(courseDiv);
    });

    // Used reduce to calculate total credits
    const credits = list.reduce((total, course) => total + course.credits, 0);
    coursePoints.innerHTML = `The total credits for course listed above is ${credits}`;
};

createCourseCard(courses);

/********************* MODAL ******************/
const closeButton = document.querySelector("#close");

closeButton.addEventListener('click', () => {
    courseDetails.close();
});

const header = document.querySelector('#subject');
const title = document.querySelector('#title');
const credits = document.querySelector('#credits');
const certificate = document.querySelector('#certificate');
const description = document.querySelector('#description');
const tech = document.querySelector("#tech");

function displayCourseDetails(course) {
    header.innerHTML = `${course.subject} ${course.number}`;
    title.textContent = course.title;
    credits.innerHTML = `${course.credits} credits`;
    certificate.innerHTML = `Certificate: ${course.certificate}`;
    description.textContent = course.description;
    tech.innerHTML = `Technology: ${course.technology.join(', ')}`;
    }