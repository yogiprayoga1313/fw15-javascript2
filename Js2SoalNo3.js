const names = ['Abigail', 'Alexande', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope']

function findName(name, limit, callback) {
    const filteredNames = names.filter((item) => {
        return item.toLowerCase().includes(name.toLowerCase());
    });
    
    // console.log(filteredNames)
    callback(filteredNames.slice(0, limit));
    // slice()
}
findName('a', 1, (names) => {
    console.log(names);
});
