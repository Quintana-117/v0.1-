function calculateSummary() {
    // Obtener los valores de los campos del formulario
    const salary = parseFloat(document.getElementById('salary').value);
    const expenses = document.getElementById('expenses').value.split(',').map(Number);
    const pendingPayments = document.getElementById('pending-payments').value.split(',').map(Number);

    // Calcular el total de gastos y pagos pendientes
    const totalExpenses = expenses.reduce((acc, curr) => acc + curr, 0);
    const totalPendingPayments = pendingPayments.reduce((acc, curr) => acc + curr, 0);

    // Calcular el saldo final
    const finalBalance = salary - totalExpenses - totalPendingPayments;

    // Mostrar el resumen en la página
    document.getElementById('salary-summary').textContent = `Tu salario es: $${salary.toFixed(2)}`;
    document.getElementById('expenses-summary').textContent = `Total de gastos mensuales: $${totalExpenses.toFixed(2)}`;
    document.getElementById('payments-summary').textContent = `Total de pagos pendientes: $${totalPendingPayments.toFixed(2)}`;
    document.getElementById('total-summary').textContent = `Saldo final después de gastos y pagos: $${finalBalance.toFixed(2)}`;
}
