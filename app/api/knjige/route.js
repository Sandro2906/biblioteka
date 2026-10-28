import db from "../../lib/db";

export async function POST(req){
    const {name,author,genre} = await req.json();
    if(!name || !author || !genre ){
        return Response.json({message: "Please fill in all fields!"}, {status: 400})
    }
    const [rezultat] = await db.query("INSERT INTO knjige (naslov, autor, opis) VALUES (?,?,?)", [name,author,genre]);
    return Response.json({message: "Book added successfully!"}, {status: 201})
}

export async function GET() {
  const [data] = await db.query("SELECT * FROM knjige");
  return Response.json(data);
}


export async function DELETE(req){
    const { id } = await req.json();

    const [obrisano] = await db.query("DELETE FROM knjige WHERE id = ?",[id]);
    return Response.json({message: "Book deleted successfully!"}, {status: 200});
}