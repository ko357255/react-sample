import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const featchData = async () => {
      // 犬の画像のURLをランダムで返すAPI
      const url = "https://dog.ceo/api/breeds/image/random";
      const res = await fetch(url);
      const data = await res.json(); // { message: url, status: 'sucess'}
      console.log(data);
      setImageUrl(data.message);
    };
    featchData();
  }, []); // １回のみ実行

  return (
    // w-full: 横幅を100% h-screen: 高さ上下いっぱい
    <div className="App bg-gray-700 text-white w-full h-screen">
      ここはAPP
      <div>カウント:{count}</div>
      <div>
        <button className="bg-gray-900 p-2" onClick={handleClick}>
          カウント
        </button>
      </div>
      <div>
        <div>犬の画像</div>
        {imageUrl && <img width={500} src={imageUrl} alt="犬の画像" />}
      </div>
    </div>
  );
};

export default App;
