// import { useState } from "react";


function App() {
  // const [contributors, setContributors] = useState("");

   async function getContributors(){
    const respose = await fetch("https://api.github.com/repos/hiteshchoudhary/apihub/commits");
    const result = await respose.json();
    console.log("All contributors", result);
  }

  getContributors();


  return (
    <main className="bg-neutral-700 text-white w-full h-screen">
      Thank Contributors
    </main>
  )
}

export default App
