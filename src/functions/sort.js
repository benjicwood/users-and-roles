// sort table by last name alphabetically

export default function (a, b) {
    if (a.last_name < b.last_name) {
        return -1;
    }
    if (a.last_name > b.last_name) {
        return 1;
    }
    // names must be equal
    return 0;
}