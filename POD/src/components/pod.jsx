import Nav from "./nav"
import './../styles/pod.css'
import './../util/util.css'
import mock from '/mop.png'

function POD(){
    return(
        <div className="pod">
            <div className="top">
                <Nav/>
            </div>

            <div className="poddesign">
                <div className="poddes grid grid-12-col gap16">
                    <div className="tshirtsPOD pad16 grid grid-1-col gap16">
                        <h2 className="mockhead">Mockups</h2>
                        {[1,2,3,4].map(el=>
                            <img src={mock} alt="mock" className="mockItem"/>
                        )}
                    </div>
                    <div className="tshirtsPOD_display">

                    </div>
                    <div className="tshirtsPOD_des pad16 grid grid-1-col gap16">
                        <button className="uploadOwnDesign">Upload your design</button>
                        <h2 className="mockhead">select design</h2>
                        {[1,2,3,4].map(el=>
                            <img src={mock} alt="mock" className="mockItem"/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default POD;