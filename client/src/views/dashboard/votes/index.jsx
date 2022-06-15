import Layout from "../../../components/layout"
import VoteItem from "../../../components/votes/VoteItem";
import { votes } from "../../../utils/data";
import './styles.css';

const Votes = () => {
    return (
        <Layout activeRoute='votes'>
            <div>
                <h1>Peoples' votes</h1>

                <div className="votes-container">
                    {votes.map((vote, index) => (
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