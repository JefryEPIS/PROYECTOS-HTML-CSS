function AñadirEvento() {
    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;

    if (eventName && eventDate) {
        const eventList = document.getElementById('event-list');
        const listItem = document.createElement('li');
        listItem.textContent = `${eventName} - ${eventDate}`;
        eventList.appendChild(listItem);

        // Limpiar los campos de entrada
        document.getElementById('event-name').value = '';
        document.getElementById('event-date').value = '';
    } else {
        alert('Falta llenar el Nombre del Evento o la Fecha.');
    }
}
