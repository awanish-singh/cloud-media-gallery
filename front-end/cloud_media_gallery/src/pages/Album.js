
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import items from "./data";

const AlbumPage = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isLoggedIn);
    if (!isLoggedIn) {
      navigate("/login", { replace: true });
    }
  });

  return (

    <div className="section-center">
      {
        items.map((albumData) => {
          const { id, title, img, desc } = albumData;

          return (
            <ul>
              <div class="grid-container">
                <div class="grid-item" >
                  <div className="album-data" key={id}>
                    <img src={img} alt={title} className="photo" />
                    <div className="album-info">
                      <header>
                        <h4>{title}</h4>
                      </header>
                      <p id="item-text">{desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          )
        })
      }
    </div>
  );
};

export default AlbumPage;
