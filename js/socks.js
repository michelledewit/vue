var les4 = new Vue({
    el: ".vue_les4",
    data:{
        products: "Sokken",
        image: "./img/vmSocks-green-onWhite.jpg",
        inStock: true, 
        inventory: 1,
        cart: 0,
        details: ["30% leer", "70% katoen"],
        variants:[{
            varientId: 2234,
            variantColor: "Groen"
        },
            {
            varientId: 2235,
            variantColor: "Blauw"
        }]
    },
    methods: {
        kopen :function(min){
            this.inventory-=(min) //this = data of the instance .vue_les4
            console.log(this.inventory)
        },
        addToCart :function(){
            this.cart +=1;
        }
    },
});