const Modal = {
    open(){
        // Abrir o modal
        // Adicionar a class active ao modal
        document.querySelector('.modal-overlay').classList.add('active')
    },
    close(){
        // fechar o modal
        // Remover a class active ao modal
        document.querySelector('.modal-overlay').classList.remove('active')
        console.log(document.querySelector('.modal-overlay'))
    }
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -55012,
        date: '23/01/2021',
    },
    {
        id: 2,
        description: 'WebSite',
        amount: 60000,
        date: '23/01/2021',
    },
    {
        id: 3,
        description: 'Internet',
        amount: -30000,
        date: '23/01/2021',
    },
    {
        id: 4,
        description: 'App',
        amount: 40000,
        date: '23/01/2021',
    }
]

const Transaction = {
    incomes(){
        // Somar as entradas
    },
    expenses(){
        // Somar as saídas
    },
    total(){
        // entradas - saídas
    }
}

const DOM = {

    transactionContainer: document.querySelector("#data-table tbody"),

    addTransaction(transactions, index){
        
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransacion(transactions)
        DOM.transactionContainer.appendChild(tr)
    },
    innerHTMLTransacion(transactions){

        const CSSclasses = transactions.amount > 0 ? "income" : "expense"

        const amount = Utils.formatCurrency(transactions.amount)

        const html = `
            <td class="description">${transactions.description}</td>
            <td class="${CSSclasses}">${amount}</td>
            <td class="date">${transactions.date}</td>
            <td>
                <img src="./img/minus.svg" alt="Remover transação">
            </td>
        `

        return html
    }
}


const Utils = {
    formatCurrency(value){
        const signal = Number(value) < 0 ? "-" : ""

        value = String(value).replace(/\D/g, "")

        value = Number(value) / 100

        value = value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL"
        })

        return signal + value
    }
}

transactions.forEach(function(transaction){
    DOM.addTransaction(transaction)
})


// 1:15:42  h:m:s