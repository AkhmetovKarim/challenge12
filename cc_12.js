//Task 1 - Business Dashboard
function createRevenueCard() {
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
    }
    createRevenueCard();