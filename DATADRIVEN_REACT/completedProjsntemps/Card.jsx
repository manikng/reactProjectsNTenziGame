//props mai name hr kisi ka consistent hona chiye as ek ka  img  then dusre ka image so it will throw error
//is bug mai hamesha dev phaste hai
export default function Card(props){
console.log(props);
//prop ={ {entry: {…}, key: 1} } prop ek obj then uske ander entry obj then uske under properties obj hai
    return (
        <article className=" bg-white shadow-md rounded-lg overflow-hidden my-5" style={{ width: '300px' }}>
            <img className="w-full h-48 object-cover"
             src={props.images} alt={props.name}
              style={{ height: '200px' }} />
            <div className="p-4">
                <h3 className="text-red-600 font-semibold mb-2">
                    {props.name}</h3>
                <div className="text-gray-700">
                    <p className="mb-1">
                        <a href={props.location}>GooGle Map Loc</a></p>
                    <p className="text-yellow-500 font-bold">{props.rating}</p>
                </div>
            </div>
        </article>
    )
}

//------------------notees ==============
//u can remove this clutter props.entry.images with just props.entry by using 
//...entry i.e use spread opearator and it will spread all elements and add all
//them into a single obj
// src={props.entry.images} alt={props.entry.name}


// <img src={props.img} alt="img" />
// <h3>{props.name}</h3>
// <p>{props.loc}</p>
// <p>{props.rating}</p>