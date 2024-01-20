


const productos=[
    {
        id:"1",
        nombre:"Pizza común",
        precio:2000,
        categoria:"pizza",
        img: `./muzzarella.jpg`,
        stock:50,
        descripcion:"Pizza con muzzarella, orégano y aceitunas",
    },
    {
        id:"2",
        nombre:"Fugazzeta",
        precio:2500,
        categoria:"pizza",
        img:`./fugazzeta.png`,
        stock:40,
        descripcion:"Pizza con muzzarella y cebolla",
    },
    {
        id:"3",
        nombre:"Napolitana",
        precio:3000,
        categoria:"pizza",
        img:`./napo.png`,
        stock:45,
        descripcion:"Pizza con muzzarella, tomate y ajo",
    },
    {
        id:"4",
        nombre:"Empanada de carne",
        precio:500,
        categoria:"empanada",
        img:`./carne.jpeg`,
        stock:200,
        descripcion:"Empanada de carne cortada a cuchillo sin picante",
    },
    {
        id:"5",
        nombre:"Empanada de pollo",
        precio:500,
        categoria:"empanada",
        img:`./pollo.jpg`,
        stock:200,
        descripcion:"Empanada de pollo suavemente condimentada",
    },
    {
        id:"6",
        nombre:"Empanada de jamon y queso",
        precio:500,
        categoria:"empanada",
        img:`./jyq.jpg`,
        stock:200,
        descripcion:"Empanada de jamon y queso condimentado con especias",
    },
    {
        id:"7",
        nombre:"Milanesa con papas",
        precio:1500,
        categoria:"otros",
        img:`./mila.jpg`,
        stock:35,
        descripcion:"Milanesa de carne con papas fritas",
    },
    {
        id:"8",
        nombre:"Pollo con pure",
        precio:1500,
        categoria:"otros",
        img:`./pollo y pure.jpg`,
        stock:30,
        descripcion:"Presa de pollo acompañada de papa pisada mezclada con manteca y leche",
    },
    {
        id:"9",
        nombre:"Ravioles con salsa",
        precio:1500,
        categoria:"otros",
        img:`./ravioles.jpg`,
        stock:25,
        descripcion:"Ravioles de ricota y pollo con salsa bolognesa",
    },
]

export const getProductos = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos)
        },800)
    })
}

export const getProductById = (productoId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === productoId))
        },600)
    })
}

export const getProductByCat = (categoriaId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos.map(prod => prod.categoria === categoriaId))
        },600)
    })
}

