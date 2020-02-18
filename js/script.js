new Vue({ //vue instance
    el: ".vue_les1", // div connection
    data:{
        name: "Michelle",
        age: "23",
        website: "http://www.witontwerp.nl",
        
    },
    methods:{
        groetjes :function(time){
            return "Goede" + time + " " + this.name;
        }
    }
});

new Vue({
    el: ".vue_les2",
    data:{
        age: "25",
        x: "0",
        y: "0",
        website: "http://www.google.nl"
    },
    methods:{
        add :function(inc){ //function
            this.age+=inc;
        },
        subtract :function(dec){
            this.age-=dec;
        },
        updateXY: function(){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function(){
            alert("Deze site is onveilig")
        }
    }
});

var les3 = new Vue({
    el: ".vue_les3",
    data:{
        name: "",
        age:" "
    },
    methods:{
        logName: function(){
            
        },
        logAge: function(){
            
        }
    }
});

var les4 = new Vue({
    el: ".vue_les4",
    data:{
        products: "schoenen",
        inventory: 2, 
    },
    methods: {
        kopen :function(min){
            this.inventory-=(min)
            console.log(this.inventory)
        }
    }
});