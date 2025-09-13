const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all") // promise of response
        .then(res => res.json()) //promise of json data
        .then(json => displayLesson(json.data));
};
//.......... lesson word box container section start here..........//
const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayLevelWord(data.data));
};

const displayLevelWord = (words) => {
    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = "";

//     {
//     "id": 82,
//     "level": 1,
//     "word": "Car",
//     "meaning": "গাড়ি",
//     "pronunciation": "কার"
// }

    words.forEach((word) => {
        console.log(word);
        const card = document.createElement("div");
        card.innerHTML = `
        <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">

            <h2 class="font-bold text-2xl">${word.word}</h2>
            <p class="font-semibold">Meaning /Pronounciation</p>
            <div class="font-medium text-xl font-bangla">"${word.meaning} / ${word.pronunciation}"</div>
            <div class="flex justify-between items-center">
                <button class="btn bg-[#1a91ff1a] hover:bg-[#1a91ff85]"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn bg-[#1a91ff1a] hover:bg-[#1a91ff85]"><i class="fa-solid fa-volume-high"></i></button>
            </div>

        </div>
        `;
        wordContainer.append(card);
    });
};


//.......... lesson button section start here..........//
const displayLesson = (lessons) => {
    // 1.get the container & empty
    const levelContainer = document.getElementById('level-container');
    levelContainer.innerHTML = '';

    // 2. get into every lessons
    for (let lesson of lessons) {
        // console.log(lesson);
        //         3. create Element
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = ` 
        <button onclick = "loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
        <i class="fa-solid fa-book-open"></i>
        Lesson - ${lesson.level_no}</button>
`;

        //         4. append into container
        levelContainer.append(btnDiv);
    };

}
loadLessons();