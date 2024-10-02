document.addEventListener('DOMContentLoaded', function () {
    const todayBtn = document.querySelector('.today-btn');
    const calendarBtn = document.querySelector('.calendar-btn');
    const currentDayElem = document.querySelector('.current-day');
    const currentWeekdayElem = document.querySelector('.current-weekday');
    const timeSection = document.querySelector('.time-section');
    const calendarModal = document.querySelector('.calendar-modal');
    const closeModalBtn = document.querySelector('.close-btn');
    const calendarInput = document.querySelector('.calendar-input');

    // Function to show current date and time
    function showCurrentDateTime() {
        const now = new Date();
        const currentDay = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
        const currentWeekday = now.toLocaleDateString('en-US', { weekday: 'long' });

        currentDayElem.textContent = currentDay;
        currentWeekdayElem.textContent = currentWeekday;

        const currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        timeSection.innerHTML = `<p>Time: ${currentTime}</p>`;
    }

    // Show current date and time when the page is loaded
    showCurrentDateTime();

    // Update the time every second
    setInterval(showCurrentDateTime, 1000);

    // Show current date and time when the "Today" button is clicked
    todayBtn.addEventListener('click', function () {
        showCurrentDateTime();
    });

    // Function to show the calendar modal
    function showCalendarModal() {
        const now = new Date();
        calendarInput.value = now.toISOString().split('T')[0]; // Set current date in calendar

        // Show modal
        calendarModal.style.display = 'block';
    }

    // Show the calendar modal when the "Calendar" button is clicked
    calendarBtn.addEventListener('click', function () {
        showCalendarModal();
    });

    // Close the calendar modal when the "close" button is clicked
    closeModalBtn.addEventListener('click', function () {
        calendarModal.style.display = 'none';
    });

    // Close the modal if the user clicks outside of it
    window.addEventListener('click', function (event) {
        if (event.target === calendarModal) {
            calendarModal.style.display = 'none';
        }
    });
});





































document.addEventListener('DOMContentLoaded', () => {
    const eventList = document.querySelector('.event-display');
    const addBtn = document.querySelector('.cta-btn');
    let events = JSON.parse(localStorage.getItem('events')) || []; // Load stored events

    // Function to render event list
    function renderEvents() {
        eventList.innerHTML = ''; // Clear current list
        events.forEach((event, index) => {
            const li = document.createElement('li');
            li.classList.add('event-item');
            li.innerHTML = `
                <div>
                    <strong>${event.name}</strong> - ${event.date} (${event.timeStart} to ${event.timeEnd})
                </div>
                <div>
                    <button class="edit-btn" data-index="${index}">Edit</button>
                    <button class="delete-btn" data-index="${index}">Delete</button>
                </div>
            `;
            eventList.appendChild(li);
        });
    }

    // Save events to localStorage
    function saveEvents() {
        localStorage.setItem('events', JSON.stringify(events));
    }

    // Add or edit an event
    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const eventName = document.querySelector('.event-name').value;
        const timeStart = document.querySelector('.Time-Start').value;
        const timeEnd = document.querySelector('.Time-end').value;
        const eventDate = document.querySelector('.Date').value;

        if (!eventName || !timeStart || !timeEnd || !eventDate) {
            alert('Please fill out all fields!');
            return;
        }

        const event = { name: eventName, timeStart, timeEnd, date: eventDate };

        // If there's an edit, replace the event, otherwise add new
        const editIndex = addBtn.getAttribute('data-edit-index');
        if (editIndex !== null) {
            events[editIndex] = event;
            addBtn.removeAttribute('data-edit-index');
            addBtn.textContent = 'Add event';
        } else {
            events.push(event);
        }

        saveEvents();  // Save to localStorage
        renderEvents(); // Refresh event list
        clearForm();    // Clear form inputs
    });

    // Clear input form
    function clearForm() {
        document.querySelector('.event-name').value = '';
        document.querySelector('.Time-Start').value = '';
        document.querySelector('.Time-end').value = '';
        document.querySelector('.Date').value = '';
    }

    // Delete event
    eventList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const index = e.target.getAttribute('data-index');
            events.splice(index, 1);
            saveEvents();
            renderEvents();
        }
    });

    // Edit event
    eventList.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit-btn')) {
            const index = e.target.getAttribute('data-index');
            const event = events[index];

            document.querySelector('.event-name').value = event.name;
            document.querySelector('.Time-Start').value = event.timeStart;
            document.querySelector('.Time-end').value = event.timeEnd;
            document.querySelector('.Date').value = event.date;

            addBtn.textContent = 'Edit event';
            addBtn.setAttribute('data-edit-index', index);
        }
    });

    // Render events on page load
    renderEvents();
});

document.addEventListener('DOMContentLoaded', () => {
    const saveNoteBtn = document.querySelector('.save-note-btn');
    const eventNotepad = document.querySelector('.event-notepad');

    // Load saved note from localStorage on page load
    const savedNote = localStorage.getItem('eventDescription');
    if (savedNote) {
        eventNotepad.value = savedNote; // Populate the notepad with saved note
    }

    // Save the note to localStorage when 'Save Note' button is clicked
    saveNoteBtn.addEventListener('click', () => {
        const noteContent = eventNotepad.value;
        if (noteContent) {
            localStorage.setItem('eventDescription', noteContent); // Save note to localStorage
            alert('Note saved successfully!');
        } else {
            alert('Please enter a description before saving.');
        }
    });

    // Edit the note by simply typing into the textarea (changes will be saved when "Save Note" is clicked)
});







































































































































































































































































































































document.addEventListener('DOMContentLoaded', function() {
    // Select the "Get Started" button
    const getStartedBtn = document.querySelector('.cta-btn-button');
    
    // Select the sections that should be shown when the button is clicked
    const sectionsToShow = [
        document.querySelector('.welcome-section'),
        document.querySelector('.event-btn'),
        document.querySelector('.event-list'),
        document.querySelector('.event-details-section'),
        document.querySelector('.about-company')
    ];

    // Add click event listener to the "Get Started" button
    getStartedBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default button behavior

        // Show the sections by adding the 'show-sections' class
        sectionsToShow.forEach(section => {
            section.classList.add('show-sections');
        });

        // Optionally, scroll the page to the first section after displaying the sections
        sectionsToShow[0].scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Select the "Get Started" button with the correct class
    const getStartedBtn = document.querySelector('.cta-btn-button');
    
    // Select the sections that should be shown
    const sectionsToShow = [
        document.querySelector('.welcome-section'),
        document.querySelector('.event-btn'),
        document.querySelector('.event-list'),
        document.querySelector('.event-details-section'),
        document.querySelector('.about-company')
    ];

    // Add click event listener to the "Get Started" button
    getStartedBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior (if it's a form or anchor link)

        // Show the sections by adding the 'show-sections' class
        sectionsToShow.forEach(section => {
            section.classList.add('show-sections');
        });

        // Optionally, scroll the page to the first section after displaying the sections
        sectionsToShow[0].scrollIntoView({ behavior: 'smooth' });
    });
});
