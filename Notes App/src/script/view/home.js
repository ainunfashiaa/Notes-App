function generateId() {
    return 'notes-' + Math.random().toString(36).substr(2, 9);
}

let currentlyEditingId = null;
let titleTouched = false;
let bodyTouched = false;

function setupFormValidation() {
    const titleInput = document.getElementById('noteTitle');
    const bodyInput = document.getElementById('noteBody');
    const addButton = document.getElementById('addNoteBtn');

    titleInput.addEventListener('blur', () => {
        if (!titleTouched) {
            titleTouched = true;
            validateForm();
        }
    });

    bodyInput.addEventListener('blur', () => {
        if (!bodyTouched) {
            bodyTouched = true;
            validateForm();
        }
    });

    titleInput.addEventListener('input', validateForm);
    bodyInput.addEventListener('input', validateForm);

    addButton.disabled = true;
}

function validateForm() {
    const title = document.getElementById('noteTitle').value.trim();
    const body = document.getElementById('noteBody').value.trim();
    const addButton = document.getElementById('addNoteBtn');

    const isTitleValid = title.length > 0;
    if (titleTouched) {
        document.getElementById('titleError').style.display = isTitleValid ? 'none' : 'block';
        document.getElementById('noteTitle').classList.toggle('invalid', !isTitleValid);
    }

    const isBodyValid = body.length > 0;
    if (bodyTouched) {
        document.getElementById('bodyError').style.display = isBodyValid ? 'none' : 'block';
        document.getElementById('noteBody').classList.toggle('invalid', !isBodyValid);
    }

    updateCharacterCounter(body.length);

    addButton.disabled = !(isTitleValid && isBodyValid);
}

function updateCharacterCounter(length) {
    const counter = document.getElementById('bodyCounter');
    counter.textContent = `${length}/1000`;
    counter.className = 'char-counter' + 
        (length > 1000 ? ' error' : length > 900 ? ' warning' : '');
}

function renderNotes(notes) {
    const notesContainer = document.getElementById('notesContainer');
    const noNotesMessage = document.getElementById('noNotesMessage');
    
    notesContainer.innerHTML = '';

    if (notes.length === 0) {
        noNotesMessage.style.display = 'block';
    } else {
        noNotesMessage.style.display = 'none';
        notes.forEach(note => {
            const noteElement = document.createElement('note-item');
            noteElement.setAttribute('id', note.id);
            noteElement.setAttribute('title', note.title);
            noteElement.setAttribute('body', note.body);
            noteElement.setAttribute('date', note.createdAt);
            notesContainer.appendChild(noteElement);
        });
    }
}

function filterNotes(filter, element) {
    let filteredNotes = [];
    const now = new Date();

    if (filter === 'all') {
        filteredNotes = notesData.filter(note => !note.archived);
    } else if (filter === 'archived') {
        filteredNotes = notesData.filter(note => note.archived);
    } else if (filter === 'week') {
        filteredNotes = notesData.filter(note => {
            const noteDate = new Date(note.createdAt);
            return (now - noteDate) / (1000 * 60 * 60 * 24) <= 7 && !note.archived;
        });
    } else if (filter === 'month') {
        filteredNotes = notesData.filter(note => {
            const noteDate = new Date(note.createdAt);
            return noteDate.getMonth() === now.getMonth() && 
                   noteDate.getFullYear() === now.getFullYear() && 
                   !note.archived;
        });
    }

    document.querySelectorAll('.notes-header nav ul li').forEach(li => {
        li.classList.remove('active');
    });

    element.classList.add('active');
    renderNotes(filteredNotes);
}

function deleteNote(noteId) {
    const confirmDelete = confirm('Are you sure you want to delete this note?');
    if (!confirmDelete) return;
    
    const noteIndex = notesData.findIndex(note => note.id === noteId);
    
    if (noteIndex !== -1) {
        notesData.splice(noteIndex, 1);
        localStorage.setItem('notesData', JSON.stringify(notesData));
        
        const activeFilter = document.querySelector('.notes-header nav ul li.active');
        const currentFilter = activeFilter?.textContent.toLowerCase() || 'all';
        filterNotes(currentFilter, activeFilter);
    }
}

function editNote(noteId) {
    const noteToEdit = notesData.find(note => note.id === noteId);
    if (!noteToEdit) return;
    
    const titleInput = document.getElementById('noteTitle');
    const bodyInput = document.getElementById('noteBody');
    const addButton = document.getElementById('addNoteBtn');
    
    titleInput.value = noteToEdit.title;
    bodyInput.value = noteToEdit.body;
    
    titleTouched = true;
    bodyTouched = true;
    
    currentlyEditingId = noteId;
    addButton.textContent = 'Update Note';
    addButton.disabled = false;
    
    validateForm();
    document.querySelector('note-form').scrollIntoView({ behavior: 'smooth' });
}

function addNewNote() {
    const titleInput = document.getElementById('noteTitle');
    const bodyInput = document.getElementById('noteBody');
    const addButton = document.getElementById('addNoteBtn');
    
    if (titleInput.value.trim() === '' || bodyInput.value.trim() === '') {
        if (!titleTouched) {
            titleTouched = true;
            document.getElementById('titleError').style.display = 'block';
            document.getElementById('noteTitle').classList.add('invalid');
        }
        if (!bodyTouched) {
            bodyTouched = true;
            document.getElementById('bodyError').style.display = 'block';
            document.getElementById('noteBody').classList.add('invalid');
        }
        return;
    }
    
    if (currentlyEditingId) {
        const noteIndex = notesData.findIndex(note => note.id === currentlyEditingId);
        if (noteIndex !== -1) notesData.splice(noteIndex, 1);
        
        const updatedNote = {
            id: currentlyEditingId,
            title: titleInput.value,
            body: bodyInput.value,
            createdAt: new Date().toISOString(),
            archived: false
        };
        
        notesData.unshift(updatedNote);
        currentlyEditingId = null;
        addButton.textContent = 'Add Note';
    } else {
        const newNote = {
            id: generateId(),
            title: titleInput.value,
            body: bodyInput.value,
            createdAt: new Date().toISOString(),
            archived: false
        };
        notesData.unshift(newNote);
    }
    
    titleInput.value = '';
    bodyInput.value = '';
    titleTouched = false;
    bodyTouched = false;
    
    localStorage.setItem('notesData', JSON.stringify(notesData));
    
    const activeFilter = document.querySelector('.notes-header nav ul li.active');
    const currentFilter = activeFilter?.textContent.toLowerCase() || 'all';
    filterNotes(currentFilter, activeFilter);
    
    validateForm();
}

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'addNoteBtn') {
            addNewNote();
        }
        
        if (e.target?.closest('.delete-btn')) {
            const button = e.target.closest('.delete-btn');
            const noteId = button.getAttribute('data-id');
            deleteNote(noteId);
        }
        
        if (e.target?.closest('.edit-btn')) {
            const button = e.target.closest('.edit-btn');
            const noteId = button.getAttribute('data-id');
            editNote(noteId);
        }
    });
    
    const savedNotes = localStorage.getItem('notesData');
    if (savedNotes) {
        notesData = JSON.parse(savedNotes);
    }
    
    setupFormValidation();
    
    filterNotes('all', document.querySelector('.notes-header nav ul li.active'));
});