
const Details = () => {
  return (
    <div className="flex flex-col items-start mt-[56px] gap-y-2 ml-4">
        <h2 className="font-bold text-[24px]">Descrição da Raquete Wilson Blade</h2>
        <p className="text-start font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum nisi doloribus dicta incidunt totam quas aut voluptas accusantium unde ad laborum ab, dignissimos dolorum inventore perspiciatis ducimus? Voluptatem, omnis fugit?</p>
        <h2 className="font-bold text-[24px]">Conheça as Características:</h2>
        <ul className="flex flex-col items-start">
            <li><span className="font-semibold">Composição:</span> Grafite</li>
            <li><span className="font-semibold">Cabeça:</span> 98sq.in</li>
            <li><span className="font-semibold">Peso:</span> 305g</li>
            <li><span className="font-semibold">Origem:</span> Importado</li>
        </ul>
    </div>
  )
}

export default Details