import hombre from "../assets/img/hombre.jpg";
export const Inicio = () => {
   
    return (
      <main>
        <div className=" bg-[#748CAB] m-8 rounded-2xl ">
            <img src={hombre} alt="" className="rounded-2xl w-1/2" />
        </div>
      </main>
    );
  }
  
  export default Inicio;