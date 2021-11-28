import react, { useState } from "react";
import { Modal } from "antd";
//import ReactDOM from "react-dom";
import Icon1 from "./pics/icon1.png";
import Icon2 from "./pics/icon2.png";
import Icon3 from "./pics/icon3.png";
import Icon4 from "./pics/icon4.png";
import Icon5 from "./pics/icon5.png";
import Icon6 from "./pics/icon6.png";
import Icon7 from "./pics/icon7.png";

const ProfilePicChanger = ({ handleImageChange }) => {
  const [imagesArray, setImmageArray] = useState([
    Icon1,
    Icon2,
    Icon3,
    Icon4,
    Icon5,
    Icon6,
    Icon7,
  ]);

  const [currentImage, setCurrentImage] = useState(pic3);

  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const fileSelectedHandler = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      console.log(event.target.result);
      if (reader.readyState === 2) {
        //0=empty, 1=loading, 2=done.
        setCurrentImage(reader.result);
        console.log(reader.result);
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const imageMapper = imagesArray.map((image) => {
    return (
      <>
        <img
          src={currentImage || image}
          onClick={() => handleImageChange(image)}
          height="10%"
          width="10%"
        />
        <input
          type="file"
          onChange={fileSelectedHandler}
          placeholder="Add Photo"
        />
      </>
    );
  });
  return (
    <div id="picture" align="center">
      <br></br>
      <br></br>
      <button type="primary" className="reg-btn" onClick={showModal}>
        Change Icon
      </button>
      <Modal
        title="Change Eduguide Icon"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {imageMapper}
      </Modal>
    </div>
  );
};

export default ProfilePicChanger;

//ReactDOM.render(<ProfilePicChanger />, document.getElementById("picture"));
