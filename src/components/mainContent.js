import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/maincontent.css';

const MainContent = ({ID}) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3003/v1/essay/")
            .then(response => response.json())
            .then(data => {
                setData(data.results);
            });
    }, [ID]);

    console.log("MainContentID:",ID);

    const essay = data.find(x => x.id === ID);  // tại sao lúc load nó lại không defined?

    console.log(essay);

    if(essay){
        return(
            <div className="linebreak">

                <div>
                <h6>{essay.topic}</h6>
                </div>

                <br/>

                <div>
                    <h6>
                        {essay.outline}
                    </h6>
                </div>

                <div>
                    <p>
                        {essay.essay}
                    </p>
                </div>

            </div>
        )
    } else{
        return(
            <div><h1>Xin hãy chọn chủ đề</h1></div>
        )
    }
}

export default MainContent;
