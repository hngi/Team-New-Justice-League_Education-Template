let progress = document.getElementById('progress');
let courses = document.getElementById("courses");
let complete = document.getElementById('complete');
let tutor = document.getElementById('tutor');
let profile = document.getElementById('profile');
/************dashboardClick*************/
let progressClick = document.getElementById("progressClick");
let coursesClick = document.getElementById('coursesClick');
let completeClick = document.getElementById('completeClick');
let tutorClick = document.getElementById('tutorClick');
let profileClick = document.getElementById('profileClick');

console.log("inside");

function renderProgress() {
    if (progress.classList.contains('d-none')) {
        progress.classList.replace('d-none', 'd-block');
    } else if (!progress.classList.contains('d-block')) {
        progress.classList.add('d-block');
    }
    if (courses.classList.contains('d-block')) {
        courses.classList.replace('d-block', 'd-none');
    }

    if (tutor.classList.contains('d-block')) {
        tutor.classList.replace('d-block', 'd-none');
    }
    if (profile.classList.contains('d-block')) {
        profile.classList.replace('d-block', 'd-none');
    }
    if (complete.classList.contains('d-block')) {
        complete.classList.replace('d-block', 'd-none');
    }
}

function renderCourses() {
    if (courses.classList.contains('d-none')) {
        courses.classList.replace('d-none', 'd-block');
    } else if (!courses.classList.contains('d-block')) {
        courses.classList.add('d-block');
    }
    if (progress.classList.contains('d-block')) {
        progress.classList.replace('d-block', 'd-none');
    }
    if (tutor.classList.contains('d-block')) {
        tutor.classList.replace('d-block', 'd-none');
    }
    if (profile.classList.contains('d-block')) {
        profile.classList.replace('d-block', 'd-none');
    }
    if (complete.classList.contains('d-block')) {
        complete.classList.replace('d-block', 'd-none');
    }

}
function renderComplete() {
    console.log('complete');
    if (complete.classList.contains('d-none')) {
        complete.classList.replace('d-none', 'd-block');
    } else if (!complete.classList.contains('d-block')) {
        complete.classList.add('d-block');
    }
    if (progress.classList.contains('d-block')) {
        progress.classList.replace('d-block', 'd-none');
    }
    if (tutor.classList.contains('d-block')) {
        tutor.classList.replace('d-block', 'd-none');
    }
    if (profile.classList.contains('d-block')) {
        profile.classList.replace('d-block', 'd-none');
    }
    if (courses.classList.contains('d-block')) {
        courses.classList.replace('d-block', 'd-none');
}
}
function renderTutor() {
    if (tutor.classList.contains('d-none')) {
        tutor.classList.replace('d-none', 'd-block');
    } else if (!tutor.classList.contains('d-block')) {
        tutor.classList.add('d-block');
    }
    if (progress.classList.contains('d-block')) {
        progress.classList.replace('d-block', 'd-none');
    }
    if (courses.classList.contains('d-block')) {
        courses.classList.replace('d-block', 'd-none');
    }
    if (profile.classList.contains('d-block')) {
        profile.classList.replace('d-block', 'd-none');
    }
    if (complete.classList.contains('d-block')) {
        complete.classList.replace('d-block', 'd-none');
}
}
function renderProfile() {
    if (profile.classList.contains('d-none')) {
        profile.classList.replace('d-none', 'd-block');
    } else if (!profile.classList.contains('d-block')) {
        profile.classList.add('d-block');
    }
    if (progress.classList.contains('d-block')) {
        progress.classList.replace('d-block', 'd-none');
    }
    if (tutor.classList.contains('d-block')) {
        tutor.classList.replace('d-block', 'd-none');
    }
    if (courses.classList.contains('d-block')) {
        courses.classList.replace('d-block', 'd-none');
    }
    if (complete.classList.contains('d-block')) {
        complete.classList.replace('d-block', 'd-none');
}
}

progressClick.addEventListener("click", renderProgress);
coursesClick.addEventListener("click", renderCourses);
completeClick.addEventListener("click", renderComplete);
tutorClick.addEventListener("click", renderTutor);
profileClick.addEventListener("click", renderProfile);
