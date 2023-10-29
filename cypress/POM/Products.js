class Products{

SearchProduct(){
    return cy.get('#search')
}   

SearchSuccess(){
    return cy.get('.base')
}

ClickToAddToCart(){
    return cy.get('button[title="Add to Cart"]')
}

ProductSize(){
    return cy.get('#option-label-size-143-item-168')
}

ProductColor(){
    return cy.get('#option-label-color-93-item-52')
}

ProductAddCart(){
    return cy.get('#product-addtocart-button')
}

CheckOutBasketIcon(){
    return cy.get('.showcart')
}

RemoveProductIcon(){
    return cy.get('.product-item-details > .actions > .secondary > .action')
}

RemoveProductConfirmationOK(){
    return cy.get('button[class="action-primary action-accept"]')
}

}
export default Products