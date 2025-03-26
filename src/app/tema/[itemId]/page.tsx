export default async function ItemDetail({params}:{params: Promise<{ params: {itemId:string} }>}) {

const p = params as unknown as  {itemId: string}
   return (
    <div className="h-screen">
      <h1>{p.itemId}</h1>
    </div>
  );
}
