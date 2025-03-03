//Task 1 - Business Dashboard

    const dashboard = document.getElementById(`dashboard`);
    const dashboardAlt = document.querySelector(`#dashboard`);
    
    const revenueCard = document.createElement(`div`);
    revenueCard.setAttribute(`class`, `metric-card`);
    revenueCard.setAttribute(`id`, `revenueCard`);
    revenueCard.innerHTML = `
    <h3>Revenue</h3>
    <p>$0</p>
    `;
    
    dashboard.appendChild(revenueCard);
   

    //Task 2
        const metricCards = document.querySelectorAll(`.metric-card`);
        const metricCardsArray = [...metricCards];
        metricCardsArray.forEach(card => {
            card.innerHTML = card.innerHTML + "-Updated";
            card.style.backgroundColor = `#f2f2f2`;
        });

    //Task 3 - Dynamic Inventory Management
    const inventoryList = document.getElementById(`inventoryList`);
    function addInventoryItem(itemName) {
        const productItem = document.createElement(`li`);
        productItem.setAttribute(`class`, `product-item`);
        productItem.setAttribute(`data-id`, Date.now());
        productItem.textContent = itemName;
        productItem.addEventListener(`click`, () => removeProduct(productItem));
        inventoryList.appendChild(productItem);
    }
    function removeProduct(item) {
        inventoryList.removeChild(item);
    }
    
