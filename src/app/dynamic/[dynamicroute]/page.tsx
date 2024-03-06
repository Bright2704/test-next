export default function Dynamicroute({params}: {
    params: {
        dynamicroute: string | number;
    };
})  {
   

  return (
    <div>
        this is dynamicroute 
        {params.dynamicroute}
    </div>
  )
}
