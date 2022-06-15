import { Navigate, useNavigate } from "react-router-dom";
import Layout from "../../../components/layout"
import VoteItem from "../../../components/votes/VoteItem";
import { votes } from "../../../utils/data";
import './styles.css';

const Actions = () => {
    const navigate = useNavigate();
    return (
        <div className="actions-container">
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Facere illum eos officiis atque, aut aliquid vero tempora possimus 
                dignissimos sunt veritatis excepturi harum ad quod et, earum qui quibusdam cumque.</p>
            <div className="btns-wrapper">
            <button onClick={() => navigate(`/upload-candidacy?voteId=123`)}>Update</button>
            <button>Delete</button>
            </div>
        </div>
    )
}

const MyVotes = () => {
    return (
        <Layout activeRoute='my-votes'>
            <div className="my-votes-container">
                <div className="vote-item">
                <VoteItem 
                    vote={votes[0]}
                    styles={{MinHeight:'25vh',padding:'40px', backgroundColor:'white', borderRadius:'10px', boxShadow:'0px 0px 10px rgba(0,0,0,0.1)'}}
                    imgStyles={{height:'40vh'}}
                    actions={<Actions />}
                    />
                </div>
            </div>
        </Layout>
    )
}

export default MyVotes;