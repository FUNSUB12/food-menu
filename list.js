let name = prompt ("Ener your name");
let cat = prompt("Enter items (sweet,fast-food,Soft-drinks)");
if(cat == "sweet"){
    let items = prompt("Select any one item (cakes and pastrys)");
    if(items == "cakes"){
        let cakesCat = prompt("Select any one (strawbery cake Rs 1000 / Chocklate Cake Rs 1200)")
        let qty = prompt("Insert your quantity")
        if(cakesCat == "strawbery cake"){
        document.write("<p>Customer Name :"+name+"</p>")
        document.write("<p>Category :"+cat+"</p>")
        document.write("<p>Cake Category :"+cakesCat+"</p>")
        document.write("<p>Price : 1000</p>")
        document.write("<p>Quantity :"+qty+"</p>")
        document.write("<p>Total :"+qty*1000+"</p>")
        }
        else if(cakesCat == "chocklate cake"){
            document.write("<p>Customer name :"+name+"</p>")
            document.write("<p>Category :"+cat+"</p>")
        document.write("<p>Cake Category :"+cakesCat+"</p>")
        document.write("<p>Price : 1200</p>")
        document.write("<p>Quantity :"+qty+"</p>")
        document.write("<p>Total :"+qty*1200+"</p>")
        }
        else{
            alert("Invalid Cake category");
             }
 }
 else if(items == "pastrys"){
    let pastryCat = prompt("Select any one (strawbery pastry Rs 100 / pineapple pastry Rs 100)")
    let qty = prompt("Insert your quantity")
    if(pastryCat == "strawbery pastry"){

        document.write("<p>Customer name :"+name+"</p>")
        document.write("<p>Category :"+cat+"</p>")
    document.write("<p>pastry Category :"+pastryCat+"</p>")
    document.write("<p>Price : 100</p>")
    document.write("<p>Quantity :"+qty+"</p>")
    document.write("<p>Total :"+qty*100+"</p>")

    }
    
        if(pastryCat == "pineapple pastry"){
    document.write("<p>Customer name :"+name+"</p>")
            document.write("<p>Category :"+cat+"</p>")
        document.write("<p>pastry Category :"+pastryCat+"</p>")
        document.write("<p>Price : 100</p>")
        document.write("<p>Quantity :"+qty+"</p>")
        document.write("<p>Total :"+qty*100+"</p>")
    
        }
        else{
            alert("Invalid pastry category");
             }
    }
    
}
if(cat == "fast-food"){
    let items = prompt("Select any one item (burgers/sendwiches)")
    if(items == "burgers"){
        let burgerCat = prompt("zinger burger / beef burger")
    let qty = prompt("Insert your quantity")
    
     if(burgerCat == "zinger burger"){
        document.write("<p>Customer name :"+name+"</p>")
        document.write("<p>Category :"+cat+"</p>")
    document.write("<p>Burger Category :"+burgerCat+"</p>")
    document.write("<p>Price : 400</p>")
    document.write("<p>Quantity :"+qty+"</p>")
    document.write("<p>Total :"+qty*400+"</p>")
 }
 else if(burgerCat == "beef burger"){
    document.write("<p>Customer name :"+name+"</p>")
    document.write("<p>Category :"+cat+"</p>")
document.write("<p>Burger Category :"+burgerCat+"</p>")
document.write("<p>Price : 350</p>")
document.write("<p>Quantity :"+qty+"</p>")
document.write("<p>Total :"+qty*350+"</p>")
 }
 else{
    alert("Invalid burger category");
     }

}


if(items == "sendwiches"){
    let sendCat = prompt("chickn sendwiched / chickn cheez sendwiched")
  let qty = prompt("Insert your quantity")

 if(sendCat == "chickn sendwiched"){
    document.write("<p>Customer name :"+name+"</p>")
    document.write("<p>Category :"+cat+"</p>")
document.write("<p>Sendwiched Category :"+sendCat+"</p>")
document.write("<p>Price : 450</p>")
document.write("<p>Quantity :"+qty+"</p>")
document.write("<p>Total :"+qty*450+"</p>")
}
else if(sendCat == "chickn cheez sendwiched"){
document.write("<p>Customer name :"+name+"</p>")
document.write("<p>Category :"+cat+"</p>")
document.write("<p>sendwiched Category :"+sendCat+"</p>")
document.write("<p>Price : 550</p>")
document.write("<p>Quantity :"+qty+"</p>")
document.write("<p>Total :"+qty*550+"</p>")
}
else{
    alert("Invalid sandwiched category");
} 
}  
}
if (cat = "soft-drinks"){
    let coldCat = prompt("Pepsi / 7up")
    if(coldCat == "pepsi"){
        let ml = prompt("250 ML / 500 ML")
        let qty = prompt("Insert your quantity")
        if(ml == "250 ML"){
        document.write("<p>Customer name :"+name+"</p>")
        document.write("<p>Category :"+cat+"</p>")
        document.write("<p>Drink Category :"+coldCat+"</p>")
        document.write("<p>Drink ML :"+ml+"</p>")
        document.write("<p>Price : 80</p>")
        document.write("<p>Quantity :"+qty+"</p>")
        document.write("<p>Total :"+qty*80+"</p>") 
        }
        if(ml == "500 ML"){
            document.write("<p>Customer name :"+name+"</p>")
            document.write("<p>Category :"+cat+"</p>")
            document.write("<p>Drink Category :"+coldCat+"</p>")
            document.write("<p>Drink ML :"+ml+"</p>")
            document.write("<p>Price : 150</p>")
            document.write("<p>Quantity :"+qty+"</p>")
            document.write("<p>Total :"+qty*150+"</p>") 
            }
    }
    else if(coldCat == "7up"){
        let ml = prompt("250 ML / 500 ML")
        let qty = prompt("Insert your quantity")
        if(ml == "250 ML"){
        document.write("<p>Customer name :"+name+"</p>")
        document.write("<p>Category :"+cat+"</p>")
        document.write("<p>Drink Category :"+coldCat+"</p>")
        document.write("<p>Drink ML :"+ml+"</p>")
        document.write("<p>Price : 80</p>")
        document.write("<p>Quantity :"+qty+"</p>")
        document.write("<p>Total :"+qty*80+"</p>") 
        }
        if(ml == "500 ML"){
            document.write("<p>Customer name :"+name+"</p>")
            document.write("<p>Category :"+cat+"</p>")
            document.write("<p>Drink Category :"+coldCat+"</p>")
            document.write("<p>Drink ML :"+ml+"</p>")
            document.write("<p>Price : 150</p>")
            document.write("<p>Quantity :"+qty+"</p>")
            document.write("<p>Total :"+qty*150+"</p>") 
            } 
    }
    else{
        alert("Invalid Drink category");
    } 
}











