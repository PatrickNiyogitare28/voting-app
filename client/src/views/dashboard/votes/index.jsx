import { useState, useEffect } from "react";
import Layout from "../../../components/layout"
import VoteItem from "../../../components/votes/VoteItem";
import { getAllCandidacy } from "../../../services/candidacy";
// import { votes } from "../../../utils/data";
import './styles.css';

const Votes = () => {
    const [candidacies,setCandidacies] = useState([]);
    useEffect(() => {
        getCandidacies();
    },[])

    const getCandidacies = async () => {
        const response = await getAllCandidacy();
        setCandidacies(response?.data || []);
    }

    return (
        <Layout activeRoute='votes'>
            <div>
                <h1>Peoples' votes</h1>

                <div className="votes-container">
                    {candidacies.map((vote, index) => (
                        <div key={index.toString()} className='vote-item'>
                           <VoteItem vote={vote} />
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default Votes;