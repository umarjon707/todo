export function Todo(item) {
    const product = document.createElement('div')
    const name_prod = document.createElement('h2')
    const time_prod = document.createElement('h3')
    const delete_btn = document.createElement('button')
    const edit_btn = document.createElement('button')
    const img_delete = document.createElement('img')

    product.classList.add('product')
    name_prod.classList.add('name_prod')
    time_prod.classList.add('time_prod')
    delete_btn.classList.add('delete_btn')

    img_delete.src ='./img/svgdelete.svg.png'

    name_prod.innerHTML = item.title
    time_prod.innerHTML = item.time
    edit_btn.innerHTML = "edit"


    product.append(name_prod,time_prod,delete_btn,edit_btn)
    delete_btn.append(img_delete)
}
