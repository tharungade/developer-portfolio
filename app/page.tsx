import Image from "next/image";

export default function Home() {
  return (
    <>
     <div className="text-center p-8">
      <img src="/hero.svg" className="max-w-xl m-auto"/>
      <h1 className="text-3xl font-semibold">I am tharun an aspiring <span style={{"color": "var(--primariy-color)"}}>developer</span></h1>
     </div>

    <div className="p-8 text-center" style={{"background-color": "var(--grey-background)"}}>
      <div className="m-auto max-w-xl">
        <h1>programming languages</h1>
        <p className="pt-4">I'm comfortable with programming languages C, C++, Python, Java. Open to learn new languages and able to switch between programming languages quickly. </p>
      </div>
    </div>

     <div className="p-8 text-center ">
        <div className="m-auto max-w-xl">
          <h1>technologies</h1>
          <p className="pt-4">I'm familiar with HTML, CSS, Javascript, Git, Flask. I am flexible and adaptive in learning new technologies.</p>
        </div>
      </div>

    <div className="p-8 text-center " style={{"background-color": "var(--grey-background)"}}>
      <div className="m-auto max-w-xl">
        <h1>projects</h1>
        <p className="pt-4">I have done a project on Blockchain. It is BLOCKCHAIN BASED ONLINE VOTING SYSTEM.</p>
      </div>
     </div>
    </>
  );
}
