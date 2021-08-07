// 1) Banco cliente
// 2) Cuenta cliente
// 3) Saldo cliente
// 4) Banco destino
// 5) Cuenta destino
// 6) Hora transferencia
// Transferir 1M usd
// Condiciones obligatorias de transferencia
/* Cliente verificado(true or false);
Destino verificado(true or false);
Saldo mayor al monto a transferir mas costo de transaccion
// Solo se pueden hacer transferencias en hora de 9 a 12 o de 15 a 20
Si el banco de destino es el mismo al banco del cliente el costo de transaccion es 0 USD
// 
Si el banco destino es el diferente al banco del cliente el costo de transaccion es 100 USD */

const sendButton = document.querySelector('#sendMoney');

sendButton.addEventListener('click', (e) => {
    const clientVerification = true;
    const receiverVerification = true;
    const transactionCost = 100;
    const transferTime = parseFloat(document.getElementById('time').value);
    console.log(transferTime);
    e.preventDefault();
    // Customer who send
    const clientBank = document.getElementById('clientBank').value.toLowerCase();
    const clientAccount = parseInt(document.getElementById('clientAccount').value);
    let clientBalance = parseInt(document.getElementById('clientBalance').value);
    const transferAmount = parseInt(document.getElementById('toTransfer').value);
    // Receiver
    const receiverBank = document.getElementById('receiverBank').value.toLowerCase();
    const receiverAccount = parseInt(document.getElementById('receiverAccount').value);
    
    if(clientVerification && receiverVerification && clientBalance > (transferAmount + transactionCost) && checkTime(transferTime)){
        if(clientBank === receiverBank) {
            clientBalance -= transferAmount;
            clientBalance -= transactionCost;
            console.log('Successful transaction');
        }
    } else {
        console.log('Something went wrong');
    }
});
 // Check if Bank is open
function checkTime(transferTime) {
    if((transferTime >= 9 && transferTime <=12 || transferTime >= 15 && transferTime <= 20)){
        return true;
    }
}




