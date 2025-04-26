import "../../style/style.css";
import profileImage from "../../img/Profile.jpg";

const API_BASE_URL = "https://notes-api.dicoding.dev/v2";

let currentlyEditingId = null;
let titleTouched = false;
let bodyTouched = false;
let minLoadingTime = 500;
let loadingStartTime;
let isLoading = false;

function showLoading() {
  if (isLoading) return;

  isLoading = true;
  loadingStartTime = Date.now();
  const loadingElement = document.createElement("div");
  loadingElement.id = "loading-indicator";
  loadingElement.className = "loading-popup";
  loadingElement.innerHTML = `
    <div class="loading-content">
      <div class="spinner"></div>
      <p>Loading...</p>
    </div>
  `;
  document.body.appendChild(loadingElement);
}

async function hideLoading() {
  if (!isLoading) return;

  try {
    const loadingElement = document.getElementById("loading-indicator");
    if (!loadingElement) return;

    const elapsedTime = Date.now() - loadingStartTime;
    const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

    await new Promise((resolve) => setTimeout(resolve, remainingTime));

    loadingElement.classList.add("fade-out");
    await new Promise((resolve) => {
      loadingElement.addEventListener("animationend", resolve, { once: true });
    });
    loadingElement.remove();
  } catch (error) {
    console.error("Error hiding loading:", error);
    const loadingElement = document.getElementById("loading-indicator");
    if (loadingElement) loadingElement.remove();
  } finally {
    isLoading = false;
  }
}

async function fetchNotes(filter = "all") {
  try {
    showLoading();
    let response;
    if (filter === "archived") {
      response = await fetch(`${API_BASE_URL}/notes/archived`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      response = await fetch(`${API_BASE_URL}/notes`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching notes:", error);
    return [];
  } finally {
    await hideLoading();
  }
}

async function fetchAllNotes() {
  try {
    showLoading();
    const [activeNotes, archivedNotes] = await Promise.all([
      fetch(`${API_BASE_URL}/notes`, {
        headers: {
          "Content-Type": "application/json",
        },
      }),
      fetch(`${API_BASE_URL}/notes/archived`, {
        headers: {
          "Content-Type": "application/json",
        },
      }),
    ]);

    if (!activeNotes.ok || !archivedNotes.ok) {
      throw new Error("Failed to fetch some notes");
    }

    const activeData = await activeNotes.json();
    const archivedData = await archivedNotes.json();

    return [...activeData.data, ...archivedData.data];
  } catch (error) {
    console.error("Error fetching all notes:", error);
    return [];
  } finally {
    await hideLoading();
  }
}

async function createNote(title, body) {
  try {
    const response = await fetch(`${API_BASE_URL}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to create note");
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating note:", error);
    throw error;
  }
}

async function updateNote(id, title, body) {
  try {
    await deleteNoteFromServer(id);
    return await createNote(title, body);
  } catch (error) {
    console.error("Error updating note:", error);
    throw error;
  }
}

async function deleteNoteFromServer(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/notes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error deleting note:", error);
    throw error;
  }
}

async function toggleArchiveNote(id, shouldArchive) {
  try {
    const endpoint = shouldArchive ? "archive" : "unarchive";
    const response = await fetch(`${API_BASE_URL}/notes/${id}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error toggling archive status:", error);
    throw error;
  }
}

function setupFormValidation() {
  const titleInput = document.getElementById("noteTitle");
  const bodyInput = document.getElementById("noteBody");
  const addButton = document.getElementById("addNoteBtn");

  titleInput.addEventListener("blur", () => {
    if (!titleTouched) {
      titleTouched = true;
      validateForm();
    }
  });

  bodyInput.addEventListener("blur", () => {
    if (!bodyTouched) {
      bodyTouched = true;
      validateForm();
    }
  });

  titleInput.addEventListener("input", validateForm);
  bodyInput.addEventListener("input", validateForm);

  addButton.disabled = true;
}

function validateForm() {
  const title = document.getElementById("noteTitle").value.trim();
  const body = document.getElementById("noteBody").value.trim();
  const addButton = document.getElementById("addNoteBtn");

  const isTitleValid = title.length > 0;
  if (titleTouched) {
    document.getElementById("titleError").style.display = isTitleValid
      ? "none"
      : "block";
    document
      .getElementById("noteTitle")
      .classList.toggle("invalid", !isTitleValid);
  }

  const isBodyValid = body.length > 0;
  if (bodyTouched) {
    document.getElementById("bodyError").style.display = isBodyValid
      ? "none"
      : "block";
    document
      .getElementById("noteBody")
      .classList.toggle("invalid", !isBodyValid);
  }

  updateCharacterCounter(body.length);

  addButton.disabled = !(isTitleValid && isBodyValid);
}

function updateCharacterCounter(length) {
  const counter = document.getElementById("bodyCounter");
  counter.textContent = `${length}/1000`;
  counter.className =
    "char-counter" +
    (length > 1000 ? " error" : length > 900 ? " warning" : "");
}

async function renderNotes(notes) {
  const notesContainer = document.getElementById("notesContainer");
  const noNotesMessage = document.getElementById("noNotesMessage");

  notesContainer.innerHTML = "";

  if (notes.length === 0) {
    noNotesMessage.style.display = "block";
  } else {
    noNotesMessage.style.display = "none";
    for (const note of notes) {
      const noteElement = document.createElement("note-item");
      noteElement.setAttribute("id", note.id);
      noteElement.setAttribute("title", note.title);
      noteElement.setAttribute("body", note.body);
      noteElement.setAttribute("date", note.createdAt);
      noteElement.setAttribute("archived", note.archived);
      notesContainer.appendChild(noteElement);
    }
  }
}

async function filterNotes(filter) {
  try {
    let notes = [];

    if (filter === "all") {
      notes = await fetchNotes();
    } else if (filter === "archived") {
      notes = await fetchNotes("archived");
    } else {
      const allNotes = await fetchAllNotes();
      const now = new Date();

      if (filter === "week") {
        notes = allNotes.filter((note) => {
          const noteDate = new Date(note.createdAt);
          return (now - noteDate) / (1000 * 60 * 60 * 24) <= 7;
        });
      } else if (filter === "month") {
        notes = allNotes.filter((note) => {
          const noteDate = new Date(note.createdAt);
          return (
            noteDate.getMonth() === now.getMonth() &&
            noteDate.getFullYear() === now.getFullYear()
          );
        });
      }
    }

    document.querySelectorAll("notes-filter li").forEach((li) => {
      li.classList.remove("active");
      if (li.getAttribute("data-filter") === filter) {
        li.classList.add("active");
      }
    });

    await renderNotes(notes);
  } catch (error) {
    console.error("Error filtering notes:", error);
    alert("Failed to load notes. Please try again.");
  }
}

async function deleteNote(noteId) {
  const confirmDelete = confirm("Are you sure you want to delete this note?");
  if (!confirmDelete) return;

  try {
    await deleteNoteFromServer(noteId);
    const activeFilter = document.querySelector("notes-filter li.active");
    const currentFilter = activeFilter?.getAttribute("data-filter") || "all";
    await filterNotes(currentFilter);
  } catch (error) {
    alert("Failed to delete note");
    console.error("Delete error:", error);
  }
}

async function editNote(noteId) {
  try {
    const response = await fetch(`${API_BASE_URL}/notes/${noteId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { data: noteToEdit } = await response.json();

    const titleInput = document.getElementById("noteTitle");
    const bodyInput = document.getElementById("noteBody");
    const addButton = document.getElementById("addNoteBtn");

    titleInput.value = noteToEdit.title;
    bodyInput.value = noteToEdit.body;

    titleTouched = true;
    bodyTouched = true;

    currentlyEditingId = noteId;
    addButton.textContent = "Update Note";
    addButton.disabled = false;

    validateForm();
    document.querySelector("note-form").scrollIntoView({ behavior: "smooth" });
  } catch (error) {
    console.error("Error fetching note for edit:", error);
    alert("Failed to load note for editing");
  }
}

async function addNewNote() {
  const titleInput = document.getElementById("noteTitle");
  const bodyInput = document.getElementById("noteBody");
  const addButton = document.getElementById("addNoteBtn");

  const title = titleInput.value.trim();
  const body = bodyInput.value.trim();

  if (!title || !body) {
    if (!titleTouched) {
      titleTouched = true;
      document.getElementById("titleError").style.display = "block";
      document.getElementById("noteTitle").classList.add("invalid");
    }
    if (!bodyTouched) {
      bodyTouched = true;
      document.getElementById("bodyError").style.display = "block";
      document.getElementById("noteBody").classList.add("invalid");
    }
    return;
  }

  try {
    showLoading();

    if (currentlyEditingId) {
      await updateNote(currentlyEditingId, title, body);
      currentlyEditingId = null;
      addButton.textContent = "Add Note";
    } else {
      await createNote(title, body);
    }

    titleInput.value = "";
    bodyInput.value = "";
    titleTouched = false;
    bodyTouched = false;

    const activeFilter = document.querySelector("notes-filter li.active");
    const currentFilter = activeFilter?.getAttribute("data-filter") || "all";
    await filterNotes(currentFilter);

    validateForm();
  } catch (error) {
    alert(`Failed to save note: ${error.message}`);
    console.error("Save error:", error);
  } finally {
    await hideLoading();
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const profileMenu = () => {
    const profileMenuContainer = document.getElementById("profile");
    const name = window.localStorage.getItem("currentUser");
    const nameElement = document.createElement("p");
    nameElement.textContent = name;
    const imageProfile = new Image();
    imageProfile.src = profileImage;

    profileMenuContainer.appendChild(nameElement);
    profileMenuContainer.appendChild(imageProfile);
  };

  profileMenu();

  await Promise.all([
    customElements.whenDefined("notes-filter"),
    customElements.whenDefined("note-form"),
  ]);

  document
    .querySelector("notes-filter")
    .addEventListener("filterChanged", async (e) => {
      const { filter } = e.detail;
      await filterNotes(filter);
    });

  document.addEventListener("click", async (e) => {
    if (e.target && e.target.id === "addNoteBtn") {
      await addNewNote();
    }

    if (e.target?.closest(".delete-btn")) {
      const button = e.target.closest(".delete-btn");
      const noteId = button.getAttribute("data-id");
      try {
        showLoading();
        await deleteNote(noteId);
      } catch (error) {
        console.error("Delete Error:", error);
      } finally {
        await hideLoading();
      }
    }

    if (e.target?.closest(".edit-btn")) {
      const button = e.target.closest(".edit-btn");
      const noteId = button.getAttribute("data-id");
      await editNote(noteId);
    }
  });

  document.addEventListener("archiveToggled", async (e) => {
    const { id, archived } = e.detail;
    try {
      showLoading();
      await toggleArchiveNote(id, archived);

      const activeFilter = document.querySelector("notes-filter li.active");
      const currentFilter = activeFilter?.getAttribute("data-filter") || "all";

      if (!archived && currentFilter === "archived") {
        await filterNotes("all");
      } else {
        await filterNotes(currentFilter);
      }
    } catch (error) {
      console.error("Error toggling archive status:", error);
      alert("Failed to update note status");
    } finally {
      await hideLoading();
    }
  });

  setupFormValidation();
  await filterNotes("all");
});
