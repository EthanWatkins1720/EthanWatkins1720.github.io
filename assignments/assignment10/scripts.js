class Toy {
    constructor (title, price, range, rating, pic) {
        this.title = title;
        this.price = price;
        this.range = range;
        this.rating = rating;
        this.pic = pic;
    }

    get ToyItem() {
        const toyDiv = document.createElement("div");
        toyDiv.classList.add("toy");

        const innerDiv = document.createElement("div");
        innerDiv.classList.add("innerToy");

        toyDiv.append(this.picture(this.pic));

        const toyName = document.createElement("h4");
        toyName.innerHTML = this.title;
        innerDiv.append(toyName);

        const toyDesc = document.createElement("ul");
        innerDiv.append(toyDesc);
        toyDesc.append(this.listItem("Price: " + this.price));
        toyDesc.append(this.listItem("Ages: "+ this.range));
        toyDesc.append(this.listItem("Rating: " + this.rating + " out of 5 stars"));
    
        toyDiv.append(innerDiv);
        return toyDiv;
    }

    picture(pic) {
        const picItem = document.createElement("img");
        picItem.src = "images/" + pic;
        return picItem;
    }

    listItem(desc) {
        let info = document.createElement("li");
        info.textContent = desc;
        return info;
    }
}

window.onload = () => {
    let toys = [];
    let toyList = document.getElementById("toy-list");

    toys.push(new Toy("Lego Orchid Set", "$42.99", "18+", "4", "lego.webp"));
    toys.push(new Toy("Richard Petty model kit", "$$18.99", "18+", "4.5", "car.webp"));
    toys.push(new Toy("Talking Pikachu", "$64.99", "8+", "4.3", "pikachu.webp"));
    toys.push(new Toy("TIE Interceptor model kit", "$22.99", "16+", "3.7", "tie.webp"));
    toys.push(new Toy("Wing Gundam model kit", "$35.99", "12+", "5", "wing.webp"));
    toys.push(new Toy("Enterprise model kit", "$42.99", "18+", "4.7", "enterprise.webp"));

    for (let i in toys) {
        toyList.append(toys[i].ToyItem);
    }
}