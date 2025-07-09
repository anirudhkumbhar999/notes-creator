const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new note
exports.createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = await prisma.note.create({
      data: { title, content },
    });
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create note' });
  }
};

// Get all notes
exports.getNotes = async (req, res) => {
  try {
    const notes = await prisma.note.findMany();
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch notes' });
  }
};

// Get single note by ID
exports.getNoteById = async (req, res) => {
  const { id } = req.params;
  try {
    const note = await prisma.note.findUnique({
      where: { id: Number(id) },
    });
    if (!note) return res.status(404).json({ error: 'Note not found' });
    res.status(200).json(note);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching note' });
  }
};

// Update note
exports.updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const updatedNote = await prisma.note.update({
      where: { id: Number(id) },
      data: { title, content },
    });
    res.status(200).json(updatedNote);
  } catch (err) {
    res.status(500).json({ error: 'Error updating note' });
  }
};

// Delete note
exports.deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.note.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Error deleting note' });
  }
};
