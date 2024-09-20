import { useState } from "react";

export default function App() {
  const [level, setLevel] = useState(0);
  const [food, setFood] = useState("ฟักทอง");
  const [isFeeding, setIsFeeding] = useState(false);

  const feedPig = (levelIncrease) => {
    if (!isFeeding) {
      setIsFeeding(true);
      setLevel(prevLevel => prevLevel + levelIncrease);
      setTimeout(() => setIsFeeding(false), 2000);
    }
  };

  const selectFoodAndFeed = (selectedFood, levelIncrease) => {
    setFood(selectedFood);
    feedPig(levelIncrease); 
  };

  return (
    <div style={{
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh",
      width: "100vw",
      flexDirection: "column",
      backgroundColor: "#ADD8E6", 
      backgroundImage: 'url("/path/to/your/background-image.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      opacity: 0.9, 
    }}>
      <h1>เกมเลี้ยงหมูเด้ง: ระดับ {level}</h1>

      <img
        src={level >= 100 ? "https://cdn.readawrite.com/articles/3568/3567411/thumbnail/large.gif?1" : "https://www.khaosod.co.th/wpapp/uploads/2024/09/Nong-Moo-Deng4548-5.jpg"}
        alt={level >= 100 ? "หนูเอง" : "หมูเด้ง"}
        style={{
          width: level >= 100 ? "200px" : `${300 + level * 2}px`,  
          height: "auto",
          transition: "transform 0.3s",
          transform: isFeeding ? "scale(1.1)" : "scale(1)",
        }}
      />
      
      <h2>เลือกอาหารเพื่อเพิ่มเลเวล</h2>
      <button
        onClick={() => feedPig(1)}
        disabled={true}  
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          backgroundColor: isFeeding ? "gray" : "green",
          color: "white",
          cursor: isFeeding ? "not-allowed" : "cursor", 
          borderRadius: "10px",
          margin: "10px"
        }}
      >
        {isFeeding ? "กำลังให้อาหาร..." : "ให้อาหาร"}
      </button>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <div
          onClick={() => selectFoodAndFeed("แตงโม", 5)}
          style={{
            cursor: isFeeding ? "not-allowed" : "pointer",
            marginRight: "20px",
            textAlign: "center",
            border: "2px solid transparent",
            borderRadius: "10px",
            padding: "5px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            backgroundColor: food === "แตงโม" ? "rgba(255, 255, 255, 0.7)" : "transparent",
          }}
        >
          <img src="https://spfresh.co.th/wp-content/uploads/2022/12/แตงโมง-1.jpg" alt="อาหาร: แตงโม" style={{ width: "200px", height: "auto" }} />
        </div>

        <div
          onClick={() => selectFoodAndFeed("ฟักทอง", 10)}
          style={{
            cursor: isFeeding ? "not-allowed" : "pointer",
            marginRight: "20px",
            textAlign: "center",
            border: "2px solid transparent",
            borderRadius: "10px",
            padding: "5px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            backgroundColor: food === "ฟักทอง" ? "rgba(255, 255, 255, 0.7)" : "transparent",
          }}
        >
          <img src="https://spfresh.co.th/wp-content/uploads/2022/12/ฟักทอง-2.jpg" alt="อาหาร: ฟักทอง" style={{ width: "200px", height: "auto" }} /> 
        </div>

        <div
          onClick={() => selectFoodAndFeed("ส้มตำ", 20)}
          style={{
            cursor: isFeeding ? "not-allowed" : "pointer",
            textAlign: "center",
            border: "2px solid transparent",
            borderRadius: "10px",
            padding: "5px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            backgroundColor: food === "ส้มตำ" ? "rgba(255, 255, 255, 0.7)" : "transparent",
          }}
        >
          <img src="https://www.unileverfoodsolutions.co.th/th/chef-inspiration/simple-tips-for-great-flavour/somtum-green-papaya-salad-recipes/jcr:content/parsys/content-aside-footer/tipsandadvice/image.img.jpg/1695118621402.jpg" alt="อาหาร: ส้มตำ" style={{ width: "200px", height: "auto" }} />
        </div>
      </div>
    </div>
  );
}
