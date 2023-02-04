import React from "react";

const Card = () => {
    return (
        <>
            <div className="card">
              <a href="home.html" target="_blank">
                <img src="images/60111.jpg" alt="profile photo" />
              </a>
              <div className="item">
                <h1 className="data">Desain UI untuk halaman Webflow</h1>
              </div>
              <div className="price">
                <h1>Rp 100.000</h1>
                <p>Par jam</p>
              </div>
              <br />
              <br />

              <p className="main_data">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, magnam aut
                velit commodi optio quas vitae tempora dolore expedita explicabo.
              </p>
              <button type='submit' className="btn">Design</button>
              <button type='submit' className="btn">Frontend development</button>
              <button type='submit' className="btn">Magang</button>
            </div>
        </>
    )
}

export default Card;