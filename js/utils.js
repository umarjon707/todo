export function reload(array, place, component) {
    place.innerHTML = ""

    for (let item of array) {
        const todo = component(item, array)
        place.append(todo)
    }
}
