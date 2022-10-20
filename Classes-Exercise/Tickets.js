function solve(ticketsArr, criteria){
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];

    for (let ticket of ticketsArr) {
        let ticketParams = ticket.split('|');
        let destination = ticketParams[0];
        let price = ticketParams[1];
        let status = ticketParams[2];

        tickets.push(new Ticket(destination, Number(price), status));
    }

    return criteria != 'price' ? tickets.sort((a, b) => a[criteria].localeCompare(b[criteria])) : tickets.sort((a, b) => a[criteria] - b[criteria]);
}