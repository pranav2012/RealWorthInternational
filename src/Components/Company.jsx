import React from 'react';
import '../styles/company.scss';

export default function Company() {
    let imgname = ["apollo","energetic","Fkb","generant","georgin","heattrace","nuovafima","Parker","pietro","racor","Raychem","Regport","rotok","Rvlok","sandvik","sharpe","tungum","vemtec","westlock"]
    return (
        <div id="company">
            <h2 className="chead" >Our Partners</h2>
            <div className="company-bar">
                {imgname.map((iname,id)=><img className="SingleCompany" alt="company" key={id} src={require("../assets/images/Companies/" + iname + ".png")} />)}
            </div>
        </div>
    )
}
