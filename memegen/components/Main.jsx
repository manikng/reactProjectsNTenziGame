import { useState ,useEffect  } from "react"

let memesArr =[]
let name =''
export default function Main() {

    const [memeData ,setmemeData] = useState({
        topText :"One and noone does not simply",
        bottomText :"Walk into Mordor",
        img:"http://i.imgflip.com/1bij.jpg"

    })
    // use callback or    setmemeData({...memedata ,topText:value})
    const [allMemes , setAllMemes] = useState([])

    useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes')
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data.data.memes)
             memesArr = data.data.memes
             console.log(memesArr)
             setAllMemes(data.data.memes)
             
        })
        
    },[])

    
    function handlChange(event){
        console.log(event.currentTarget)
        const { value, name } = event.currentTarget;
        console.log(value);
        setmemeData({ ...memeData, [name]: value })
        // if(name==="topText"){
        // setmemeData({ ...memeData, topText: value })
        // }
        // if(name==="bottomText"){
        // setmemeData({ ...memeData, bottomText: value })
        // }
    }

    function handlClick(){
        console.log(allMemes.length);
        const randIdx = Math.floor(Math.random()*allMemes.length)
        console.log(randIdx)
        let img = allMemes[randIdx].url
         name = allMemes[randIdx].name
        console.log(img)
        setmemeData({...memeData, img})
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder={memeData.topText}
                        name="topText"
                        onChange={handlChange}
                        value={memeData.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        // placeholder={memeData.botText}
                        name="bottomText"
                        onChange={handlChange}
                        value={memeData.bottomText}
                    />
                </label>
                <button onClick={handlClick}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={memeData.img} />
                <span className="top">{memeData.topText}</span>
                <span className="center">{name}</span>
                <span className="bottom">{memeData.bottomText}</span>
            </div>
        </main>
    )
}