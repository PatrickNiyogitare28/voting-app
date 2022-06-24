import { useState } from 'react';
import toast, {Toaster} from 'react-hot-toast';
import { addVote } from '../../services/candidacy';
import './styles.css';

const VoteItem = ({vote, styles, imgStyles, actions}) => {
    const {_id, avatar, votes, user} = vote;
    const [currentVotes, setCurrentVotes] = useState(votes);

    const voteCandidate = async () => {
      const response = await addVote(_id);
      if(response?.success === true) {
        setCurrentVotes(currentVotes + 1);
        toast.success('Voted successfully');
      }
      else{
        toast.error(response?.message || 'Something went wrong');
      }
    }

    return (
        <div className='vote-wrapper' style={styles}>
          <Toaster />
          <img src={avatar} alt={user?.name} style={imgStyles} />
          <div className='data-wrapper'>
            <h1>{user?.name}</h1>
            <h2>{currentVotes}</h2>
          </div>
          {!actions && 
          <div className='button-wrapper'>
              <button onClick={voteCandidate}>Vote</button>
          </div>
          }
          {actions}
        </div>
    );
}

export default VoteItem;