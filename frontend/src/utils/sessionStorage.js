export function setToLocalStorage(name, items)
{
    console.log('items', items)
    localStorage.setItem(name, JSON.stringify(items))
}
export function checkLocalStorage(name)
{
    return localStorage.getItem(name) ? true : false
}
export function getLocalStorage(name)
{
    return JSON.parse(localStorage.getItem(name))
}
