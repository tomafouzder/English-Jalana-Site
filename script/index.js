const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all") // promise of response
        .then(res => res.json()) //promise of json data
        .then(json => displayLesson(json.data));
};

const displayLesson = (lessons) => {
    // 1.get the container & empty
    const levelContainer = document.getElementById('level-container');
    levelContainer.innerHTML = '';

    // 2. get into every lessons
    for (let lesson of lessons) {
        console.log(lesson);
        //         3. create Element
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = ` <button class="btn btn-outline btn-primary">
                            <i class="fa-solid fa-book-open"></i>
                            Lesson - ${lesson.level_no}</button>
`;

        //         4. append into container
        levelContainer.append(btnDiv);
    };

}
loadLessons();