import React , {useState, useEffect} from 'react'
import _ from 'lodash'
import seeding from 'seeding'
import axios from "axios";
import NavBar from "../../Components/NavBar";

export default function MenSinglesTiesheet() {

    const [MenSinglesPlayer, setMenSinglesPlayer] = useState([]);
    

    useEffect(() => {
        axios.get("http://localhost:5000/getMenSinglesPlayer").then((response) => {
          setMenSinglesPlayer(response.data);
          console.log("mens", MenSinglesPlayer);
        });
      }, []);

      const sortedPlayer = _.sortBy(MenSinglesPlayer, ["PlayerSlot"]);

      const tie = seeding.fair(sortedPlayer)
    
        
      console.log("sorted", sortedPlayer)
      console.log("tiesheet", tie)
    return (
        <div>
            <NavBar />
            <div>
                <div className = "container-fluid flex main-tiesheet">
                  
                     
                    <div className = "col-4 matches">
                        

                        
                        <div>

                        </div>

                    
                    </div>

                    
                    

                </div>
            </div>

        </div>
    )
}
