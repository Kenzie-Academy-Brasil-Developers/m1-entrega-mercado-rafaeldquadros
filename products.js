const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];


let arrDeFrutas  = []
let arrDeBebidas = []
let arrDeHigiene = []

function separandoOsItens(obj){
    for(let i = 0; i < obj.length; i++){
      if(obj[i].category == "Frutas"){
        arrDeFrutas.push(obj[i])
      }else if(obj[i].category == "Bebidas"){
        arrDeBebidas.push(obj[i])
      }else{
        arrDeHigiene.push(obj[i])
      }
    }
}
separandoOsItens(products)
console.log(arrDeFrutas)
console.log(arrDeBebidas)
console.log(arrDeHigiene)



const cabecalhoFrutas = document.createElement("h1")
cabecalhoFrutas.innerText = "Frutas"
const mainDasFruits   = document.createElement("main")
mainDasFruits.classList.add("products-content","Fruits")
const listaDasFrutas  = document.createElement("ul")
const secaoDasFrutas = document.getElementById("sectionFruits") 


const cabecalhoBebidas = document.createElement("h1")
cabecalhoBebidas.innerText = "Bebidas"
const mainDasBebidas   = document.createElement("main")
mainDasBebidas.classList.add("products-content","drinks")
const listaDasBebidas  = document.createElement("ul")
const secaoDasBebidas = document.getElementById("sectionBebidas") 


const cabecalhoHigiene = document.createElement("h1")
cabecalhoHigiene.innerText = "Higiene"
const mainDasHigiene   = document.createElement("main")
mainDasHigiene.classList.add("products-content","hygiene")
const listaDasHigiene  = document.createElement("ul")
const secaoDasHigiene = document.getElementById("sectionHigiene") 


secaoDasFrutas.appendChild(cabecalhoFrutas)
mainDasFruits.appendChild(listaDasFrutas)
secaoDasFrutas.appendChild(mainDasFruits)

secaoDasBebidas.appendChild(cabecalhoBebidas)
mainDasBebidas.appendChild(listaDasBebidas)
secaoDasBebidas.appendChild(mainDasBebidas)

secaoDasHigiene.appendChild(cabecalhoHigiene)
mainDasHigiene.appendChild(listaDasHigiene)
secaoDasHigiene.appendChild(mainDasHigiene)




function addItemFrutas(obj){
    for(let i = 0; i < obj.length; i++){
      let produto = obj[i]
      let card    = criandoCardProduto(produto)
      listaDasFrutas.appendChild(card)
    }
}

function addItemBebidas(obj){
  for(let i = 0; i < obj.length; i++){
    let produto = obj[i]
    let card    = criandoCardProduto(produto)
    listaDasBebidas.appendChild(card)
  }
}


function addItemHigiene(obj){
  for(let i = 0; i < obj.length; i++){
    let produto = obj[i]
    let card    = criandoCardProduto(produto)
    listaDasHigiene.appendChild(card)
  }
}

function criandoCardProduto(obj){
    let img     = obj.image
    let title   = obj.title
    let categoria = obj.category
    let price     = obj.price
      if(img == undefined){
        img = "./img/products/no-img.svg"
      }

    let tagLi  = document.createElement("li")
    tagLi.classList.add("product")
    let tagImg = document.createElement("img")
    let tagTitle = document.createElement("h1")
    tagTitle.classList.add("product-title")
    let tagCategory = document.createElement("h5")
    tagCategory.classList.add("product-category")
    let tagPrice = document.createElement("strong")
    tagPrice.classList.add("product-price")
    let main     = document.createElement("main")
    main.classList.add("product-main")

    tagImg.src   = img
    tagImg.alt   = categoria
    tagImg.title = title
    tagImg.classList.add("product-img")
    tagTitle.innerText = title
    tagCategory.innerText = categoria
    tagPrice.innerHTML = `R$ ${price}`

    tagLi.appendChild(tagImg)
    tagLi.appendChild(main)
    main.appendChild(tagTitle)
    main.appendChild(tagCategory)
    main.appendChild(tagPrice)

    return tagLi
    
}
/* <li class="product">
              <img
                src="./img/products/no-img.svg"
                alt=""
                title=""
                class="product-img"
              />
              <main class="product-main">
                <h1 class="product-title">Uva Crimson</h1>
                <h5 class="product-category">Frutas</h5>
                <strong class="product-price">R$ 8.99</strong>
              </main> */
console.log(addItemFrutas(arrDeFrutas))
console.log(addItemBebidas(arrDeBebidas))
console.log(addItemHigiene(arrDeHigiene))