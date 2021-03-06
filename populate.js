Element.prototype.populate = function(array, item) {
    for (let i = 0; i < array.length; i++) {
        let li;
	    
	// add new element to store this data in if neccessary
        let newElementNeeded = this.children.length <= i;
        if (newElementNeeded) {
            li = document.createElement("li");
        } else {
            li = this.children[i];
        }
	    
        for (let j = 0; j < item.length; j++) {
            let newComponentNeeded = li.children.length <= j;
            let liComponent;
            if (newComponentNeeded) {
                liComponent = document.createElement(item[j].tag);
            } else {
                liComponent = li.children[j];
            }
            liComponent.innerHTML = array[i][item[j].val];
            if (!newComponentNeeded) {
                while (liComponent.attributes.length > 0) {
                    liComponent.removeAttribute(liComponent.attributes[0].name);
                }
            }
            for (let k = 0; k < item[j].properties.length; k++) {
                liComponent.setAttribute(item[j].properties[k].attr, item[j].properties[k].val);
            }
            if (newComponentNeeded) {
                li.appendChild(liComponent);
            }
        }
	    
        if (newElementNeeded) {
            this.appendChild(li);
        }
    }
	
    // remove children elements not in new array	
    while (this.children.length > array.length) {
        this.removeChild(this.children[this.children.length - 1]);
    }
}
