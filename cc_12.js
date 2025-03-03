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
            card.innerHTML = card.innerHtml + "-Updated";
            card.computedStyleMap.backgroundColor = `#f2f2f2`;
        });
