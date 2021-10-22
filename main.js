const allUser = [
    {
        nome: "Fabio Pacifici",
        role: "Teacher",
        image: "https//picsum.photos/id/1025/300/300"
    },

    {
        nome: "Fabiola Gardin",
        role: "Tutor",
        image: "https//picsum.photos/id/1025/300/300"
    },

    {
        nome: "Tiziano Nicolai",
        role: "Tutor",
        image: "https//picsum.photos/id/1025/300/300"
    },

    {
        nome: "Baby Yoda",
        role: "Mascotte",
        image: "https//picsum.photos/id/1025/300/300"
    }
];

for (let index = 0; index < allUser.length; index++) {

    for (const property in allUser[index]) {
        console.log(`${property}: ${allUser[index][property]}`);
    }
    if (!(index == allUser.length - 1)) {
        console.log("")
    }
}



