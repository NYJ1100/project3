// import { useSearchParams } from "react-router-dom";

// const Home = () => {
//     const [searchParams, setSearchParams] = useSearchParams();
//     console.log(searchParams.get("sort"));

//     return <div>Home 페이지입니다</div>;
// };
// export default Home;


import Editor from "../component/Editor";

const Home = () => {
    return (
        <div>
            <Editor
            onSubmit={() => {
                alert("작성 완료 버튼을 클릭했음");
            }} 
            />
        </div>
    );
};
export default Home;