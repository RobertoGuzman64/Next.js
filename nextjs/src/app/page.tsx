import NoteForm from "@/components/NoteForm"

interface Note {
  id: number;
  title: string;
  content: string;
}

async function loadNotes() {
  const res = await fetch("http://localhost:3000/api/notes");
  const data = await res.json();
  return data
}

export default async function HomePage() {
  const notes = await loadNotes();
  console.log({ notes });
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <h1>Página Principal</h1>
        <NoteForm />
        {notes.map((note: Note) => (
          <div key={note.id} className="bg-slate-400 p-4 my-2">
            <h1>{note.title}</h1>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}