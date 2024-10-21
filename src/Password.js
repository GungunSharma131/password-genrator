import  { useCallback, useEffect, useRef, useState } from "react";

function Password(){
  const [Length,setLength] = useState(8);
  const[Num,setNum] = useState(false);
  const [Char,setChar] = useState(false);
  const [Pass,setPass]= useState("");
  

  // useref hook
  const PassRef = useRef(null);

  const PaasswordGen = useCallback(() =>{
    let Password = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (Num){
       str += "0123456789";
    }
    
    if(Char){
       str+="!@#$%^&*";
    }
    for(let i = 1; i <= Length; i++){
      let character = Math.floor(Math.random() * str.length + 1)
      Password += str.charAt(character)
    }

    setPass(Password)

  
  }, [Length, Num, Char, setPass]);
  

//   const handleCopy=useCallback(()=>{
//     console.log('text copied');
//     let Pass = document.getElementById("floatingTextarea2");
//      Pass.select();
//      navigator.clipboard.writeText(Pass.value);
// },[Password]);


const handleCopy = useCallback(() => {
  PassRef.current?.select();
  PassRef.current?.setSelectionRange(0,999);
  window.navigator.clipboard.writeText(Pass)
}, [Pass])


   useEffect(() => {
    PaasswordGen()
  },[Length, Num, Char, PaasswordGen])
 
   
    return(

        <div className="container px-4">
        <div className="row gx-5">
        <div className="col input-box">
        <marquee width="100%" direction="right" scrollamount="12" className="main-head">Password Generator</marquee>
        <div className="input-group mb-3 main-box2">
       <input 
       id="floatingTextarea2"
       type="text" 
       className="form-control main-box"
       value={Pass}
       ref={PassRef}
        aria-describedby="button-addon2"
        readOnly
        />
       <button 
       className="btn btn-outline-secondary main-box1"
         type="button"
         id="button-addon2"
         onClick={handleCopy}
         >
        Copy
       </button>
      
    </div>
    <div className="password-feature ">
      <div className="pass-range">
        <input
         type="range"
         className=""
         value={Length}
         onChange={(e) => {setLength(e.target.value)}}
         readOnly
         /><br/>
        <label className="">Length: {Length}</label>
        </div>
        <div className="form-check ">
        <input type="checkbox"
        className="form-check-input"
        id="exampleCheck1"
        defaultChecked = {Num}
        onChange={()=>
          {
            setNum ((prev) => !prev)
        }
          }
          readOnly
        
        />
        <label className="form-check-label " htmlFor="exampleCheck1">Number</label>
      
        </div>
        <div className=" form-check ">
      <input type="checkbox"
      className="form-check-input"
      id="exampleCheck1"
      defaultChecked = {Char}
      onChange={()=>
        {
          setChar ((prev) => !prev)
      }
        }
      />
      <label className="form-check-label " htmlFor="exampleCheck1">Characters</label>
        </div>
    </div>

        </div>
        </div>
        </div>

    )
    
    
    
    
    
}

export default Password;

